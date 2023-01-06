import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

import Container from "react-bootstrap/esm/Container";
import Sidebar from "../layout/Sidebar";

export default function Contact() {
  return (
    <>
      <main>
        <Container fluid>
          <Row>
            <Col md={2} className="px-0">
              <Sidebar />
            </Col>
            <Col className="px-0">
              <Alert className="contact-alert py-5 my-0" variant="primary">
                <br />
                <br />
                <Alert.Heading className="alert-heading-contact">
                  Want to contact us?
                </Alert.Heading>
                <hr />

                <p className="alert-summary-contact">
                Drop us your thoughts to improve Trofiplast at <strong>trofiplast@gmail.com</strong>
                </p>
              </Alert>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
