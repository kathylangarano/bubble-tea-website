import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/Carousel.css"
import Buttons from '../../common/Button/Button';
import UseNavigation from '../../hooks/UseNavigate';

const TopCarousel = () =>{
  const [index, setIndex] = useState(0);
  const goTo = UseNavigation();

  const handleSelect = (selectedIndex: React.SetStateAction<number>) => {
    setIndex(selectedIndex);
  }


  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../../public/assets/images/img1.jpeg"
            alt="Primer slide"
          />
        <div className="carousel-overlay position-absolute">
          <h2>¡Descubre la auténtica experiencia del Bubble Tea en Ecuador!</h2>
        </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../../public/assets/images/img2.jpeg"
            alt="Segundo slide"
          />
        <div className="carousel-overlay position-absolute">
          <h2>¡Únete a nuestra aventura y descubre el auténtico Bubble Tea, hecho con amor y tradición taiwanesa!</h2>
        </div>
        </Carousel.Item>
      </Carousel>
      <div className="aboutus-button-box"> 
        <Buttons
          variant="contained"
          size="large"
          buttonText="Conoce más"
          onClick={goTo("/About")}
        />
      </div>
    </div>

  );
}

export default TopCarousel;
