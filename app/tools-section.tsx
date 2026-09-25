const toolGroups = [
  {
    id: 'advertising', title: 'Advertising & analytics',
    tools: [
      { id: 'googleads', name: 'Google Ads', logo: 'google-ads.svg' },
      { id: 'meta', name: 'Meta Ads', logo: 'meta.svg' },
      { id: 'googleanalytics', name: 'Google Analytics', logo: 'google-analytics.svg' },
      { id: 'googlesearchconsole', name: 'Search Console', logo: 'search-console.svg' },
    ],
  },
  {
    id: 'research', title: 'SEO & research',
    tools: [
      { id: 'semrush', name: 'SEMrush', logo: 'semrush.svg' },
      { id: 'ubersuggest', name: 'Ubersuggest', logo: 'ubersuggest.svg' },
      { id: 'googlemybusiness', name: 'Business Profile', logo: 'google-business.svg' },
    ],
  },
  {
    id: 'content', title: 'Design & content',
    tools: [
      { id: 'canva', name: 'Canva', logo: 'canva.svg' },
      { id: 'adobeexpress', name: 'Adobe Express', logo: 'adobe-express.png' },
      { id: 'openai', name: 'ChatGPT', logo: 'chatgpt.svg' },
      { id: 'wordpress', name: 'WordPress', logo: 'wordpress.svg' },
      { id: 'blogger', name: 'Blogger', logo: 'blogger.svg' },
    ],
  },
];

export function ToolsSection() {
  return <section className="tools-section section" id="tools" aria-labelledby="tools-title">
    <div className="toolkit-heading">
      <h2 id="tools-title">TOOLS I USE<span aria-hidden="true">✳</span></h2>
      <p>The tools I use for search, content and campaigns.</p>
    </div>
    <div className="toolkit-categories">
      {toolGroups.map(group => <div className="toolkit-category" key={group.id}>
        <h3 id={`tools-${group.id}`}>{group.title}</h3>
        <ul className="toolkit-grid" aria-labelledby={`tools-${group.id}`}>
          {group.tools.map(tool => <li className="toolkit-tile" key={tool.id}>
            <img
              className={tool.id === 'openai' || tool.id === 'wordpress' ? 'toolkit-logo-contrast' : undefined}
              src={`/tool-logos/${tool.logo}`} alt="" width="44" height="44" loading="lazy"
            />
            <span>{tool.name}</span>
          </li>)}
        </ul>
      </div>)}
    </div>
  </section>;
}
