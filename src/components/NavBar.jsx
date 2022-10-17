
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react'
import "../index.css"
function NavScrollExample(props) {

  return (

    <Navbar className="navbar">
      <Container fluid>
        <span class="material-symbols-outlined">
          hive
        </span>
        <Navbar.Brand href="/">Sabah</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/perfumes">shop</Nav.Link>
            <Nav.Link href="#action2"></Nav.Link>


          </Nav>

          <Nav.Link href="/basket"><span style={{ padding: "10px 50px" }} class="material-symbols-outlined">shopping_cart</span></Nav.Link>
          <NavDropdown style={{ padding: "10px 50px" }} title="Hi User" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/login"><span class="material-symbols-outlined">
              person
            </span>sign in</NavDropdown.Item>
            <NavDropdown.Item href="/register">sign up</NavDropdown.Item>
            <NavDropdown.Item href="/logout">logout</NavDropdown.Item>

            <NavDropdown.Divider />

          </NavDropdown>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );

}

export default NavScrollExample;