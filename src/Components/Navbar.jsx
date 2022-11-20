import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function BasicExample() {
    return (
      <Navbar bg="light fw-bold fs-5 expand-lg py-3 shadow-sm">
        <Container>
          <Navbar.Brand href="#home">Carrito de Compras</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <Nav.Link href="#link">Product</Nav.Link>
            </Nav>
            <div className='buttons'>
                <a href="login"className='btn btn-outline-success'>
                  <i className="fa fa-sign-in me-2"></i>Login</a>
                  <a href="login"className='btn btn-outline-success ms-2'>
                  <i className="fa fa-user-plus me-2"></i>Register</a>
                  <a href="login"className='btn btn-outline-success ms-2'>
                  <i className="fa fa-shopping-cart me-2"></i>Cart (0)</a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  export default BasicExample;