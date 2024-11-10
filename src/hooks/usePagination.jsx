import { useState } from 'react';

const usePagination = (itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const paginate = (items) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  };

  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const setPage = (page) => setCurrentPage(page);

  return { paginate, currentPage, nextPage, prevPage, setPage };
};

export default usePagination;
