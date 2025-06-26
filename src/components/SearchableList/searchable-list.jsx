import { useRef, useState } from 'react';

export default function SearchableList({ items, children, itemKeyFn }) {
  const [searchTerm, setSearchTerm] = useState('');
  const lastChange = useRef();

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(e) {
    // If a previous debounce timer is running, clear it
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    // Start a new debounce timer
    lastChange.current = setTimeout(() => {
      // Once 500ms have passed without further input, clear the timer reference
      lastChange.current = null;

      // Finally, update the search term state with the latest input
      setSearchTerm(e.target.value);
    }, 500);
  }

  return (
    <div className='searchable-list'>
      <input type='search' onChange={handleChange} placeholder='Search' />
      <ul>
        {searchResults.map((item) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
