export function ToolMarquee({ tools }: { tools: { id: string; name: string; logo: string }[] }) {
  return <div className="toolkit-marquee">
    <div className="toolkit-marquee-window">
      <div className="toolkit-marquee-track">
        {[0, 1].map(copy => <ul className="toolkit-marquee-group" key={copy} aria-label={copy === 0 ? 'Marketing toolkit' : undefined} aria-hidden={copy === 1 ? true : undefined}>
          {tools.map(tool => <li key={tool.id} data-tool={tool.id}><img className={tool.id === 'openai' || tool.id === 'wordpress' ? 'toolkit-logo-contrast' : undefined} src={`/tool-logos/${tool.logo}`} alt="" width="48" height="48" /><span>{tool.name}</span></li>)}
        </ul>)}
      </div>
    </div>
  </div>;
}
