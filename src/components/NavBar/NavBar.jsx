import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import CardWidget from "../CartWidget/CardWidget";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import '../../style/App.css'



const NavBar = () => {

  const {iconCart, cartList} =useCartContext()

  return (

    <Navbar bg="dark" expand="lg" className="navbar-dark  fixed-top">
    <Container>
        
      <Navbar.Brand >
        <Link className="link" to={`/`}>JMComputacion</Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
              <Nav.Link>

            <Link className="link" to={`/category/gabinete`}>
              Gabinete
            </Link>
              </Nav.Link>
          
            <Nav.Link>
              <Link className="link" to={`/category/placa`}>
                    Placa
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to={`/category/procesadores`}>Procesadores</Link>
            </Nav.Link>
          
          <NavDropdown title="Perifericos" id="basic-nav-dropdown">

                <NavDropdown.Item >
                  <Link className="link" to={`/category/teclado`}>Teclado</Link>
                </NavDropdown.Item>
              
              <NavDropdown.Item >
                  <Link className="link" to={`/category/mouse`}>Mouse</Link>
              </NavDropdown.Item>

                <NavDropdown.Item >
                  <Link className="link" to={`/category/auricular`}>Auricular</Link>
                </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link >
              <Link className="link" to="/category/monitor">Monitores</Link>
          </Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
      <Link  className="link" exact to={'/cart' }>
        <div className="text-center ">
        
        {cartList.length === 0 ?
            <></>
          :
          <div>
            <CardWidget />
            <span className="bg-info text-white  iconCart p-1">
            {iconCart()}
            </span>
          </div>
        }

        </div>

      </Link>
  </Navbar>
  );
};

export default NavBar;
