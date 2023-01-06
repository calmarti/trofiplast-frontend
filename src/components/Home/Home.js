import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "../layout/Sidebar";
import HomeMain from "./HomeMain";


export default function Home() {
  return (
    <Container fluid className="">
      <Row className="">
        <Col lg={2} className="px-0" >
          <Sidebar />
        </Col>
        <Col lg={10}className="px-0">
         <HomeMain />
        </Col>
      </Row>
    </Container>
  );
}
