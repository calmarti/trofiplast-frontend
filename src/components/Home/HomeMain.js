import Alert from "react-bootstrap/Alert";
import Figure from "react-bootstrap/Figure";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import mainImage from "../../images/trofiplast-main.png";
import logo from "../../images/archipelagos_logo.png";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";



export default function HomeMain() {
  return (
    // <main>
 
      <Alert className="alert-component" variant="primary" >
        <br />
        <Alert.Heading className="display-6 alert-heading">
          Trofiplast
        </Alert.Heading>
        <p className="alert-oneliner">
          A worldwide database of ingested plastics in animals
        </p>
        <br />
        <br />
        <hr />

        <p className="spacer">
          <strong>TROFIPLAST</strong> is a web-based database offering an open
          online library of worldwide records of anthropogenic debris ingested
          by biota. It includes the species affected, the area and the year
          where it was found, as well as the reference where the information was
          recorded. Trofiplast is structured according to three general
          categories where biota regularly inhabits: seawater, freshwater, and
          land. A separate category includes laboratory experiments.
        </p>

        <p className="spacer"></p>

        <p className="spacer">
          The web-database has been developed by{" "}
          <strong>Archipelagos, ambiente e sviluppo, Italia </strong> and{" "}
          <strong>Archipelagos - environment and development </strong>{" "}
          organizations under the project{" "}
          <em>
            “Anthropogenic debris impacts on marine biota and its environment”.{" "}
          </em>{" "}
          This web application has been developed as a voluntary work of the
          organization members.
        </p>

        <strong>Cited TROFIPLAST web-based database as:</strong>
        <p className="spacer reference-box">
          Hernandez-Milian, G., Martinez-Calcaño, I., Panou, A. and Bundone, L.
          2022. TROFIPLAST: a web-database environment for the worldwide
          anthropogenic debris ingestion records by biota. Archipelagos,
          ambiente e sviluppo (Italy) and Archipelagos -environment &
          development (Greece). November 2022.
          https://trofiplast.calmartiportfolio.com
        </p>

        <hr />

        <Container fluid>
      
          <Row className="">
            <Col lg={3}>
              <Figure className="main-figure figure-image">
                <Figure.Image width={350} alt="" src={mainImage} />
              </Figure>
            </Col>

            <Col lg={6}>
              <Accordion fluid className="accordion">
                <Accordion.Item eventKey="0" className="bg-primary-outline">
                  <Accordion.Header>
                    <span className="accordion-header">Database</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Container fluid>
                      <Row className="d-flex flex-column">                     
                          <Button
                            as="a"
                            href="/search"
                            className="search-button"
                            size="md"
                            variant="outline-primary"
                          >
                            Search
                          </Button>
                 

                  
                          <Button
                            as="a"
                            // href="/contribute"
                            href=""
                            className="contrib-button"
                            size="md"
                            variant="outline-info"
                          >
                            Contribute
                          </Button>
                 
                      </Row>
                    </Container>
                    
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col lg={3}>
              <Figure className="logo-figure">
                <Figure.Image
                  width={350}
                  alt=""
                  src={logo}
                  className="figure-image"
                />
              </Figure>
            </Col>
          </Row>

          {/* </div> */}
        </Container>
      </Alert>
  
  );
}
