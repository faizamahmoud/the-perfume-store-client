
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./index.css"

// props: authenticated: false, login: returns user data, currUser:""(username)
function NavBar({authenticated, login, currUser}) {

  
  return (
    
    <Navbar className="navbar">
      <Container fluid>
        <span className="material-symbols-outlined">
          hive
        </span>
        <Navbar.Brand href="/">Sabah</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
       
          <section className="search">
            <div className="bg-image h-100" style={{ backgroundColor: '#aaf0d1' }}>
              <div className="mask d-flex align-items-center h-100">
              </div>
            </div>

          </section>
          <Nav.Link href="/perfumes"><span style={{ padding: "10px 50px" }} className="shop-now me-auto my-2 my-lg-0">Shop</span></Nav.Link>
          <Nav.Link href="/basket"><span style={{ padding: "10px 50px" }} className="material-symbols-outlined">favorite</span></Nav.Link>
          <Nav.Link href="/basket"><span style={{ padding: "10px 50px" }} className="material-symbols-outlined">shopping_cart</span></Nav.Link>
          
          <NavDropdown style={{ padding: "10px 50px" }} title='title' id="navbarScrollingDropdown">
            <NavDropdown.Item href="/login"><span className="material-symbols-outlined">
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

export default NavBar;