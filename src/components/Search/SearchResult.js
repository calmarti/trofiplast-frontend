import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

//TODO: Paginar con librería y hacer el endpoint correspondiente (o hacer cambios al endpoint existente)
//TODO: incluir info de los criterio de busqueda utilizados
//TODO: botón "Back"

export default function SearchResult({ items, filters }) {
  const itemId = "anyId";
  const criteria = [];
  for (let filter in filters) {
    if (filters[filter]) {
      criteria.push(filter);
    }
  }

  return (
    <>
      <Alert variant="primary" className="py-5">
        <Alert.Heading className="search-result-alert-heading">
          Searched Items
        </Alert.Heading>
        <Container className="my-5">
          <Badge bg="primary" className="my-3">
            Criteria: {criteria.join(",  ")}
          </Badge>

          {items.length !== 0 ? (
            <Alert variant="primary">
              <Table
                striped
                /* bordered */
                hover
                size="sm"
                variant="primary"
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
                        <Link to={`/items/${itemId}`}>
                          <i className="fa-solid fa-book"></i>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Alert>
          ) : (
            "There are no items matching those criteria"
          )}
        </Container>
      </Alert>
    </>
  );
}
