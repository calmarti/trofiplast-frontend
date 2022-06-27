import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

//TODO: Paginar con librería y hacer el endpoint correspondiente (o hacer cambios al endpoint existente)


export default function SearchResult({ items }) {
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
                {items.map((item) => (
                  <tr>
                    <td>{item.species}</td>
                    <td>{item.area}</td>
                    <td>{item.country}</td>
                    <td>Icono Detalle</td>
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
