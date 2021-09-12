import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import CardWidget from "../CartWidget/CardWidget";

const NavBar = () => {
  return (


    <Navbar bg="dark" expand="lg" className="navbar-dark ">
    <Container>
      <Navbar.Brand href="#home">JMComputacion</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link href="#">Gabinetes</Nav.Link>
          <Nav.Link href="#">PLacas</Nav.Link>
          <Nav.Link href="#">Procesadores</Nav.Link>
          <Nav.Link href="#">Perifericos</Nav.Link>
          <Nav.Link href="#">Monitores</Nav.Link>
          
        </Nav>
        <CardWidget/>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavBar;
