import Sidebar from "../layout/Sidebar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Stack from "react-bootstrap/Stack";
import Alert from "react-bootstrap/Alert";
import { useState, useEffect } from "react";

export default function Search() {
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState({
    group: "",
    family: "",
    genus: "",
    species: "",
    area: "",
    country: "",
    from: null,
    to: null,
  });

  return (
    <Container fluid>
      <Row>
        <Col xs={1} className="px-0">
          <Sidebar />
        </Col>

        <Col className="px-0">
          <Alert className="search-alert-component py-5" variant="primary">
            <Alert.Heading className="search-alert-heading">
              Search the Cronoplast database
            </Alert.Heading>
            <hr />
            <p className="search-alert-summary">
              Cronoplast contains 300 registers of plastic ingestion by animals
              that spans 120 years in time across several geographical areas
              worldwide. Sources are mainly from scientific literature but also
              include other type of references.
            </p>
            <hr />
            <br />
            <Form>
              <Container className="w-50">
                {/* <Stack className="my-5 py-4 px-5 bg-light border" gap={1}> */}
                {/*    <Form.Text>Grupo taxonómico</Form.Text> */}

                <Row>
                  <Form.Group as={Col} className="mx-4">
                    <Form.Label>
                      <span className="select-label">General group</span>
                      <Form.Select className="mx-5 my-3" defaultValue="">
                        <option></option>
                        <option value="1">Fish</option>
                        <option value="2">Terrestrial Mammal</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Label>
                  </Form.Group>

                  <Form.Group as={Col} className="mx-4">
                    <Form.Label>
                      <span className="select-label">Family</span>
                      <Form.Select className="mx-5 my-3" defaultValue="">
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">A long option indeed</option>
                      </Form.Select>
                    </Form.Label>
                  </Form.Group>
                </Row>
              </Container>

              <Container className="w-50">
                <Row>
                  <Form.Group as={Col} className="mx-4">
                    <Form.Label>
                      <span className="select-label">Genus</span>
                      <Form.Select className="mx-5 my-3" defaultValue="">
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">A long option indeed</option>
                      </Form.Select>
                    </Form.Label>
                  </Form.Group>

                  <Form.Group as={Col} className="mx-4">
                    <Form.Label>
                      <span className="select-label">Species</span>
                      <Form.Select className="mx-5 my-3" defaultValue="">
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">A long option indeed</option>
                      </Form.Select>
                    </Form.Label>
                  </Form.Group>
                </Row>
              </Container>

              <Container className="w-50">
                <Row>
                  <Form.Group as={Col} className="mx-4">
                    <Form.Label>
                      <span className="select-label">Area</span>
                      <Form.Select className="mx-5 my-3" defaultValue="">
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">A long option indeed</option>
                      </Form.Select>
                    </Form.Label>
                  </Form.Group>

                  <Form.Group as={Col} className="mx-4">
                    <Form.Label>
                      <span className="select-label">Country</span>
                      <Form.Select className="mx-5 my-3" defaultValue="">
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">A long option indeed</option>
                      </Form.Select>
                    </Form.Label>
                  </Form.Group>
                </Row>
              </Container>

              {/* Date: 2 input text (years): from y to/}

                {/* botón de reset y botón de continue */}

              {/*   </Stack> */}
            </Form>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}
