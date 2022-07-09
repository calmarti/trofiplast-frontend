import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "../layout/Sidebar";
import HomeMain from "./HomeMain";

//TODO: get react-router-v6 straight para que el árbol de rutas sea más legible!

export default function Home() {
  return (
    <Container fluid className="viewport-size">
      <Row className="viewport-size">
        <Col md="auto" className="px-0 viewport-size" >
          <Sidebar />
        </Col>
        <Col className="px-0">
          <HomeMain />
        </Col>
      </Row>
    </Container>
  );
}
