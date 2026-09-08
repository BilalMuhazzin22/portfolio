const linkedin = 'https://www.linkedin.com/in/bilal-muhazzin22/';
function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d={diagonal ? 'M5 19 19 5M5 5h14v14' : 'M4 12h16m-7-7 7 7-7 7'} /></svg>;
}
export default function Home() {
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header className="header">
      <a className="wordmark" href="#main" aria-label="Bilal Muhazzin home">bm<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#focus">Focus</a><a href="#background">Background</a><a className="nav-contact" href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow diagonal /></a></nav>
    </header>
    <main id="main">
      <section className="hero" aria-labelledby="name">
        <img className="hero-image" src="/optical-prism-hero.png" width="1536" height="1024" alt="" fetchPriority="high" />
        <div className="hero-content">
          <p className="location">Mangaluru, India</p>
          <h1 id="name">Bilal<br />Muhazzin<span>.</span></h1>
          <p className="hero-focus">SEO. Data. Growth.</p>
          <p className="hero-description">A focus on search, analysis, and the bigger picture of digital growth.</p>
          <a className="button" href={linkedin} target="_blank" rel="noopener noreferrer">Let’s connect <Arrow diagonal /></a>
        </div>
        <a className="explore" href="#focus">Explore my background <span>↓</span></a>
      </section>
      <section className="focus section" id="focus" aria-labelledby="focus-title">
        <div className="section-heading"><p className="eyebrow">01 / Focus</p><h2 id="focus-title">Curiosity meets<br /><span>clear thinking.</span></h2></div>
        <div className="focus-content"><p className="intro">My interests connect high-level SEO, data analysis, and growth with a holistic view of digital marketing.</p>
          <div className="focus-row"><span>01</span><h3>Search engine optimization</h3><Arrow /></div>
          <div className="focus-row"><span>02</span><h3>Data analysis</h3><Arrow /></div>
          <div className="focus-row"><span>03</span><h3>Digital growth</h3><Arrow /></div>
        </div>
      </section>
      <section className="background section" id="background" aria-labelledby="background-title">
        <div className="section-heading"><p className="eyebrow">02 / Background</p><h2 id="background-title">Learning.<br /><span>Putting it to work.</span></h2></div>
        <div className="history">
          <article className="history-item"><p className="eyebrow">Experience</p><h3>Nexus Select Trust</h3><p className="muted">Mangaluru, Karnataka, India</p></article>
          <article className="history-item"><div className="history-label"><p className="eyebrow">Education & project work</p><span>2025</span></div><h3>upGrad</h3><p>Hands-on digital campaign management projects using Google Ads, Meta Ads, and programmatic buying.</p><p>Practical work across campaign budgets, audience targeting, performance tracking, and A/B testing of ad creatives.</p><div className="tools">Google Ads <span> / </span> Meta Ads <span> / </span> Programmatic buying</div></article>
        </div>
      </section>
      <section className="contact section" aria-labelledby="contact-title"><p className="eyebrow">Keep in touch</p><div className="contact-line"><h2 id="contact-title">Let’s connect<span>.</span></h2><a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="Connect with Bilal Muhazzin on LinkedIn"><Arrow diagonal /></a></div><p>Find my latest professional updates on LinkedIn.</p></section>
    </main>
    <footer><a className="footer-name" href="#main">Bilal Muhazzin</a><span>SEO, data & growth</span><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow diagonal /></a></footer>
  </>;
}
