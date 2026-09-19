import { Store, Rocket, Network, Handshake } from 'lucide-react';

const audiences = [
  { title: 'Local businesses', description: 'Improve search visibility and attract enquiries from nearby customers.', Icon: Store },
  { title: 'Startups & small businesses', description: 'Build an online presence through content and targeted campaigns.', Icon: Rocket },
  { title: 'Marketing agencies', description: 'Support client accounts with SEO, paid ads, and social media execution.', Icon: Network },
  { title: 'Service-based brands', description: 'Reach potential customers through Google Ads, Meta Ads, and lead-generation campaigns.', Icon: Handshake },
];

export function AudienceSection() {
  return <section className="audience-section" id="who-i-help" aria-labelledby="audience-title">
    <h2 id="audience-title">Who I can help</h2>
    <div className="audience-stage">
      <img className="audience-backdrop" src="/optical-prism-hero.png" alt="" aria-hidden="true" loading="lazy" width="1536" height="1024" />
      <div className="audience-grid">
        {audiences.map(({ title, description, Icon }) => <article className="audience-card" key={title}>
          <Icon className="audience-icon" size={42} strokeWidth={1.35} aria-hidden="true" />
          <div className="audience-copy"><h3>{title}</h3><p>{description}</p></div>
        </article>)}
      </div>
    </div>
  </section>;
}
