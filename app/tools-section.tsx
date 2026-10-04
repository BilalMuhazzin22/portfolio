import type { CSSProperties } from 'react';

const toolGroups = [
  {
    id: 'advertising', title: 'Ads, leads & analytics',
    tools: [
      { id: 'googleads', name: 'Google Ads', use: 'Search campaigns & budgets', logo: 'google-ads.svg' },
      { id: 'meta', name: 'Meta Ads', use: 'Facebook & Instagram lead ads', logo: 'meta.svg' },
      { id: 'whatsappbusiness', name: 'WhatsApp Business', use: 'Lead follow-up & CRM', logo: 'whatsapp-business.png' },
      { id: 'googleanalytics', name: 'Google Analytics', use: 'Campaign performance tracking', logo: 'google-analytics.svg' },
    ],
  },
  {
    id: 'research', title: 'SEO & local search',
    tools: [
      { id: 'googlesearchconsole', name: 'Search Console', use: 'Indexing & search performance', logo: 'search-console.svg' },
      { id: 'semrush', name: 'Semrush', use: 'Keyword & competitor research', logo: 'semrush.svg' },
      { id: 'ubersuggest', name: 'Ubersuggest', use: 'Keyword ideas', logo: 'ubersuggest.svg' },
      { id: 'googlemybusiness', name: 'Google Business Profile', use: 'Local SEO & listings', logo: 'google-business.svg' },
    ],
  },
  {
    id: 'content', title: 'Design & content',
    tools: [
      { id: 'canva', name: 'Canva', use: 'Post templates & flyers', logo: 'canva.svg' },
      { id: 'adobeexpress', name: 'Adobe Express', use: 'Ad creatives', logo: 'adobe-express.png' },
      { id: 'openai', name: 'ChatGPT', use: 'Blog outlines & alt text', logo: 'chatgpt.svg' },
      { id: 'wordpress', name: 'WordPress', use: 'Website content & on-page SEO', logo: 'wordpress.svg' },
      { id: 'blogger', name: 'Blogger', use: 'SEO article publishing', logo: 'blogger.svg' },
    ],
  },
];

export function ToolsSection() {
  return <section className="tools-section section" id="tools" aria-labelledby="tools-title">
    <div className="toolkit-heading">
      <h2 id="tools-title">TOOLS I USE<span aria-hidden="true">✳</span></h2>
      <p>From keyword research to campaign reporting: the everyday stack behind my client work.</p>
    </div>
    <div className="toolkit-categories">
      {toolGroups.map((group, groupIndex) => <div className="toolkit-category" key={group.id}>
        <h3 id={`tools-${group.id}`}>{group.title}</h3>
        <ul className="toolkit-grid" aria-labelledby={`tools-${group.id}`}>
          {group.tools.map((tool, index) => <li className="toolkit-tile" key={tool.id} style={{ '--i': groupIndex * 4 + index } as CSSProperties}>
            <img
              className={tool.id === 'openai' || tool.id === 'wordpress' ? 'toolkit-logo-contrast' : undefined}
              src={`/tool-logos/${tool.logo}`} alt="" width="44" height="44" loading="lazy"
            />
            <span><b>{tool.name}</b>{tool.use}</span>
          </li>)}
        </ul>
      </div>)}
    </div>
  </section>;
}
