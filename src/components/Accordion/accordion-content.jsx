import { useAccordionCtx } from './accordion';
import { useAccordionItemCtx } from './accordion-item';

export default function AccordionContent({ children, className }) {
  const { openItemId } = useAccordionCtx();
  const { id } = useAccordionItemCtx();
  const isOpen = openItemId === id;

  return (
    <div className={`${className} ${isOpen ? 'open' : ''}`}>{children}</div>
  );
}
