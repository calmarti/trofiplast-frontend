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
        <Col xs={1} className="px-0">
          <Sidebar />
        </Col>

        <Col className="px-0">
          <main className="main">
            <Alert variant="primary" className="detail-alert-component py-5">
              <br />
              <br />
              <Alert.Heading className="alert-heading">Detail</Alert.Heading>

              <Card border="primary" style={{ width: "40em", margin: "0 auto" }}>
              <Card.Header>{item && item[0].species}</Card.Header>
              <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            </Alert>
          </main>
        </Col>
      </Row>
    </Container>
  );
}
