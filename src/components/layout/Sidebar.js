import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

//la clase utilty 'h-100' de Navbar expande el Sidebar hasta el 100 de la altura del padre
//OJO: Navbar no tiene ni bg ni variant ni nada relacionado con el color (variant no parece recibir, bg sí)


export default function Sidebar() {
  return (
    <Container fluid className="viewport-size">
    <Navbar variant="primary" className="h-100 py-0" expand="xs" >
     {/*  <Container> */}
        <Nav className="flex-column">
          <Nav.Link href="/" className="nav-item">Home</Nav.Link>
          <Nav.Link href="/search" className="nav-item">Search the database</Nav.Link>
          {/* <Nav.Link href="/contribute" className="nav-item">Contribute</Nav.Link> */}
          <Nav.Link href="" className="nav-item">Contribute</Nav.Link>
          <Nav.Link href="/about" className="nav-item">About</Nav.Link>
          <Nav.Link href="/contact" className="nav-item">Contact</Nav.Link>
          {/* <Nav.Link href="">Donate</Nav.Link> */}
        </Nav>
    </Navbar>
      </Container>
  );
}

