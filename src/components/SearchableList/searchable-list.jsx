import { useState } from 'react';

export default function SearchableList({ items, children }) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }
  return (
    <div className='searchable-list'>
      <input type='search' onChange={handleChange} placeholder='Search' />
      <ul>
        {searchResults.map((item, i) => (
          <li key={i}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
