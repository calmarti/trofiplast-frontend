import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Navbar />
        </Col >
        <Col>
          <main>Welcome to Cronoplast!</main>
        </Col>
      </Row>
    </Container>
  );
}
