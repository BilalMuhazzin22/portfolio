import { ToolMarquee } from './tool-marquee';

const tools = {
  googleads: 'Google Ads', meta: 'Meta Ads', googleanalytics: 'Google Analytics',
  googlesearchconsole: 'Search Console', semrush: 'SEMrush', ubersuggest: 'Ubersuggest',
  googlemybusiness: 'Business Profile', canva: 'Canva', adobeexpress: 'Adobe Express',
  openai: 'ChatGPT', wordpress: 'WordPress', blogger: 'Blogger',
};
type ToolId = keyof typeof tools;
const workflow: { title: string; description: string; tools: ToolId[] }[] = [
  { title: 'Research', description: 'Keywords, competitors & content gaps — mapped before a single rupee is spent.', tools: ['semrush', 'ubersuggest'] },
  { title: 'Create', description: 'SEO-ready websites, content & ad creatives built to convert.', tools: ['wordpress', 'blogger', 'canva', 'adobeexpress', 'openai'] },
  { title: 'Launch', description: 'Campaigns live across search, social & local — targeted, tracked, controlled.', tools: ['googleads', 'meta', 'googlemybusiness'] },
  { title: 'Measure & Optimize', description: "Rankings, traffic & conversions tracked end-to-end. Scale what works, kill what doesn't.", tools: ['googleanalytics', 'googlesearchconsole'] },
];

export function ToolsSection() {
  return <section className="tools-section section" id="tools" aria-labelledby="tools-title">
    <header className="toolkit-heading">
      <p className="toolkit-eyebrow">MY TOOLKIT</p>
      <h2 id="tools-title">Tools, mapped to<br /><span>how I work.</span></h2>
      <p className="toolkit-intro">Every tool below earns its place in a stage of my process — from research to revenue.</p>
    </header>
    <ToolMarquee tools={Object.entries(tools).map(([id, name]) => ({ id, name }))} />
    <div className="workflow-grid">
      {workflow.map((stage, index) => <article className="workflow-card" key={stage.title}>
        <span className="workflow-number" aria-hidden="true">0{index + 1}</span>
        <h3>{stage.title}</h3>
        <p>{stage.description}</p>
        <ul className="workflow-tools" aria-label={`${stage.title} tools`}>
          {stage.tools.map(id => <li key={id}><img src={`/tool-logos/mono/${id}.svg`} width="18" height="18" alt="" loading="lazy" /><span>{tools[id]}</span></li>)}
        </ul>
      </article>)}
    </div>
    <div className="toolkit-result">
      <strong>₹27.91</strong>
      <p>Cost per WhatsApp lead — recent result from an individual OnePlanet360 campaign.</p>
    </div>
  </section>;
}
