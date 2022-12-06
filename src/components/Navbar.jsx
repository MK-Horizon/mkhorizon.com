import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './images/WHITEPAPERICONTEXT.SVG'


function BootBar() {
  return (
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="/">
    <img
      src={logo}
      width="300"
      height="50"
    />
    </Navbar.Brand>
    <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/cryptocurrencies">Crypto Currency</Nav.Link>
          </Nav>
  </Navbar>
  );
}

export default BootBar;
