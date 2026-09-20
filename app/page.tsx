import { AudienceSection } from './audience-section';
import { ToolsSection } from './tools-section';
import { AvatarStage, CopyEmail, PortfolioMotion } from './portfolio-motion';
import { RoleDetails } from './role-details';
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
    <header className="header" id="top"><a className="wordmark" href="#main" aria-label="Bilal Muhazzin home">bm<span>✳</span></a><nav aria-label="Main navigation"><a href="#about">About</a><a href="#expertise">Skills</a><a href="#experience">Experience</a><a href="#contact">Contact <Arrow diagonal /></a></nav><PortfolioMotion /></header>
    <main id="main" tabIndex={-1}>
      <section className="hero" aria-labelledby="name">
        <div className="hero-topline"><span>Digital marketing specialist</span><span>Mangaluru, India <span className="tiny-star">✳</span></span></div>
        <h1 id="name">HI, I’M BILAL<span className="heading-dot">.</span></h1>
        <div className="hero-bottom"><div className="hero-intro"><p>I turn search, social<br />& paid media into<br /><em>meaningful connections.</em></p><span className="micro">BILAL MUHAZZIN / PORTFOLIO</span></div><AvatarStage /><div className="hero-cta"><a className="button" href="#contact">Contact me <Arrow diagonal /></a><p>SEO · Paid media · Content</p></div></div>
        <div className="hero-foot"><span><i />Currently at Komquest Solutions</span><a href="#about">Scroll to explore <span aria-hidden="true">↓</span></a></div>
      </section>
      <div className="discipline-strip" aria-hidden="true"><div>{[0,1].map(n => <span key={n}>SEARCH <b>✳</b> SOCIAL <b>✳</b> STRATEGY <b>✳</b> CONTENT <b>✳</b> </span>)}</div></div>
      <section className="about section" id="about" aria-labelledby="about-title"><div className="section-kicker"><span>01 / The person behind the campaigns</span><span>Meet Bilal ↙</span></div><h2 className="outline-title reveal" id="about-title">ABOUT ME</h2><div className="about-body"><div className="about-mark" aria-hidden="true">✳</div><div><h3 className="reveal">A curious mind.<br />A practical approach.<br /><em>A focus on growth.</em></h3><p>I’m Bilal Muhazzin, a Digital Marketing Specialist based in Mangaluru. I work across SEO, Google Ads, Meta Ads and social media, connecting creative ideas with day-to-day campaign work.</p><p>From agency client accounts to freelance campaigns, I bring a commerce background, digital marketing training and a habit of looking closely at what the data says.</p><a className="text-link" href={linkedin} target="_blank" rel="noopener noreferrer">More about me on LinkedIn <Arrow diagonal /></a></div></div></section>
      <section className="services section light-section" id="expertise" aria-labelledby="expertise-title"><div className="section-kicker"><span>02 / What I bring to the table</span><span>Strategy meets execution</span></div><h2 className="display-title reveal" id="expertise-title">MY SKILLS<span>↙</span></h2><div className="service-list">{[
        ['SEO & organic visibility', 'Helping the right people find you.', 'Keyword research, on-page optimisation, local business listings and off-page SEO.'],
        ['Paid media & lead generation', 'Making every campaign count.', 'Google Ads and Meta Ads setup, audience targeting, budget management and performance reviews.'],
        ['Social media & content', 'Giving brands something to say.', 'Content calendars, Canva and Adobe Express creatives, WhatsApp marketing and CRM automation.']
      ].map(([title, subtitle, description], index) => <article className="service-row" key={title}><span className="service-number">0{index + 1}</span><div><h3>{title}</h3><p>{subtitle}</p></div><p className="service-description">{description}</p><span className="service-arrow" aria-hidden="true">↗</span></article>)}</div></section>
      <ToolsSection />
      <AudienceSection />
      <section className="work section" id="experience" aria-labelledby="experience-title"><div className="section-kicker"><span>03 / Where I’ve put it to work</span><span>Agency · Freelance · In-house</span></div><h2 className="outline-title reveal" id="experience-title">EXPERIENCE</h2><div className="career-list">{experiences.map((job, index) => <article className={`career-entry career-${index}`} key={job.company}><div className="career-top"><span className="career-index">0{index + 1}</span><div><p className="company">{job.company}</p><h3>{job.role}</h3></div><div className="career-meta"><span>{job.start} — {job.end}</span><span>{job.type}{job.current && <i title="Current role" />}</span></div></div><div className="career-body"><p className="job-summary">{job.summary}</p>{job.result && <div className="result"><strong>{job.result}</strong><span>{job.resultLabel}<small>OnePlanet360 · Individual campaign result</small></span><span className="result-star" aria-hidden="true">✳</span></div>}{job.points.length > 0 && <RoleDetails points={job.points} role={`${job.role} at ${job.company}`} initiallyOpen={false} />}<p className="skill-line">{job.skills.map(skill => <span key={skill}>{skill}</span>)}</p></div></article>)}</div></section>
      <section className="education section" id="education" aria-labelledby="education-title"><div className="section-kicker"><span>04 / Always learning</span><span>Business + Digital</span></div><div className="education-layout"><h2 id="education-title">Good work.<br /><em>Solid foundations.</em></h2><div className="education-list"><article className="reveal"><div className="education-meta"><span>upGrad</span><span>May — Dec 2025</span></div><h3>Professional Certificate Programme in Digital Marketing and Advertising</h3><p>Practical training in Google Ads, Meta Ads and programmatic buying. Project work covered audience targeting, campaign budgets, performance tracking and A/B testing of ad creatives.</p></article><article className="reveal"><div className="education-meta"><span>St. Aloysius (Deemed to be University)</span><span>2022 — 2025</span></div><h3>Bachelor of Commerce<br /><em>Accounting</em></h3><p>Business statistics, financial management and market research, with a focus on market trends and consumer behaviour.</p></article></div></div></section>
      <section className="contact section light-section" id="contact" aria-labelledby="contact-title"><div className="section-kicker"><span>05 / Have something in mind?</span><span>Let’s make a connection</span></div><div className="contact-heading"><h2 id="contact-title">LET’S GET<br />IN TOUCH<span>↗</span></h2></div><div className="contact-bottom"><div><a className="email-link" href={`mailto:${email}`}>{email}</a><p>For a role, a project, or a good conversation.</p></div><CopyEmail email={email} /></div></section>
    </main>
    <footer><div className="footer-top"><a className="footer-name" href="#top">BILAL<br />MUHAZZIN</a><div><span className="footer-label">Find me</span><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={`mailto:${email}`}>Email ↗</a></div><div><span className="footer-label">Say hello</span><a href="tel:+917019228564">+91 70192 28564</a><p>Mangaluru, Karnataka<br />India</p></div><a className="back-top" href="#top" aria-label="Back to top">↑</a></div><div className="footer-art" aria-hidden="true"><span>✳</span><span>✿</span><span>◕</span><span>●</span><span>ϟ</span><span>◒</span><span>✳</span><span>◎</span></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Bilal Muhazzin</span><span>A little strategy. A lot of curiosity.</span></div></footer>
  </>;
}
