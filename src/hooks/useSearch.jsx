import { useState } from 'react';

const useSearch = () => {
  const [query, setQuery] = useState('');

  const searchItems = (items) => {
    if (!query) return items;
    return items.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  return { query, setQuery, searchItems };
};

export default useSearch;
