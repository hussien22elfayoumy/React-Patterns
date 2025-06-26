import { createContext, useContext, useState } from 'react';
import AccordionItem from './accordion-item';
import AccordionTitle from './accordion-title';
import AccordionContent from './accordion-content';

const AccordionCtx = createContext({
  toggleOpen: () => {},
  openItemId: null,
});

export function useAccordionCtx() {
  const ctx = useContext(AccordionCtx);

  if (!ctx) throw new Error('Accordion context used outside its provider');

  return ctx;
}

export default function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState(null);

  function toggleOpen(id) {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  const ctxValue = {
    openItemId,
    toggleOpen,
  };

  return (
    <AccordionCtx.Provider value={ctxValue}>
      <ul className={className}>{children}</ul>
    </AccordionCtx.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
