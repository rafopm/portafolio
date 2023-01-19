import Carousel from "react-bootstrap/Carousel";
import imagen1 from "../images/code-slider-one.jpg";
import imagen2 from "../images/code-slider-two.jpg";
import imagen3 from "../images/code-slider-three.jpg";
import { Container } from "react-bootstrap";

function HomePage() {
  return (
    <>
      <Container>
        <p>Lorem Lorem</p>
        <p>Lorem Lorem</p>
        <p>Lorem Lorem</p>
        <p>Lorem Lorem</p>
      </Container>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={imagen1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imagen2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imagen3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
        <p>Lorem Lorem</p>
        <p>Lorem Lorem</p>
        <p>Lorem Lorem</p>
        <p>Lorem Lorem</p>
      </Container>
    </>
  );
}

export default HomePage;
