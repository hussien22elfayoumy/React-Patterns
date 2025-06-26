import { createContext, useContext } from 'react';

const AccordionItemCtx = createContext({
  id: '',
});

export function useAccordionItemCtx() {
  const ctx = useContext(AccordionItemCtx);

  if (!ctx) throw new Error('Accordion item context used outside it provider');

  return ctx;
}

export default function AccordionItem({ id, children, className }) {
  return (
    <AccordionItemCtx.Provider value={{ id }}>
      <li className={className}>{children}</li>
    </AccordionItemCtx.Provider>
  );
}
