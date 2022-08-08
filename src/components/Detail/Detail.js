import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "../layout/Sidebar";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import client from "../../api/client";

export default function Detail() {
  const [item, setItem] = useState(null);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    client.get(`/apiv1/items/${id}`).then((data) => setItem(data.result));
  }, [id]);

  console.log("item", item);
  // console.log(item[0].species);

  return (
    <Container fluid>
      <Row>
        <Col md="auto" className="px-0">
          <Sidebar />
        </Col>

        <Col className="px-0">
          <main>
            <Alert variant="primary" className="detail-alert-component py-5">
              <br />

              {/*  <Alert.Heading className="alert-heading">Search results</Alert.Heading> */}

              <Card
                border="primary"
                style={{ width: "50em", margin: "0 auto" , height: "90vh" }}
                className="d-flex flex-column justify-content-center"
              >
                <Card.Header as="h4" className="text-center mt-5 pb-1">
                  {item && item[0].species}
                </Card.Header>

                <Card.Body className="my-0 py-0 mx-4">
                  <Card.Title as="h5">
                    Taxonomic group:
                    <span style={{ fontSize: "smaller", fontWeight: "400" }}>
                      {" "}
                      &nbsp;{item && item[0].group}
                    </span>
                  </Card.Title>
                  <br />
                  <Card.Title as="h5">
                    Order
                    <span style={{ fontSize: "smaller", fontWeight: "400" }}>
                      {" "}
                      &nbsp;{item && item[0].order}
                    </span>
                  </Card.Title>
                  <br />
                  <Card.Title as="h5">
                    Family:
                    <span style={{ fontSize: "smaller", fontWeight: "400" }}>
                      {" "}
                      &nbsp;{item && item[0].family}
                    </span>
                  </Card.Title>
                  <br />
                  <Card.Title as="h5">
                    Genus:
                    <span style={{ fontSize: "smaller", fontWeight: "400" }}>
                      {" "}
                      &nbsp;{item && item[0].genus}
                    </span>
                  </Card.Title>
                  <br />
                  <Card.Title as="h5">
                    Origin
                    <span style={{ fontSize: "smaller", fontWeight: "400" }}>
                      {" "}
                      &nbsp;{item && item[0].origin}
                    </span>
                  </Card.Title>
                  <br />
                  <Card.Title as="h5">
                    Area:
                    <span style={{ fontSize: "smaller", fontWeight: "400" }}>
                      {" "}
                      &nbsp;{item && item[0].area}
                    </span>
                  </Card.Title>
                  <br />
                  <Card.Title as="h5">
                    Country:
                    <span style={{ fontSize: "smaller", fontWeight: "400" }}>
                      {" "}
                      &nbsp;{item && item[0].country}
                    </span>
                  </Card.Title>
                  <br />
                  <Card.Title as="h5">
                    Sampling info:
                    <span style={{ fontSize: "smaller", fontWeight: "400" }}>
                      {" "}
                      &nbsp;{item && item[0].sampling_info}
                    </span>
                  </Card.Title>
                  <br />
                  <Card.Title as="h5">
                    Summary:
                    <span
                      className="justify"
                      style={{ fontSize: "smaller", fontWeight: "400" }}
                    >
                      {" "}
                      &nbsp;{item && item[0].summary}
                    </span>
                  </Card.Title>
                  <br />
                  <Card.Title as="h5">
                    Reference / Contributor:
                    <span
                      className="justify"
                      style={{ fontSize: "smaller", fontWeight: "400" }}
                    >
                      {" "}
                      &nbsp;{item && item[0].reference}
                    </span>
                  </Card.Title>
                  <br />
                  <Card.Title as="h5">
                    Resource:
                    <span style={{ fontSize: "smaller", fontWeight: "400" }}>
                      {" "}
                      &nbsp;{item && <a href={item[0].href}>{item[0].href}</a>}
                    </span>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Alert>
          </main>
        </Col>
      </Row>
    </Container>
  );
}
