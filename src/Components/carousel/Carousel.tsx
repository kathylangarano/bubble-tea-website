import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/Carousel.css"

const TopCarousel = () =>{
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: React.SetStateAction<number>) => {
    setIndex(selectedIndex);
  }


  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/src/assets/img1.jpeg"
            alt="Primer slide"
          />
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src="/src/assets/img2.jpeg"
          alt="Segundo slide"
        />
        </Carousel.Item>  
      </Carousel>
    </>

  );
}

export default TopCarousel;
