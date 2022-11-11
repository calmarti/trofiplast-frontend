import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/esm/Container";
import Sidebar from "../layout/Sidebar";

export default function About() {
  return (
    <>
      <main>
        <Container fluid>
          <Row>
            <Col md="auto" className="px-0">
              <Sidebar />
            </Col>
            <Col className="px-0">
              <Alert className="about-alert py-5 my-0" variant="primary">
                <br />
                <br />
                <Alert.Heading className="alert-heading-about">
                 About us
                </Alert.Heading>
                <hr />

                <p className="alert-summary-about">
                 We are ...
                </p>
              </Alert>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
    