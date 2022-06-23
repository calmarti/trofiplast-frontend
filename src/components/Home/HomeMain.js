import Alert from "react-bootstrap/Alert";
import Figure from "react-bootstrap/Figure";
// import FigureImage from 'react-bootstrap/FigureImage'

//TODO: insertar un accordion 'Database' entre Alert y main con dos opciones en el Alert.Body:
//Buscar y contribuir. Cada opción podría ser a su vez un Alert.Link

//TODO: no muestra la imagen, probar:
//- convirtiendola a .pnp

export default function HomeMain() {
  return (
    <main>
      <Alert className="alert-component py-5" variant="primary">
        <br />
        <Alert.Heading className="alert-heading">Cronoplast</Alert.Heading>
        <p className="alert-oneliner">
          A database of ingested plastics in marine animals
        </p>
        <br />
        <br />
        <hr />
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <hr />
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <Figure>
          <Figure.Image
            width={400}
            height={400}
            alt=""
            src="../../../public/cronoplast-main.tif"
          />
        </Figure>
      </Alert>
      
    </main>
  );
}
