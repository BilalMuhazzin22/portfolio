'use client';
import { useState } from 'react';
import { Pause, Play } from 'lucide-react';

export function ToolMarquee({ tools }: { tools: { id: string; name: string }[] }) {
  const [paused, setPaused] = useState(false);
  return <div className="toolkit-marquee" data-paused={paused}>
    <div className="toolkit-marquee-window">
      <div className="toolkit-marquee-track">
        {[0, 1].map(copy => <ul className="toolkit-marquee-group" key={copy} aria-label={copy === 0 ? 'Marketing toolkit' : undefined} aria-hidden={copy === 1 ? true : undefined}>
          {tools.map(tool => <li key={tool.id}><img src={`/tool-logos/mono/${tool.id}.svg`} alt="" width="24" height="24" /><span>{tool.name}</span></li>)}
        </ul>)}
      </div>
    </div>
    <button className="toolkit-marquee-toggle" type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? 'Resume tool strip' : 'Pause tool strip'} title={paused ? 'Resume tool strip' : 'Pause tool strip'}>
      {paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
    </button>
  </div>;
}
