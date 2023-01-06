import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/esm/Container";
import Sidebar from "../layout/Sidebar";
import Figure from "react-bootstrap/Figure";
import logo from "../../images/archipelagos_logo.png";

export default function About() {
  return (
    <>
      <main>
        <Container fluid>
          <Row>
            <Col md={2} className="px-0">
              <Sidebar />
            </Col>
            <Col className="px-0">
              <Alert className="about-alert py-5 my-0" variant="primary">
                <br />
                <br />
                {/* <Alert.Heading className="alert-heading-about">                    
                 About us
                </Alert.Heading> */}
                <hr />

                {/* <p className="alert-summary-about">
                 We are ...
                </p> */}

       <div className="temporary-about-wrapper">
        <h2 className="archipelagos-italia">Archipelagos ambiente e sviluppo Italia</h2>
        <a className="archipelagos-link" href="https://archipelagos-org.eu/en/">  Archipelagos environment and development</a>    

        <Figure className="logo-figure">
          <Figure.Image
            width={200}
            height={200}
            alt=""
            src={logo}
            className="figure-image"
          />
        </Figure>
        </div>


              </Alert>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
    