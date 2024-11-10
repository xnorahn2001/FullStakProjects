import React from "react";
import { Pagination } from "react-bootstrap";


const PaginationComponent = ({ currentPage, onPageChange }) => {
  const totalPages = 10; 

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <Pagination>
      <Pagination.Prev onClick={handlePrevious} disabled={currentPage === 1} />
      <Pagination.Item active>{currentPage}</Pagination.Item>
      <Pagination.Next onClick={handleNext} disabled={currentPage === totalPages} />
    </Pagination>
  );
};


export default PaginationComponent;