import "./NavBar.css";
import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

// UpperCamelCase
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/">
          <img src="../logo_navBar.png" alt="logo" />
          </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="linkItem" to="/">
              Inicio
            </Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link className="linkItem" to="/products/leggins">Leggins</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><Link className="linkItem" to="/products/tops">Tops</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <CartWidget className="cartWidget" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
