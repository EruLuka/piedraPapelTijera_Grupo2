import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function Integrantes() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="Cruz"
        />
        <Carousel.Caption>
          <h3>Elias Maximiliano Cruz</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="López Polo"
        />
        <Carousel.Caption>
          <h3>Lucas Santiago López Polo</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="Mendivil Cabrera"
        />
        <Carousel.Caption>
          <h3>Nicole Estefania Mendivil Cabrera</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="Planckensteiner"
        />
        <Carousel.Caption>
          <h3>German Matias Planckensteiner</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="Sosa Correa"
        />
        <Carousel.Caption>
          <h3>Agustín Cesar Sosa Correa</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="Velazquez"
        />
        <Carousel.Caption>
          <h3>Conrado Abel Dario Velazquez</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Integrantes;