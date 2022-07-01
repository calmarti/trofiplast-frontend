import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "../layout/Sidebar";
import Alert from "react-bootstrap/Alert";
import { useState, useEffect } from "react";
import client from "../../api/client";

export default function Detail() {
  const [item, setItem] = useState(null);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    client.get(`/apiv1/items/${id}`).then((item) => setItem(item));
  }, [id]);

  console.log('item', item);

  return (
    <Container fluid>
      <Row>
        <Col xs={1} className="px-0">
          <Sidebar />
        </Col>

        <Col className="px-0">
          <Alert variant="primary" className="py-5">
            <Alert.Heading className="search-result-alert-heading">
              Detail
            </Alert.Heading>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}
