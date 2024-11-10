import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const ErrorPage = () => {
  return (
    <Container className="text-center my-5">
      <h1 className="display-4">404</h1>
      <p className="lead">Opps~ We're Sorry !!</p>
      <p>It seems something went wrong. Our team is working hard to resolve this issue and get you back on track as soon as possible. 
        Please refresh the page or try again later.</p>
        <p>If the problem persists, feel free to reach out to our customer support team, and we'll be happy to assist you.</p>
        <p>Thank you for your patience and understanding!</p>
      <Button variant="primary" as={Link} to="/">
        Go to Home
      </Button>
    </Container>
  );
};

export default ErrorPage;