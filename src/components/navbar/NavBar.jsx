import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (

    <NavBar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href='#home'>E-commerce website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link  to="/" >Home</Link>
            <Link to="/productdetails">Product Details</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavBar>
  )
}
