import { email, experiences, linkedin, siteUrl } from './profile';
function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d={diagonal ? 'M5 19 19 5M5 5h14v14' : 'M4 12h16m-7-7 7 7-7 7'} /></svg>;
}
const structuredData = {
  '@context': 'https://schema.org', '@type': 'ProfilePage', '@id': `${siteUrl}/#profile`, url: `${siteUrl}/`,
  mainEntity: { '@type': 'Person', '@id': `${siteUrl}/#person`, name: 'Bilal Muhazzin', url: `${siteUrl}/`, jobTitle: 'Digital Marketing Specialist',
    description: 'Digital marketing specialist in Mangaluru with experience in SEO, Google Ads, Meta Ads, social media management and lead generation.',
    email, telephone: '+917019228564', sameAs: [linkedin],
    address: { '@type': 'PostalAddress', addressLocality: 'Mangaluru', addressRegion: 'Karnataka', addressCountry: 'IN' },
    worksFor: { '@type': 'Organization', name: 'Komquest Solutions' },
    alumniOf: [{ '@type': 'EducationalOrganization', name: 'upGrad' }, { '@type': 'CollegeOrUniversity', name: 'St. Aloysius (Deemed to be University)' }],
    knowsAbout: ['Search engine optimization', 'Local SEO', 'Google Ads', 'Meta Ads', 'Social media marketing', 'Lead generation', 'Content strategy', 'Campaign analytics']
  }
};
export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
    <a className="skip" href="#main">Skip to content</a>
    <header className="header"><a className="wordmark" href="#main" aria-label="Bilal Muhazzin home">bm<span>.</span></a><nav aria-label="Main navigation"><a href="#expertise">Expertise</a><a href="#experience">Experience</a><a href="#education">Education</a><a className="nav-contact" href="#contact">Let’s talk <Arrow diagonal /></a></nav></header>
    <main id="main">
      <section className="hero" aria-labelledby="name">
        <img className="hero-image" src="/optical-prism-hero.png" width="1536" height="1024" alt="" fetchPriority="high" />
        <div className="hero-content"><p className="location">Digital marketing specialist · Mangaluru, India</p><h1 id="name">Bilal<br />Muhazzin<span>.</span></h1><p className="hero-focus">Search. Strategy. <em>Growth.</em></p><p className="hero-description">I connect SEO, paid advertising and content to help brands get discovered and turn attention into enquiries.</p><div className="hero-actions"><a className="button" href="#experience">Explore my experience <Arrow /></a><a className="text-link" href={`mailto:${email}`}>Get in touch <Arrow diagonal /></a></div></div>
        <div className="hero-foot"><span>SEO & digital marketing in Mangaluru</span><a href="#expertise">Scroll to explore <span aria-hidden="true">↓</span></a></div>
      </section>
      <section className="expertise section" id="expertise" aria-labelledby="expertise-title"><div className="section-heading"><p className="eyebrow">01 / What I do</p><h2 id="expertise-title">A clearer path<br />to <em>digital growth.</em></h2><p className="section-intro">From organic search to paid campaigns, I bring content, targeting and performance analysis together.</p></div><div className="expertise-list">
        <article><span className="number">01</span><div><h3>SEO & organic visibility</h3><p>Keyword research, on-page SEO, local search, off-page SEO and content optimisation for stronger discoverability.</p></div></article>
        <article><span className="number">02</span><div><h3>Paid media & lead generation</h3><p>Google Ads and Meta Ads campaign planning, audience targeting, budget management and performance optimisation.</p></div></article>
        <article><span className="number">03</span><div><h3>Social media & content</h3><p>Content calendars, ad creatives, WhatsApp marketing and CRM automation that support a consistent brand presence.</p></div></article>
      </div></section>
      <section className="experience section" id="experience" aria-labelledby="experience-title"><aside className="section-heading"><p className="eyebrow">02 / Professional experience</p><h2 id="experience-title">The work<br />behind the <em>thinking.</em></h2><p className="section-intro">Agency, freelance and in-house marketing experience across technology, professional services and retail.</p><div className="experience-note"><span className="note-dot" />Based in Mangaluru, Karnataka</div></aside><div className="career-list">{experiences.map((job, index) => <article className={`career-entry ${job.current ? 'current' : ''}`} key={job.company}><div className="career-meta"><span>{job.start} — {job.end}</span><span>{job.type}</span></div><div className="career-title"><span className="career-index">0{index + 1}</span><div><h3>{job.role}</h3><p className="company">{job.company}</p></div></div><p className="job-summary">{job.summary}</p>{job.result && <div className="result"><strong>{job.result}</strong><div><span>{job.resultLabel}</span><small>OnePlanet360 · Meta Ads campaign result</small></div></div>}{job.points.length > 0 && <ul className="responsibilities">{job.points.map(point => <li key={point}>{point}</li>)}</ul>}<p className="skill-line">{job.skills.map(skill => <span key={skill}>{skill}</span>)}</p></article>)}</div></section>
      <section className="education section" id="education" aria-labelledby="education-title"><div className="section-heading"><p className="eyebrow">03 / Education</p><h2 id="education-title">A foundation<br />in business. <em>A focus<br />on digital.</em></h2></div><div className="education-list"><article><div className="education-meta"><span>upGrad</span><span>May — Dec 2025</span></div><h3>Professional Certificate Programme in Digital Marketing and Advertising</h3><p>Practical training in Google Ads, Meta Ads and programmatic buying, with hands-on campaign planning, audience targeting, budgeting, analytics and A/B testing of ad creatives.</p></article><article><div className="education-meta"><span>St. Aloysius (Deemed to be University)</span><span>2022 — 2025</span></div><h3>Bachelor of Commerce<br /><em>Accounting</em></h3><p>Studied business statistics, financial management and market research, developing an analytical foundation in market trends, consumer behaviour and business performance.</p></article></div></section>
      <section className="contact section" id="contact" aria-labelledby="contact-title"><p className="eyebrow">04 / Let’s connect</p><div className="contact-line"><h2 id="contact-title">Your next chapter.<br /><em>Let’s talk growth.</em></h2><a className="contact-arrow" href={`mailto:${email}`} aria-label="Email Bilal Muhazzin"><Arrow diagonal /></a></div><div className="contact-details"><a href={`mailto:${email}`}>{email}<Arrow diagonal /></a><a href="tel:+917019228564">+91 70192 28564<Arrow diagonal /></a><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<Arrow diagonal /></a></div><p className="contact-location">Falnir, Mangaluru (Mangalore), Karnataka, India</p></section>
    </main><footer><a className="footer-name" href="#main">Bilal Muhazzin<span>.</span></a><span>SEO · Paid media · Content strategy</span><a href="#main">Back to top <span aria-hidden="true">↑</span></a></footer>
  </>;
}
