import Sidebar from "../layout/Sidebar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Stack from "react-bootstrap/Stack";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import SelectCol from "./SelectCol";
import client from "../../api/client";

//TODO: refactorizar => encapsular en componente Select y borrar codigo comentado desechable
//TODO: renderizado condicional de tabla tras handleSubmit, sino renderiza mensaje de resultado vacío
//TODO: 4 estados: formulario sin enviar, tabla de resultados (sin formulario), formulario con mensaje de error y formulario con mensaje de resultado vacío
//TODO: handleReset: ojo: button es type reset, ¿está bien? (parece que no: tras reset al hacer submit con filtros no devuelve nada)
//TODO: componente Error
//TODO: handleSubmit: tras una búsqueda cuando todos los campos del form se vuelven a poner en blanco al hacer submit devuelve todos los items!

export default function Search() {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [fieldValues, setFieldValues] = useState({
    group: [],
    family: [],
    genus: [],
    species: [],
    area: [],
    country: [],
    // from: null,
    // to: null,
  });
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

  useEffect(() => {
    for (let field in fieldValues) {
      console.log(field);
      client
        .get(`${process.env.REACT_APP_API_BASE_URL}/apiv1/fields/${field}`)
        .then((data) =>
          setFieldValues((currentState) => ({
            ...currentState,
            [field]: data.result,
          }))
        )
        .catch((error) => console.log(error));
    }
  }, []);

  // console.log(fieldValues);
  // console.log(filters);
  console.log(items);

  const handleChange = (ev) => {
    setFilters((currentState) => ({
      ...currentState,
      [ev.target.name]: ev.target.value,
    }));
  };

  const handleReset = () => {
    //reset all filters
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    client
      .get(
        `${process.env.REACT_APP_API_BASE_URL}/apiv1/items/?group=${filters.group}&family=${filters.family}&genus=${filters.genus}&species=${filters.species}&area=${filters.area}&country=${filters.country}`
      )
      .then((data) => setItems(data.result))
      .catch((error) => console.log(error));
  };

  return (
    <>
      {!items ? (
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
                  Cronoplast contains 300 registers of plastic ingestion by
                  animals that spans 120 years in time across several
                  geographical areas worldwide. Sources are mainly from
                  scientific literature but also include other type of
                  references.
                </p>
                <hr />
                <br />

                <Form>
                  <Container className="w-50">
                    {/* <Stack className="my-5 py-4 px-5 bg-light border" gap={1}> */}
                    {/*    <Form.Text>Grupo taxonómico</Form.Text> */}

                    <Row>
                      <SelectCol
                        col={Col}
                        label="General group"
                        name="group"
                        values={fieldValues.group}
                        handleChange={handleChange}
                      />

                      <SelectCol
                        col={Col}
                        label="Family"
                        name="family"
                        values={fieldValues.family}
                        handleChange={handleChange}
                      />
                    </Row>
                  </Container>

                  <Container className="w-50">
                    <Row>
                      <SelectCol
                        col={Col}
                        label="Genus"
                        name="genus"
                        values={fieldValues.genus}
                        handleChange={handleChange}
                      />

                      <SelectCol
                        col={Col}
                        label="Species"
                        name="specices"
                        values={fieldValues.species}
                        handleChange={handleChange}
                      />
                    </Row>
                  </Container>

                  <Container className="w-50">
                    <Row>
                      <SelectCol
                        col={Col}
                        label="Area"
                        name="area"
                        values={fieldValues.area}
                        handleChange={handleChange}
                      />
                      <SelectCol
                        col={Col}
                        label="Country"
                        name="country"
                        values={fieldValues.country}
                        handleChange={handleChange}
                      />
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
                          Submit
                        </Button>{" "}
                      </Col>
                      <Col xs={{ span: 0, offset: 0 }}>
                        <Button
                          size="md"
                          // type="reset"
                          variant="outline-info"
                          onClick={handleReset}
                        >
                          Reset
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </Form>
              </Alert>
            </Col>
          </Row>
        </Container>
      ) : "Hay items"}
    </>
  );
}

{
  /* <Form.Group as={Col} className="mx-2">
                    <Form.Label>
                      <span className="select-label">General group</span>
                      <Form.Select
                        className="mx-5 my-3 w-75 select-form"
                        defaultValue=""
                        name="group"
                        onChange={handleChange}
                      >
                        <option></option>
                        {fieldValues.group &&
                          fieldValues.group.map((value, index) => (
                            <option key={index} value={value}>
                              {value}
                            </option>
                          ))}
                      </Form.Select>
                    </Form.Label>
                  </Form.Group> */
}

{
  /* <Form.Group as={Col} className="mx-2">
                    <Form.Label>
                      <span className="select-label">Family</span>
                      <Form.Select
                        className="mx-5 my-3 w-75"
                        defaultValue=""
                        name="family"
                        onChange={handleChange}
                      >
                        <option></option>
                        {fieldValues.family &&
                          fieldValues.family.map((value, index) => (
                            <option key={index} value={value}>
                              {value}
                            </option>
                          ))}
                      </Form.Select>
                    </Form.Label>
                  </Form.Group> */
}

{
  /* <Container className="w-50">
                <Row>
                  <Form.Group as={Col} className="mx-2">
                    <Form.Label>
                      <span className="select-label">Genus</span>
                      <Form.Select
                        className="mx-5 my-3 w-75"
                        defaultValue=""
                        name="genus"
                        onChange={handleChange}
                      >
                        <option></option>
                        {fieldValues.genus &&
                          fieldValues.genus.map((value, index) => (
                            <option key={index} value={value}>
                              {value}
                            </option>
                          ))}
                      </Form.Select>
                    </Form.Label>
                  </Form.Group>

                  <Form.Group as={Col} className="mx-2">
                    <Form.Label>
                      <span className="select-label">Species</span>
                      <Form.Select
                        className="mx-5 my-3 w-75"
                        defaultValue=""
                        name="species"
                        onChange={handleChange}
                      >
                        <option></option>
                        {fieldValues.species &&
                          fieldValues.species.map((value, index) => (
                            <option key={index} value={value}>
                              {value}
                            </option>
                          ))}
                      </Form.Select>
                    </Form.Label>
                  </Form.Group>
                </Row>
              </Container> */
}

{
  /* <Container className="w-50">
                <Row>
                  <Form.Group as={Col} className="mx-2">
                    <Form.Label>
                      <span className="select-label">Area</span>
                      <Form.Select
                        className="mx-5 my-3 w-75"
                        defaultValue=""
                        name="area"
                        onChange={handleChange}
                      >
                        <option></option>
                        {fieldValues.area &&
                          fieldValues.area.map((value, index) => (
                            <option key={index} value={value}>
                              {value}
                            </option>
                          ))}
                      </Form.Select>
                    </Form.Label>
                  </Form.Group>

                  <Form.Group as={Col} className="mx-2">
                    <Form.Label>
                      <span className="select-label">Country</span>
                      <Form.Select
                        className="mx-5 my-3 w-75"
                        defaultValue=""
                        name="country"
                        onChange={handleChange}
                      >
                        <option></option>
                        {fieldValues.country &&
                          fieldValues.country.map((value, index) => (
                            <option key={index} value={value}>
                              {value}
                            </option>
                          ))}
                      </Form.Select>
                    </Form.Label>
                  </Form.Group>
                </Row>
              </Container> */
}
