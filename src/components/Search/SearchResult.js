import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

//TODO: Paginar con librería y hacer el endpoint correspondiente (o hacer cambios al endpoint existente)
//TODO: incluir info de los criterio de busqueda utilizados
//TODO: icono de ir al detalle
//TODO: botón "Back"

export default function SearchResult({ items }) {
  const itemId = "anyId";

  return (
    <>
      <Alert variant="primary" className="py-5">
        <Alert.Heading className="search-result-alert-heading">
          Searched Items
        </Alert.Heading>
        <Container className="my-5">
          {items.length !== 0 ? (
            <Table
              striped
              /* bordered */
              hover
              size="sm"
              variant="light"
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
          ) : (
            "There are no items matching those criteria"
          )}
        </Container>
      </Alert>
    </>
  );
}
