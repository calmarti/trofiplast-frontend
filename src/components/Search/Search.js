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
import SearchResult from "./SearchResult";
import client from "../../api/client";


//TODO: entender bien como funciona el responsiveness de bootstrap

//TODO: bug: el filtro solo por specie devuelve null (combinado con otro criterio sí que funciona)
//TODO: 4 estados: formulario sin enviar, tabla de resultados (sin formulario), formulario con mensaje de error y formulario con mensaje de resultado vacío
//TODO: componentes que faltan: Error, Pagination, Contribute, Contact, About

export default function Search() {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState(true);

  const [fieldValues, setFieldValues] = useState({
    group: [],
    order: [],
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
    order: "",
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
  }, [emptyFields]);

  // console.log(fieldValues);
  // console.log(filters);
  // console.log(items);

  const handleChange = (ev) => {
    setFilters((currentState) => ({
      ...currentState,
      [ev.target.name]: ev.target.value,
    }));
  };

  const handleReset = () => {
    setFieldValues({
    group: "",
    order: "",
    family: "",
    genus: "",
    species: "",
    area: "",
    country: "",
    from: null,
    to: null,})
    setEmptyFields(!emptyFields);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    client
      .get(
        `${process.env.REACT_APP_API_BASE_URL}/apiv1/items/?group=${filters.group}&order=${filters.order}&family=${filters.family}&genus=${filters.genus}&species=${filters.species}&area=${filters.area}&country=${filters.country}`
      )
      .then((data) => setItems(data.result))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <main className="main">
        <Container fluid>
          <Row>
            <Col md="auto" className="px-0">
              <Sidebar />
            </Col>

            {items === null ? (
              <Col className="px-0">
                <Alert className="py-5 my-0" variant="primary">
                  <br />
                  <br />
                  <Alert.Heading className="alert-heading">
                    Search the Trofiplast database
                  </Alert.Heading>
                  <hr />

                  <p className="alert-summary">
                    Trofiplast contains registers of plastic ingestion by
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
                        <SelectCol
                          col={Col}
                          label="General group"
                          name="group"
                          values={fieldValues.group}
                          handleChange={handleChange}
                        />

                        <SelectCol
                          col={Col}
                          label="Order"
                          name="order"
                          values={fieldValues.order}
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
                          name="species"
                          values={fieldValues.species}
                          handleChange={handleChange}
                        />

                        <SelectCol
                          col={Col}
                          label="Area"
                          name="area"
                          values={fieldValues.area}
                          handleChange={handleChange}
                        />
                      </Row>
                    </Container>

                    <Container className="w-25">
                      <Row>
                        <SelectCol
                          col={Col}
                          label="Country"
                          name="country"
                          values={fieldValues.country}
                          handleChange={handleChange}
                          
                        />
                      </Row>
                    </Container>

                    <Container className="w-50 my-4 year-fields-container">
                      <Row>
                        <Form.Group as={Col} xs={{ span: 12 }} className="mx-2">
                          <Form.Label>From</Form.Label>
                          <Form.Control
                            className="w-25"
                            type="text"
                            placeholder="YYYY"
                            disabled
                          />
                        </Form.Group>

                        <Form.Group as={Col} xs={{ span: 12 }} className="mx-2">
                          <Form.Label>To</Form.Label>
                          <Form.Control
                            className="w-25"
                            type="text"
                            placeholder="YYYY"
                            disabled
                          />
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
            ) : (
              <Col className="px-0">
                <SearchResult items={items} filters={filters} />
              </Col>
            )}
          </Row>
        </Container>
      </main>
    </>
  );
}
