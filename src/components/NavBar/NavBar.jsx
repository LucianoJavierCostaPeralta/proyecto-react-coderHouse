import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import CardWidget from "./CartWidget/CardWidget";

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" className="navbar-dark  w-100">
      <Navbar.Brand href="#">JMComputacion</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="m-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#action1">Gabinetes</Nav.Link>
          <Nav.Link href="#action2">Procesadores</Nav.Link>
          <NavDropdown title="Perifericos" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Mouse - Teclado</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Parlante - Auricular</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Microfono - Camara 
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#action" >
            Monitores
          </Nav.Link>
          <Nav.Link href="#action" >
            Sillas
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <CardWidget/>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
