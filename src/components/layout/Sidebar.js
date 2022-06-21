// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

//TODO: cambiar Nav por Navbar vertical (find out how)
//TODO: si se hace el cambio eliminar clase flex-column

export default function Sidebar() {
  return (
    <Navbar bg="dark" variant="dark" expand="xs">
      <Container>
        <Nav className="flex-column">
          <Nav.Link href="">Home</Nav.Link>
          <Nav.Link href="">Database</Nav.Link>
          <Nav.Link href="">Contribution</Nav.Link>
          <Nav.Link href="">About</Nav.Link>
          {/* <Nav.Link href="">Donate</Nav.Link> */}
          <Nav.Link href="">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

// <Nav className="flex-column" defaultActiveKey="/">
//   <Nav.Link>Home</Nav.Link>
//   <Nav.Link>Database</Nav.Link>
//   <Nav.Link>Contributions</Nav.Link>
//   <Nav.Link>About Cronoplast</Nav.Link>
//   <Nav.Link>Contact</Nav.Link>
// </Nav>
