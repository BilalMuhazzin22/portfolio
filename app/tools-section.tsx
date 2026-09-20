import { BarChart3, Bot, ChartNoAxesCombined, FileSearch, Globe, Mail, Megaphone, MessageCircle, Palette, PenTool, Search, Store, Target, UsersRound } from 'lucide-react';

const toolGroups = [
  { title: 'Advertising & Analytics', tools: [
    { name: 'Google Ads', Icon: Target },
    { name: 'Meta Ads Manager', Icon: Megaphone },
    { name: 'Google Analytics', Icon: BarChart3 },
    { name: 'Google Search Console', Icon: FileSearch },
  ] },
  { title: 'SEO & Research', tools: [
    { name: 'SEMrush', Icon: ChartNoAxesCombined },
    { name: 'Ubersuggest', Icon: Search },
    { name: 'Google Business Profile', Icon: Store },
  ] },
  { title: 'Design & Content', tools: [
    { name: 'Canva', Icon: Palette },
    { name: 'Adobe Express', Icon: PenTool },
    { name: 'ChatGPT', Icon: Bot },
    { name: 'WordPress / Blogger', Icon: Globe },
  ] },
  { title: 'Communication & CRM', tools: [
    { name: 'WhatsApp Business', Icon: MessageCircle },
    { name: 'CRM tools', Icon: UsersRound },
    { name: 'Email marketing', Icon: Mail },
  ] },
];

export function ToolsSection() {
  return <section className="tools-section section" id="tools" aria-labelledby="tools-title">
    <div className="tools-heading">
      <h2 id="tools-title">Tools &<br className="tools-title-break" /> Tech Stack<span aria-hidden="true">✳</span></h2>
      <p>From research and creative work to campaigns and customer conversations.</p>
    </div>
    <div className="tools-groups">
      {toolGroups.map(({ title, tools }, index) => <div className="tools-group" key={title}>
        <h3><span aria-hidden="true">0{index + 1}</span>{title}</h3>
        <ul className="tools-grid">
          {tools.map(({ name, Icon }) => <li className="tool-item" key={name}>
            <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
            <span>{name}</span>
          </li>)}
        </ul>
      </div>)}
    </div>
  </section>;
}
