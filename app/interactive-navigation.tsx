'use client';
import { useEffect, useRef, useState } from 'react';
const sections = [{ id: 'expertise', label: 'Skills' }, { id: 'experience', label: 'Experience' }, { id: 'education', label: 'Education' }, { id: 'contact', label: 'Contact' }];
export function InteractiveNavigation() {
  const [active, setActive] = useState('');
  const progress = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const value = height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0;
      if (progress.current) progress.current.style.transform = `scaleX(${value})`;
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= 160) current = section.id;
      }
      if (value >= .99) current = 'contact';
      setActive(current);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);
    update();
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!motion.matches) entry.target.classList.add('reveal-once');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });
    document.querySelectorAll('.section-heading, .expertise-list article, .career-entry, .education-list article, .contact-line').forEach(element => observer.observe(element));
    return () => { window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); cancelAnimationFrame(frame); resize.disconnect(); observer.disconnect(); };
  }, []);
  return <><nav aria-label="Main navigation">{sections.map(section => <a key={section.id} href={`#${section.id}`} aria-current={active === section.id ? 'location' : undefined} className={section.id === 'contact' ? 'nav-contact' : undefined}>{section.label}{section.id === 'contact' && <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg>}</a>)}</nav><span className="reading-progress" ref={progress} aria-hidden="true" /></>;
}
