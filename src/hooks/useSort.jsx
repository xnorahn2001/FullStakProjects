import { useState } from 'react';

const useSort = () => {
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const sortItems = (items) => {
    if (!sortKey) return items;
    return [...items].sort((a, b) => {
      const result = a[sortKey] > b[sortKey] ? 1 : -1;
      return sortOrder === 'asc' ? result : -result;
    });
  };

  const setSorting = (key) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  return { sortItems, sortKey, sortOrder, setSorting };
};

export default useSort;
