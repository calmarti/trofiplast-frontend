import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "../layout/Sidebar";
import HomeMain from "./HomeMain";

//TODO: col-size no al max-heigth de 100vh NO está funcionando, investigar teoría y mirar Estrimix

export default function Home() {
  return (
    <Container fluid /* className="row-size" */>
      <Row>
        <Col xs={1} className="px-0" >
          <Sidebar />
        </Col>
        <Col className="col-size px-0">
          <HomeMain />
        </Col>
      </Row>
    </Container>
  );
}
