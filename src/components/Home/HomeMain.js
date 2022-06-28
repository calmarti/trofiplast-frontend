import Alert from "react-bootstrap/Alert";
import Figure from "react-bootstrap/Figure";
import FigureImage from "react-bootstrap/FigureImage";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
// import FigureImage from 'react-bootstrap/FigureImage'
import image from "../../images/cronoplast-main.png";


//TODO: elemento 'main' pierde la altura del padre (column y row): 16 px menos ==> solución: ajustar la altura de la fila a un valor apropiado (heredada por columnas y todo lo demás)
//TODO: responsiveness: el único que es responsive es el main; y dentro de este NO es responsive el accordion o los botones
//el sidebar es responsive a medias pero necesita colapsarse en un menú de hamburguesa o algo así
//TODO: Buscar y contribuir. Cada opción podría ser a su vez un Alert.Link as a Button

export default function HomeMain() {
  return (
    <main>
      <Alert className="alert-component py-5" variant="primary">
        <br />
        <Alert.Heading className="display-5">
          Cronoplast
        </Alert.Heading>
        <p className="alert-oneliner">
          A worldwide database of ingested plastics in animals
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
          culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum."
        </p>

        <hr />

        <Accordion className="accordion">
          <Accordion.Item  eventKey="0" className="bg-primary-outline">
            <Accordion.Header>
              <span className="accordion-header">Database</span>
            </Accordion.Header>
            <Accordion.Body>
              <Button
                as="a"
                href="/search"
                className="search-button"
                size="lg"
                variant="outline-primary"
              >
                Search
              </Button>
              <Button
                as="a"
                href="/contribute"
                className="contrib-button"
                size="lg"
                variant="outline-info"
              >
                Contribute
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Figure className="figure">
          <Figure.Image
            width={640}
            height={360}
            alt=""
            src={image}
            className="figure-image"
          />
        </Figure>
      </Alert>
    </main>
  );
}
