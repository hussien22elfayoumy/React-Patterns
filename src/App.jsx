import Accordion from './components/Accordion/accordion';
import SearchableList from './components/SearchableList/searchable-list';
import { PLACES } from './assets/data/places';
import Place from './components/place';

export default function App() {
  return (
    <main>
      <h1>Why Work with us</h1>
      <section>
        <Accordion className='accordion'>
          <Accordion.Item id='item1' className='accordion-item'>
            <Accordion.Title className='accordion-item-title'>
              we are in the busniss for 20years
            </Accordion.Title>

            <Accordion.Content className='accordion-item-content'>
              <article>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, eligendi.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                  ut magnam, perferendis adipisci aspernatur quasi.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item id='item2' className='accordion-item'>
            <Accordion.Title className='accordion-item-title'>
              Better for your healt and money
            </Accordion.Title>

            <Accordion.Content className='accordion-item-content'>
              <article>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, eligendi.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                  ut magnam, perferendis adipisci aspernatur quasi.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item id='item3' className='accordion-item'>
            <Accordion.Title className='accordion-item-title'>
              We really love what we are doing
            </Accordion.Title>

            <Accordion.Content className='accordion-item-content'>
              <article>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, eligendi.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                  ut magnam, perferendis adipisci aspernatur quasi.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>

      <section>
        <SearchableList items={PLACES}>
          {(item) => <Place item={item} />}
        </SearchableList>

        <SearchableList items={['item 1', 'item 2', 'item 3', 'item 4']}>
          {(item) => <p>{item}</p>}
        </SearchableList>
      </section>
    </main>
  );
}
