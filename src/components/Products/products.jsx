import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { ProductContext } from "../../context/ProductContext";
import Product from "./Product";
import Search from "../searchComponent/Search";
import PaginationComponent from "../pagination/PaginationComponent";
import Sort from "../sorting/Sort";


const Products = () => {
  const { products, isLoading, error, fetchProducts } =
    useContext(ProductContext);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const limit = 10;

  const handleSearch = (value) => {
    setSearchValue(value);
    setCurrentPage(1);
    fetchProducts(value, 1, limit, sortBy, sortOrder);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    fetchProducts(searchValue, newPage, limit, sortBy, sortOrder);
  };

  const handleSortChange = (field, order) => {
    setSortBy(field);
    setSortOrder(order);
    fetchProducts(searchValue, currentPage, limit, field, order);
  };

  return (
    <Container>
      <h1 className="text-center my-4">Our Products</h1>
      <Search onSearch={handleSearch} />
      <Sort onSortChange={handleSortChange} />
      {isLoading && <p className="text-center my-4">Loading products...</p>}
      {error && (
        <p className="text-danger text-center">
          Error loading products: {error.message}
        </p>
      )}
      {products && products.length > 0 ? (
        <Row className="g-4 my-4">
          {products.map((product) => (
            <Col key={product.productId} xs={12} md={6} lg={4}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      ) : (
        !isLoading && <p className="text-center">No products available</p>
      )}
      <PaginationComponent
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

export default Products;