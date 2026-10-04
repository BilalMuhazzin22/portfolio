'use client';
import { useEffect, useRef, useState } from 'react';

export function PortfolioMotion() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const progress = document.querySelector<HTMLElement>('.reading-progress');
    const serviceRows = Array.from(document.querySelectorAll<HTMLElement>('.service-row'));
    const timelineItems = Array.from(document.querySelectorAll<HTMLElement>('.education-list article'));
    const careerList = document.querySelector<HTMLElement>('.career-list');
    const careerCards = Array.from(document.querySelectorAll<HTMLElement>('.career-entry'));
    // Let tall cards scroll into view before pinning, including short desktop windows.
    const sizeCareerStack = () => {
      careerList?.style.removeProperty('--stack-height');
      const tallest = Math.max(0, ...careerCards.map(card => card.offsetHeight));
      if (careerList) {
        careerList.dataset.stack = String(!reduced.matches && innerWidth > 700);
        careerList.style.setProperty('--stack-height', `${tallest}px`);
        careerList.style.setProperty('--stack-top', `${Math.min(24, innerHeight - tallest - 104)}px`);
      }
    };
    const careerResize = new ResizeObserver(sizeCareerStack);
    careerCards.forEach(card => careerResize.observe(card));
    window.addEventListener('resize', sizeCareerStack);
    reduced.addEventListener('change', sizeCareerStack);
    sizeCareerStack();
    const navigation = Array.from(document.querySelectorAll<HTMLAnchorElement>('nav a[href^="#"]')).map(link => ({ link, section: document.querySelector<HTMLElement>(link.hash) }));
    let frame = 0;
    const update = () => {
      frame = 0;
      const h = document.documentElement.scrollHeight - innerHeight;
      if (progress) progress.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
      let active = '';
      navigation.forEach(({ link, section }) => { if (section && section.getBoundingClientRect().top <= 160) active = link.hash; });
      navigation.forEach(({ link }) => { if (link.hash === active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
      serviceRows.forEach(row => {
        const p = Math.max(0, Math.min(1, (innerHeight * .92 - row.getBoundingClientRect().top) / (innerHeight * .45)));
        row.style.setProperty('--reveal', reduced.matches ? '1' : String(p));
      });
      // Draw each timeline segment down as it passes the upper part of the screen, then light the next dot.
      timelineItems.forEach((item, i) => {
        const next = timelineItems[i + 1];
        if (!next) return;
        const rect = item.getBoundingClientRect();
        const p = reduced.matches ? 1 : Math.max(0, Math.min(1, (innerHeight * .62 - rect.top - 40) / rect.height));
        item.style.setProperty('--draw', String(p));
        next.classList.toggle('is-reached', p > .97);
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    reduced.addEventListener('change', schedule);
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    // Tool tiles stay visible without JS; only hide them for the pop-in once the observer is watching.
    document.querySelectorAll<HTMLElement>('.toolkit-categories').forEach(el => { el.dataset.animate = ''; observer.observe(el); });
    update();
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); reduced.removeEventListener('change', schedule); observer.disconnect(); careerResize.disconnect(); window.removeEventListener('resize', sizeCareerStack); reduced.removeEventListener('change', sizeCareerStack); };
  }, []);
  return <span className="reading-progress" aria-hidden="true" />;
}

export function AvatarStage() {
  const stage = useRef<HTMLButtonElement>(null);
  const reaction = useRef<HTMLSpanElement>(null);
  const [message, setMessage] = useState('');
  const tapCount = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animation = useRef<Animation | null>(null);

  useEffect(() => {
    const button = stage.current;
    const hero = button?.closest<HTMLElement>('.hero');
    if (!button || !hero) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let targetX = 0, targetY = 0, currentX = 0, currentY = 0, frame = 0;
    const draw = () => {
      currentX += (targetX - currentX) * .12;
      currentY += (targetY - currentY) * .12;
      button.style.setProperty('--look-x', `${currentX * 15}deg`);
      button.style.setProperty('--look-y', `${-currentY * 11}deg`);
      button.style.setProperty('--lean-x', `${currentX * 10}px`);
      button.style.setProperty('--lean-y', `${currentY * 7}px`);
      if (Math.abs(targetX - currentX) + Math.abs(targetY - currentY) > .002) frame = requestAnimationFrame(draw);
      else frame = 0;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(draw); };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || reduced.matches) return;
      const rect = hero.getBoundingClientRect();
      targetX = Math.max(-1, Math.min(1, (event.clientX - rect.left - rect.width / 2) / (rect.width / 2)));
      targetY = Math.max(-1, Math.min(1, (event.clientY - rect.top - rect.height / 2) / (rect.height / 2)));
      schedule();
    };
    const reset = () => { targetX = 0; targetY = 0; schedule(); };
    const changeMotion = () => {
      if (reduced.matches) { cancelAnimationFrame(frame); frame = 0; currentX = currentY = targetX = targetY = 0; draw(); animation.current?.cancel(); }
    };
    hero.addEventListener('pointermove', move, { passive: true });
    hero.addEventListener('pointerleave', reset);
    window.addEventListener('blur', reset);
    reduced.addEventListener('change', changeMotion);
    return () => {
      hero.removeEventListener('pointermove', move); hero.removeEventListener('pointerleave', reset);
      window.removeEventListener('blur', reset); reduced.removeEventListener('change', changeMotion);
      cancelAnimationFrame(frame); animation.current?.cancel();
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  function greet() {
    const greetings = ['Hey, I’m Bilal. Nice to meet you!', 'A little personality. A lot of curiosity.', 'Have a project in mind? Let’s talk.'];
    const index = tapCount.current++ % greetings.length;
    setMessage(greetings[index]);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setMessage(''), 2600);
    animation.current?.cancel();
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && reaction.current) {
      const moves = [
        ['rotate(0deg) translateY(0)', 'rotate(-9deg) translateY(-15px)', 'rotate(9deg) translateY(-8px)', 'rotate(0deg) translateY(0)'],
        ['rotate(0deg) scale(1)', 'rotate(-12deg) scale(1.04)', 'rotate(12deg) scale(1.04)', 'rotate(0deg) scale(1)'],
        ['rotate(0deg) translateY(0)', 'rotate(-8deg) translateY(-12px)', 'rotate(8deg) translateY(-12px)', 'rotate(0deg) translateY(0)'],
      ];
      animation.current = reaction.current.animate(moves[index].map(transform => ({ transform })), { duration: 850, easing: 'cubic-bezier(.22,.7,.25,1)' });
    }
  }
  return <div className="avatar-track"><button ref={stage} className="avatar-stage" aria-label="Say hello to Bilal’s character" onClick={greet}>
    <span className="avatar-orbit" aria-hidden="true" />
    <span className="avatar-float"><span className="avatar-reaction" ref={reaction}><img src="/bilal-character-transparent.webp" alt="Bilal’s stylized cartoon character with swept dark hair, relaxed eyes, a moustache and goatee" width="1280" height="1280" fetchPriority="high" decoding="async" draggable={false} /></span></span>
    <span className={`hello-bubble ${message ? 'show' : ''}`} aria-live="polite" aria-atomic="true">{message}</span>
  </button><span className="avatar-caption">A little curiosity goes a long way.<span className="pointer-hint">Move your cursor · Click to say hello</span><span className="touch-hint">Tap to say hello</span></span></div>;
}

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState('Copy email');
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (resetTimer.current) clearTimeout(resetTimer.current); }, []);
  return <button className="copy-email" onClick={async () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    try { await navigator.clipboard.writeText(email); setStatus('Copied!'); }
    catch { setStatus('Select the email address to copy'); }
    resetTimer.current = setTimeout(() => setStatus('Copy email'), 4000);
  }}><span aria-live="polite">{status}</span><span aria-hidden="true">↗</span></button>;
}
