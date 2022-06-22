import Alert from 'react-bootstrap/Alert';

//TODO: insertar un accordion 'Database' entre Alert y main con dos opciones en el Alert.Body: 
//Buscar y contribuir. Cada opción podría ser a su vez un Alert.Link

export default function HomeMain() {
  return (
    <main>
      <Alert variant="primary">
      <Alert.Heading className="alert-heading">Cronoplast</Alert.Heading>
      <p className="alert-oneliner">A plastic contamination database</p>
      <br />
      <hr />
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      <hr />
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      </Alert>

    </main>
  );
}
