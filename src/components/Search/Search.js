import Sidebar from "../layout/Sidebar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Stack from "react-bootstrap/Stack";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

import client from "../../api/client";

export default function Search() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
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

  console.log(filters);

  const handleChange = (ev) => {
    setFilters((currentState) => ({
      ...currentState,
      [ev.target.name]: ev.target.value,
    }));
  };

  const handleReset = () => {
    //reset all filters
  };


  //llamada al api con handleSubmit
  //recibo respuesta y si hay registros cambio el estado 'items' y pinto tabla de resultados
  // sino muestro mensaje tipo "no hay registros con esos filtros"

  const handleSubmit = (ev) => {
    ev.preventDefault();
    client
      .get(
        `${process.env.REACT_APP_API_BASE_URL}/apiv1/items/?group=${filters.group}&family=${filters.family}&genus=${filters.genus}&species=${filters.species}&area=${filters.area}&country=${filters.country}`
      )
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={1} className="px-0">
          <Sidebar />
        </Col>

        <Col className="px-0">
          <Alert className="search-alert-component py-5" variant="primary">
            <Alert.Heading  className="search-alert-heading">
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
                  <Form.Group as={Col} className="mx-2">
                    <Form.Label>
                      <span className="select-label">General group</span>
                      <Form.Select
                        className="mx-5 my-3"
                        defaultValue=""
                        name="group"
                        onChange={handleChange}
                      >
                        <option></option>
                        <option value="Fish">Fish</option>
                        <option value="Terrestrial Mammal">
                          Terrestrial Mammal
                        </option>
                        <option value="Marine mammal">Marine mammal</option>
                      </Form.Select>
                    </Form.Label>
                  </Form.Group>

                  <Form.Group as={Col} className="mx-2">
                    <Form.Label>
                      <span className="select-label">Family</span>
                      <Form.Select
                        className="mx-5 my-3"
                        defaultValue=""
                        name="family"
                        onChange={handleChange}
                      >
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
                  <Form.Group as={Col} className="mx-2">
                    <Form.Label>
                      <span className="select-label">Genus</span>
                      <Form.Select
                        className="mx-5 my-3"
                        defaultValue=""
                        name="genus"
                        onChange={handleChange}
                      >
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">A long option indeed</option>
                      </Form.Select>
                    </Form.Label>
                  </Form.Group>

                  <Form.Group as={Col} className="mx-2">
                    <Form.Label>
                      <span className="select-label">Species</span>
                      <Form.Select
                        className="mx-5 my-3"
                        defaultValue=""
                        name="species"
                        onChange={handleChange}
                      >
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
                  <Form.Group as={Col} className="mx-2">
                    <Form.Label>
                      <span className="select-label">Area</span>
                      <Form.Select
                        className="mx-5 my-3"
                        defaultValue=""
                        name="area"
                        onChange={handleChange}
                      >
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">A long option indeed</option>
                      </Form.Select>
                    </Form.Label>
                  </Form.Group>

                  <Form.Group as={Col} className="mx-2">
                    <Form.Label>
                      <span className="select-label">Country</span>
                      <Form.Select
                        className="mx-5 my-3"
                        defaultValue=""
                        name="country"
                        onChange={handleChange}
                      >
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">A long option indeed</option>
                      </Form.Select>
                    </Form.Label>
                  </Form.Group>
                </Row>
              </Container>

              {/* Date: 2 input text (years): from y to/*/}

              <Container className="w-50 my-4 button-container">
                <Row xs={2} className="">
                  <Col xs={{ span: 2, offset: 4 }}>
                    <Button
                      size="md"
                      type="submit"
                      variant="outline-primary"
                      onClick={handleSubmit}
                    >
                      Search
                    </Button>{" "}
                  </Col>
                  <Col xs={{ span: 0, offset: 0 }}>
                    <Button
                      size="md"
                      type="reset"
                      variant="outline-info"
                      onClick={handleReset}
                    >
                      Reset
                    </Button>
                  </Col>
                </Row>
              </Container>

              {/* botón de reset y botón de continue */}

              {/*   </Stack> */}
            </Form>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}
