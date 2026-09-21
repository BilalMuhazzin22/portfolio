import { ToolMarquee } from './tool-marquee';

const tools = [
  { id: 'googleads', name: 'Google Ads', logo: 'google-ads.svg' },
  { id: 'meta', name: 'Meta Ads', logo: 'meta.svg' },
  { id: 'googleanalytics', name: 'Google Analytics', logo: 'google-analytics.svg' },
  { id: 'googlesearchconsole', name: 'Search Console', logo: 'search-console.svg' },
  { id: 'semrush', name: 'SEMrush', logo: 'semrush.svg' },
  { id: 'ubersuggest', name: 'Ubersuggest', logo: 'ubersuggest.svg' },
  { id: 'googlemybusiness', name: 'Business Profile', logo: 'google-business.svg' },
  { id: 'canva', name: 'Canva', logo: 'canva.svg' },
  { id: 'adobeexpress', name: 'Adobe Express', logo: 'adobe-express.png' },
  { id: 'openai', name: 'ChatGPT', logo: 'chatgpt.svg' },
  { id: 'wordpress', name: 'WordPress', logo: 'wordpress.svg' },
  { id: 'blogger', name: 'Blogger', logo: 'blogger.svg' },
];

export function ToolsSection() {
  return <section className="tools-section section" id="tools" aria-labelledby="tools-title">
    <div className="toolkit-heading">
      <h2 id="tools-title">My toolkit</h2>
      <p>The tools I use for search, content and campaigns.</p>
    </div>
    <ToolMarquee tools={tools} />
  </section>;
}
