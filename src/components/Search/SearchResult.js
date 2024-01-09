import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

//TODO: Paginar con librería y hacer el endpoint correspondiente (o hacer cambios al endpoint existente)
//TODO: arreglar botón "Back": debe devolver a Search con todo vacío, no al Home!

export default function SearchResult({ items, filters }) {
  const criteria = [];
  for (let filter in filters) {
    if (filters[filter]) {
      criteria.push(filter);
    }
  }
  const navigate = useNavigate();

  return (
    <>
    <main className="main-search-result">
      <Alert variant="primary" className="search-result-alert-component py-5 my-0">
        <br />
        <br />
        <Alert.Heading className="alert-heading">
          Searched Items
        </Alert.Heading>
        <Container className="my-5">
          <Badge bg="primary" className="my-3">
            Criteria: {criteria.join(",  ")}
          </Badge>

          {items.length !== 0 ? (
            <Alert variant="primary">
              <Table
                // className="alert-search-result"
                striped
                /* bordered */
                hover
                size="sm"
                variant="primary"
               /*  convert xls to json */
                responsive="sm"
              >
                <thead>
                  <tr>
                    <th>Species</th>
                    <th>Area</th>
                    <th>Country</th>
                    {/* <th>From</th>
                <th>To</th> */}
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.species}</td>
                      <td>{item.area}</td>
                      <td>{item.country}</td>
                      <td>
                        <Link to={`/${item._id}`}>
                          <i className="fa-solid fa-book"></i>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <Button
                href=""
                size="md"
                variant="outline-primary"
                type="button"
                onClick={(ev) => {
                  navigate(-1);
                }}
              >
                Back
              </Button>
            </Alert>
          ) : (
            <p className="no-results-message">There are no items matching those criteria</p>
          )}
        </Container>
      </Alert>
      </main>
    </>
  );
}
