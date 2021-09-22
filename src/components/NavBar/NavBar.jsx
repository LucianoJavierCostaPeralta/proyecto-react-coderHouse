import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import CardWidget from "../CartWidget/CardWidget";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (

    <Navbar bg="dark" expand="lg" className="navbar-dark  fixed-top">
    <Container>
        
      <Navbar.Brand href="/">JMComputacion</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link href="/category/gabinete">Gabinetes</Nav.Link>
          <Nav.Link href="/category/placa">Placas</Nav.Link>
          <Nav.Link href="/category/procesadores">Procesadores</Nav.Link>
          <NavDropdown title="Perifericos" id="basic-nav-dropdown">
          <NavDropdown.Item href="/category/teclado">Teclado</NavDropdown.Item>
          <NavDropdown.Item href="/category/mouse">Mouse</NavDropdown.Item>
          <NavDropdown.Item href="/category/auricular">Auriculares</NavDropdown.Item>
        </NavDropdown>
          <Nav.Link href="/category/monitor">Monitores</Nav.Link>
          
        </Nav>
        <CardWidget/>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavBar;
