import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

//la clase utilty 'h-100' de Navbar expande el Sidebar hasta el 100 de la altura del padre

export default function Sidebar() {
  return (
    <Navbar bg="info" variant="" className="navbar h-100" expand="xs" >
     {/*  <Container> */}
        <Nav  className="flex-column">
          <Nav.Link href="" className="nav-item">Home</Nav.Link>
          <Nav.Link href="" className="nav-item">Search the database</Nav.Link>
          <Nav.Link href="" className="nav-item">Contribute</Nav.Link>
          <Nav.Link href="" className="nav-item">About</Nav.Link>
          {/* <Nav.Link href="">Donate</Nav.Link> */}
          <Nav.Link href="" className="nav-item">Contact</Nav.Link>
        </Nav>
    {/*   </Container> */}
    </Navbar>
  );
}

