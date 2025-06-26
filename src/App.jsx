import Accordion from './components/Accordion/accordion';
import AccordionItem from './components/Accordion/accordion-item';

export default function App() {
  return (
    <main>
      <h1>Why Work with us</h1>
      <section>
        <Accordion className='accordion'>
          <AccordionItem
            id='item1'
            className='accordion-item'
            title='we are in the busniss for 20years'
          >
            <article>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                eligendi.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                ut magnam, perferendis adipisci aspernatur quasi.
              </p>
            </article>
          </AccordionItem>
          <AccordionItem
            id='item2'
            className='accordion-item'
            title='we are working with local guides'
          >
            <article>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                eligendi.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                ut magnam, perferendis adipisci aspernatur quasi.
              </p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
