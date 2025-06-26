import { createContext, useContext, useState } from 'react';

const AccordionCtx = createContext({
  openItem: () => {},
  closeItem: () => {},
  openItemId: null,
});

export default function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState(null);

  function openItem(id) {
    setOpenItemId(id);
  }

  function closeItem() {
    setOpenItemId(null);
  }

  const ctxValue = {
    openItemId,
    openItem,
    closeItem,
  };

  return (
    <AccordionCtx.Provider value={ctxValue}>
      <ul className={className}>{children}</ul>
    </AccordionCtx.Provider>
  );
}

export function useAccordionCtx() {
  const ctx = useContext(AccordionCtx);

  if (!ctx) throw new Error('Accordion context used outside its provider');

  return ctx;
}
