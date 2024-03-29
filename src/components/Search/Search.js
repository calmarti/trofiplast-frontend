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
import { getFields, getItems } from "../../api/client";


//TODO: 4 estados: formulario sin enviar, tabla de resultados (sin formulario), formulario con mensaje de error y formulario con mensaje de resultado vacío
//TODO: componentes que faltan: Error, Pagination, Contribute, Contact, About

export default function Search() {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [fieldsValues, setFieldsValues] = useState({
    group: [],
    order: [],
    family: [],
    genus: [],
    species: [],
    area: [],
    country: [],
    origin:[],
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
    origin:""
  });
  const [emptyValues, setEmptyValues] = useState(false);
  
//antiguo useEffect antes de cambiar el endpoint /api/fields/${field} a /api/fields
/*   useEffect(() => {
    for (let field in fieldValues) {
         client
        .get(`${process.env.REACT_APP_API_BASE_URL}/api/fields/${field}`)
        .then((data) =>
          setFieldValues((currentState) => ({
            ...currentState,
            [field]: data.result,
          }))
        )
        .catch((error) => console.log(error));
    }
  }, [emptyFields]); */

  useEffect(()=>{
    getFields()
    .then(({results})=>setFieldsValues((currentState)=>
    ({...currentState, group: results[0], order: results[1], 
      family:results[2], genus:results[3], species:results[4],
      area:results[5], origin:results[6], country:results[7]})))

  },[emptyValues])

  const handleChange = (ev) => {
    setFilters((currentState) => ({
      ...currentState,
      [ev.target.name]: ev.target.value,
      }));
     
  };


  //handleReset muy optimizable: cada vez que hay un reset hace una nueva llamada al api (ineficiente)
  //fixes posibles: 
  //(a) setear cada select sin llamar al api, por ejemplo, usando un botón nativo de type = reset
  //(b) crear un estado global tipo redux o con algún hook ad hoc para estado global
    const handleReset = ()=> {
    setFieldsValues({
    group: "",
    order: "",
    family: "",
    genus: "",
    species: "",
    area: "",
    country: "",
    from: null,
    to: null,
    origin:"",
   })
   setEmptyValues(!emptyValues); 
  };
  
  const handleSubmit = (ev) => {
    ev.preventDefault();
       getItems(filters.group, filters.order, filters.family, filters.genus, filters.species, filters.area, filters.country, filters.origin)
      .then((data) => setItems(data.result))
      .catch((error) => console.log(error));
  };

  return (
    <>
            <Row className="g-0">
            <Col lg={2} className="px-0">
              <Sidebar />
            </Col>

            {items === null ? (
              <Col  className="">
                <Alert className="search-alert-component py-5 my-0" variant="primary">
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
                          values={fieldsValues.group}
                          handleChange={handleChange}
                        />

                        <SelectCol
                          col={Col}
                          label="Order"
                          name="order"
                          values={fieldsValues.order}
                          handleChange={handleChange}
                        />

                        <SelectCol
                          col={Col}
                          label="Family"
                          name="family"
                          values={fieldsValues.family}
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
                          values={fieldsValues.genus}
                          handleChange={handleChange}
                        />

                        <SelectCol
                          col={Col}
                          label="Species"
                          name="species"
                          values={fieldsValues.species}
                          handleChange={handleChange}
                        />

                        <SelectCol
                          col={Col}
                          label="Area"
                          name="area"
                          values={fieldsValues.area}
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
                          values={fieldsValues.country}
                          handleChange={handleChange}
                          
                        />
                      </Row>
                    </Container>


                    <Container className="w-25">
                      <Row>
                        <SelectCol
                          col={Col}
                          label="Origin"
                          name="origin"
                          values={fieldsValues.origin}
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
    </>
  );
}
