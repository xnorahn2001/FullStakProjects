import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

import { ProductContext } from "../../context/ProductContext";

const Product = ({ product }) => {
  const { products, setProducts } = useContext(ProductContext);
  console.log("the products is here ", product);

  return (
    <Card className="mb-3" key={product.productId}>
      <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        <Card.Text>
          <img
            src={product.imageUrl}
            alt={product.productName}
            style={{ width: "50%", maxWidth: "200px" }}
          />
          <br></br>
          <strong>Price:</strong> SR{product.productPrice}
        </Card.Text>
        <Link
          to={`/products/${product.productId}`}
          state={{
            productId: product.productId,
            productName: product.productName,
            productPrice: product.productPrice,
            description: product.description,
            imageUrl: product.imageUrl,
          }}
        ></Link>
        <Button variant="primary">Show Details</Button>
        <button onClick={() => addToCart(product)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="30"
            fill="currentColor"
            class="bi bi-cart-plus-fill"
            viewBox="0 0 16 16"
          >
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0" />
          </svg>
        </button>
      </Card.Body>
    </Card>
  );
};

export default Product;