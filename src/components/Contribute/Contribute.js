import Sidebar from "../layout/Sidebar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

export default function Contribute() {
  return (
    <>
      <main className="main">
        <Container fluid>
          <Row>
            <Col md="auto" className="px-0">
              <Sidebar />
            </Col>

            <Col className="px-0">
              <Alert className="py-5 my-0" variant="primary">
                <br />
                <br />
                <Alert.Heading className="alert-heading">
                 Contribute to the database
                </Alert.Heading>
                <hr />

                <p className="alert-summary">
                  Cronoplast contains 300 registers of plastic ingestion by
                  animals that spans 120 years in time across several
                  geographical areas worldwide. Sources are mainly from
                  scientific literature but also include other type of
                  references.
                </p>
                <hr />
                <br />
                <br />
                <Form>

               {/*      formulario de contribucion */}
                
                </Form>
              </Alert>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
