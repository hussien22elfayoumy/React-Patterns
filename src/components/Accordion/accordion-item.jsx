import { useAccordionCtx } from './accordion';

export default function AccordionItem({ id, title, children, className }) {
  const { openItem, openItemId, closeItem } = useAccordionCtx();

  const isOpen = openItemId === id;

  return (
    <li className={className}>
      <h3
        className='accordion-item-title'
        onClick={() => (isOpen ? closeItem() : openItem(id))}
      >
        {title}
      </h3>
      <div className={`accordion-item-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </li>
  );
}
