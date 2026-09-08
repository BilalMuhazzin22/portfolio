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
    <header className="header"><a className="wordmark" href="#main" aria-label="Bilal Muhazzin home">bm<span>.</span></a><nav aria-label="Main navigation"><a href="#expertise">Skills</a><a href="#experience">Experience</a><a href="#education">Education</a><a className="nav-contact" href="#contact">Contact <Arrow diagonal /></a></nav></header>
    <main id="main">
      <section className="hero" aria-labelledby="name">
        <img className="hero-image" src="/optical-prism-hero.png" width="1536" height="1024" alt="" fetchPriority="high" />
        <div className="hero-content"><p className="location">Digital marketing specialist · Mangaluru, India</p><h1 id="name">Bilal<br />Muhazzin<span>.</span></h1><p className="hero-focus">SEO. Paid media. <em>Content.</em></p><p className="hero-description">I’m a Digital Marketing Specialist at Komquest Solutions, with experience in SEO, Google Ads, Meta Ads and social media management.</p><div className="hero-actions"><a className="button" href="#experience">View work experience <Arrow /></a><a className="text-link" href={`mailto:${email}`}>Email me <Arrow diagonal /></a></div></div>
        <div className="hero-foot"><span>Currently at Komquest Solutions</span><a href="#expertise">Scroll to explore <span aria-hidden="true">↓</span></a></div>
      </section>
      <section className="expertise section" id="expertise" aria-labelledby="expertise-title"><div className="section-heading"><p className="eyebrow">01 / Core skills</p><h2 id="expertise-title">What I bring<br />to a <em>marketing team.</em></h2><p className="section-intro">Hands-on experience in search optimisation, campaign management and content production, supported by a commerce degree and digital marketing training.</p></div><div className="expertise-list">
        <article><span className="number">01</span><div><h3>SEO & organic visibility</h3><p>Keyword research, on-page content optimisation, local business listings and off-page SEO.</p></div></article>
        <article><span className="number">02</span><div><h3>Paid media & lead generation</h3><p>Google Ads and Meta Ads setup, audience targeting, budget management and campaign performance reviews.</p></div></article>
        <article><span className="number">03</span><div><h3>Social media & content</h3><p>Social media calendars, Canva and Adobe Express creatives, WhatsApp marketing and CRM automation.</p></div></article>
      </div></section>
      <section className="experience section" id="experience" aria-labelledby="experience-title"><aside className="section-heading"><p className="eyebrow">02 / Work experience</p><h2 id="experience-title">Roles, responsibilities<br />& <em>results.</em></h2><p className="section-intro">My work spans agency client accounts, freelance campaigns and a marketing internship, with responsibilities across search, social media and advertising.</p><div className="experience-note"><span className="note-dot" />Based in Mangaluru, Karnataka</div></aside><div className="career-list">{experiences.map((job, index) => <article className={`career-entry ${job.current ? 'current' : ''}`} key={job.company}><div className="career-meta"><span>{job.start} — {job.end}</span><span>{job.type}</span></div><div className="career-title"><span className="career-index">0{index + 1}</span><div><h3>{job.role}</h3><p className="company">{job.company}</p></div></div><p className="job-summary">{job.summary}</p>{job.result && <div className="result"><strong>{job.result}</strong><div><span>{job.resultLabel}</span><small>OnePlanet360 · Individual campaign result</small></div></div>}{job.points.length > 0 && <ul className="responsibilities">{job.points.map(point => <li key={point}>{point}</li>)}</ul>}<p className="skill-line">{job.skills.map(skill => <span key={skill}>{skill}</span>)}</p></article>)}</div></section>
      <section className="education section" id="education" aria-labelledby="education-title"><div className="section-heading"><p className="eyebrow">03 / Education</p><h2 id="education-title">Business foundations.<br /><em>Digital marketing<br />training.</em></h2></div><div className="education-list"><article><div className="education-meta"><span>upGrad</span><span>May — Dec 2025</span></div><h3>Professional Certificate Programme in Digital Marketing and Advertising</h3><p>Completed practical training in Google Ads, Meta Ads and programmatic buying. Project work covered audience targeting, campaign budgets, performance tracking and A/B testing of ad creatives.</p></article><article><div className="education-meta"><span>St. Aloysius (Deemed to be University)</span><span>2022 — 2025</span></div><h3>Bachelor of Commerce<br /><em>Accounting</em></h3><p>Coursework included business statistics, financial management and market research, with a focus on analysing market trends and consumer behaviour.</p></article></div></section>
      <section className="contact section" id="contact" aria-labelledby="contact-title"><p className="eyebrow">04 / Contact</p><div className="contact-line"><h2 id="contact-title">Discuss a role<br /><em>or a project.</em></h2><a className="contact-arrow" href={`mailto:${email}`} aria-label="Email Bilal Muhazzin"><Arrow diagonal /></a></div><div className="contact-details"><a href={`mailto:${email}`}>{email}<Arrow diagonal /></a><a href="tel:+917019228564">+91 70192 28564<Arrow diagonal /></a><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<Arrow diagonal /></a></div><p className="contact-location">Based in Mangaluru (Mangalore), Karnataka, India</p></section>
    </main><footer><a className="footer-name" href="#main">Bilal Muhazzin<span>.</span></a><span>Digital marketing · SEO · Paid media</span><a href="#main">Back to top <span aria-hidden="true">↑</span></a></footer>
  </>;
}
