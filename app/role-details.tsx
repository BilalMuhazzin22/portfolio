'use client';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
export function RoleDetails({ points, role, initiallyOpen = false }: { points: string[]; role: string; initiallyOpen?: boolean }) {
  return <Accordion className="role-details" defaultValue={initiallyOpen ? ['details'] : []}>
    <AccordionItem value="details">
      <AccordionTrigger aria-label={`Responsibilities for ${role}`} className="role-details-trigger">Responsibilities</AccordionTrigger>
      <AccordionContent keepMounted><ul className="responsibilities">{points.map(point => <li key={point}>{point}</li>)}</ul></AccordionContent>
    </AccordionItem>
  </Accordion>;
}
