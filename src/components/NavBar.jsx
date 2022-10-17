
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample(props) {

// conditional rendering for links 
// not Login and Register = > Login, Sign up
// Login
  // hi user => hi username
  // Logout



  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Sabah</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/perfumes">Perfumes</Nav.Link>
            <Nav.Link href="#action2"></Nav.Link>
            <NavDropdown title="Hi User" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/login">sign in</NavDropdown.Item>
              <NavDropdown.Item href="/register">sign up</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                wishlist
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                profile settings
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Account settings
            </Nav.Link> */}
          </Nav>
          {/* <Nav.Link href={`${perfume._id}`}>Profile</Nav.Link> */}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link href="/logout">Logout</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;