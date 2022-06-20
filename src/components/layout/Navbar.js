import Nav from "react-bootstrap/Nav";

export default function Navbar() {
  return (
    <Nav className="flex-column" defaultActiveKey="/">
      <Nav.Link>Home</Nav.Link>
      <Nav.Link>Database</Nav.Link>
      <Nav.Link>Contributions</Nav.Link>
      <Nav.Link>About Cronoplast</Nav.Link>
      <Nav.Link>Contact</Nav.Link>
    </Nav>
  );
}
