import { useAccordionCtx } from './accordion';
import { useAccordionItemCtx } from './accordion-item';

export default function AccordionTitle({ children, className }) {
  const { toggleOpen } = useAccordionCtx();
  const { id } = useAccordionItemCtx();

  return (
    <h3 className={className} onClick={() => toggleOpen(id)}>
      {children}
    </h3>
  );
}
