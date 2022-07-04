import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "../layout/Sidebar";
import HomeMain from "./HomeMain";

//TODO: get react-router-v6 straight para que el árbol de rutas sea más legible!

export default function Home() {
  return (
    <Container fluid /* className="row-size" */>
      <Row>
        <Col md={1} className="px-0" >
          <Sidebar />
        </Col>
        <Col className="px-0">
          <HomeMain />
        </Col>
      </Row>
    </Container>
  );
}
