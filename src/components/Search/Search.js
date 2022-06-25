import Sidebar from "../layout/Sidebar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Alert from "react-bootstrap/Alert";

export default function Search() {
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
          <hr/>
          <p className="search-alert-summary">Cronoplast contains 300 registers of plastic ingestion by animals that spans 120 years in time across several geographical areas worldwide. Its sources are mainly scientific literature but it include other type of references.</p>
           <hr/>
            <Form>              
              <Container className="w-50">
                <Row>
              {/*   wrapper con borde */}
              <Stack className="my-5 py-4 bg-light border" gap={1}>
                <Form.Text>Grupo taxonómico</Form.Text>
                <Form.Select className="mx-5 my-2 w-75">
                  <option>General group</option>
                  <option value="1">Fish</option>
                  <option value="2">Terrestrial Mammal</option>
                  <option value="3">Three</option>
                </Form.Select>

                <Form.Select className="mx-5 my-2 w-75">
                  <option>Family</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>

                <Form.Select className="mx-5 my-2 w-75">
                  <option>Genus</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select className="mx-5 my-2 w-75">
                  <option>Species</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Stack>
              {/*  wrapper con borde  */}
              </Row>
              </Container>


            </Form>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}
