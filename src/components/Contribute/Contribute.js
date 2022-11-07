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
                  Trofiplast contains 300 registers of plastic ingestion by
                  animals that spans 120 years in time across several
                  geographical areas worldwide. Sources are mainly from
                  scientific literature but also include other type of
                  references.
                </p>
                <hr />
                <br />
                <br />
                <Form>
                  <Container className="w-50">
                    <Row>
                      
                        
                        {/*      formulario de contribucion */}
                        {/* Distribuir las Col en más de un Row!  */}

                      <Col>
                          
                        <Form.Group className="w-50 mb-3" controlId="formBasicEmail">
                          <Form.Label>Species name</Form.Label>
                          <Form.Control
                           type="text"
                          />
                        </Form.Group>
                      </Col>

                      <Col>
                          
                        <Form.Group className="w-50 mb-3" controlId="formBasicEmail">
                          <Form.Label>Area / Country / Place</Form.Label>
                          <Form.Control
                           type="text"
                          />
                        </Form.Group>
                      </Col>

                      

                      
                      <Col>                          
                          <Form.Group className="w-50 mb-3" controlId="formBasicEmail">
                            <Form.Label>Date of finding</Form.Label>
                            <Form.Control
                             type="text"
                            />
                          </Form.Group>
                        </Col>
                  
                        {/* Summary of findings debe ser un textarea control */}
                        {/* <Col>
                          <Form.Group className="w-100 mb-3" controlId="formBasicEmail">
                            <Form.Label>Summary of findings</Form.Label>
                            <Form.Control
                             type="textarea"
                            />
                          </Form.Group>
                        </Col> */}

                        <Col>                          
                          <Form.Group className="w-50 mb-3" controlId="formBasicEmail">
                            <Form.Label>Reference / Cited as </Form.Label>
                            <Form.Control
                             type="text"
                            />
                          </Form.Group>
                        </Col>

                        <Col>                          
                          <Form.Group className="w-50 mb-3" controlId="formBasicEmail">
                            <Form.Label>Email of contributor</Form.Label>
                            <Form.Control
                             type="email"
                            />
                          </Form.Group>
                        </Col>
                        



                    </Row>
                  </Container>
                </Form>
              </Alert>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
