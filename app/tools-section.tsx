import { Mail, UsersRound } from 'lucide-react';

const toolGroups = [
  { title: 'Advertising & Analytics', detail: 'Launch. Measure. Improve.', tools: [
    { name: 'Google Ads', logos: ['google-ads.svg'] },
    { name: 'Meta Ads Manager', logos: ['meta.svg'] },
    { name: 'Google Analytics', logos: ['google-analytics.svg'] },
    { name: 'Google Search Console', logos: ['search-console.svg'] },
  ] },
  { title: 'SEO & Research', detail: 'Find the next opportunity.', tools: [
    { name: 'SEMrush', logos: ['semrush.svg'] },
    { name: 'Ubersuggest', logos: ['ubersuggest.svg'] },
    { name: 'Google Business Profile', logos: ['google-business.svg'] },
  ] },
  { title: 'Design & Content', detail: 'Turn ideas into content.', tools: [
    { name: 'Canva', logos: ['canva.svg'] },
    { name: 'Adobe Express', logos: ['adobe-express.png'] },
    { name: 'ChatGPT', logos: ['chatgpt.svg'] },
    { name: 'WordPress / Blogger', logos: ['wordpress.svg', 'blogger.svg'] },
  ] },
  { title: 'Communication & CRM', detail: 'Keep the conversation going.', tools: [
    { name: 'WhatsApp Business', logos: ['whatsapp-business.png'] },
    { name: 'CRM tools', Icon: UsersRound },
    { name: 'Email marketing', Icon: Mail },
  ] },
];

export function ToolsSection() {
  return <section className="tools-section section" id="tools" aria-labelledby="tools-title">
    <div className="tools-heading">
      <div><p className="tools-eyebrow">MY WORKING TOOLKIT</p><h2 id="tools-title">Tools &<br /><em>Tech Stack.</em></h2></div>
      <p className="tools-intro">The platforms behind{' '}<br />the strategy, creative{' '}<br />and campaign work.</p>
    </div>
    <div className="tools-groups">
      {toolGroups.map(({ title, detail, tools }, index) => <div className="tools-group" key={title}>
        <div className="tools-category"><span className="tools-number" aria-hidden="true">0{index + 1}</span><div><h3>{title}</h3><p>{detail}</p></div></div>
        <ul className={`tools-grid tools-grid-${tools.length}`}>
          {tools.map(tool => <li className="tool-item" key={tool.name}>
            <span className={`tool-logo${'logos' in tool && (tool.logos?.length ?? 0) > 1 ? ' tool-logo-pair' : ''}${'Icon' in tool ? ' tool-logo-generic' : ''}`}>
              {tool.logos ? tool.logos.map(logo => <img key={logo} src={`/tool-logos/${logo}`} alt="" width="52" height="52" loading="lazy" decoding="async" />) : <tool.Icon size={34} strokeWidth={1.5} aria-hidden="true" />}
            </span>
            <span className="tool-name">{tool.name}</span>
          </li>)}
        </ul>
      </div>)}
    </div>
  </section>;
}

