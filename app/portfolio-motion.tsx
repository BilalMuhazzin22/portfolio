'use client';
import { useEffect, useRef, useState } from 'react';

export function PortfolioMotion() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const hero = document.querySelector<HTMLElement>('.hero');
    const avatar = document.querySelector<HTMLElement>('.avatar-track');
    const progress = document.querySelector<HTMLElement>('.reading-progress');
    const serviceRows = Array.from(document.querySelectorAll<HTMLElement>('.service-row'));
    const navigation = Array.from(document.querySelectorAll<HTMLAnchorElement>('nav a[href^="#"]')).map(link => ({ link, section: document.querySelector<HTMLElement>(link.hash) }));
    let frame = 0;
    const update = () => {
      frame = 0;
      const h = document.documentElement.scrollHeight - innerHeight;
      if (progress) progress.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
      if (hero && avatar) {
        const p = Math.max(0, Math.min(1, scrollY / hero.offsetHeight));
        avatar.style.setProperty('--travel', reduced.matches ? '0' : String(p));
      }
      let active = '';
      navigation.forEach(({ link, section }) => { if (section && section.getBoundingClientRect().top <= 160) active = link.hash; });
      navigation.forEach(({ link }) => { if (link.hash === active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
      serviceRows.forEach(row => {
        const p = Math.max(0, Math.min(1, (innerHeight * .92 - row.getBoundingClientRect().top) / (innerHeight * .45)));
        row.style.setProperty('--reveal', reduced.matches ? '1' : String(p));
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
    update();
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); reduced.removeEventListener('change', schedule); observer.disconnect(); };
  }, []);
  return <span className="reading-progress" aria-hidden="true" />;
}

export function AvatarStage() {
  const stage = useRef<HTMLButtonElement>(null);
  const [wave, setWave] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  function greet() {
    setWave(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setWave(false), 1800);
  }
  return <div className="avatar-track"><button ref={stage} className={`avatar-stage ${wave ? 'is-waving' : ''}`} aria-label="Say hello to Bilal’s avatar" onClick={greet} onPointerMove={event => {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--look-x', `${((event.clientX - rect.left) / rect.width - .5) * 16}deg`);
    event.currentTarget.style.setProperty('--look-y', `${-((event.clientY - rect.top) / rect.height - .5) * 12}deg`);
  }} onPointerLeave={event => { event.currentTarget.style.setProperty('--look-x', '0deg'); event.currentTarget.style.setProperty('--look-y', '0deg'); }}>
    <span className="avatar-orbit" aria-hidden="true" />
    <span className="avatar-float"><img src="/bilal-cartoon-avatar.png" alt="A cartoon 3D avatar of Bilal with curly hair, expressive eyes and a friendly smile" width="768" height="768" fetchPriority="high" /></span>
    <span className={`hello-bubble ${wave ? 'show' : ''}`} aria-live="polite">{wave ? 'Hey there! Let’s create something.' : ''}</span>
  </button><span className="avatar-caption">A little curiosity goes a long way. <span>Try saying hello ↗</span></span></div>;
}

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState('Copy email');
  return <button className="copy-email" onClick={async () => {
    try { await navigator.clipboard.writeText(email); setStatus('Copied!'); }
    catch { setStatus('Select the email address to copy'); }
  }}><span aria-live="polite">{status}</span><span aria-hidden="true">↗</span></button>;
}
