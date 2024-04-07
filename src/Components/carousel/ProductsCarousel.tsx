import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import "../../styles/ProductCarousel.css";
import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';
import logo from "../../assets/logo.jpg"

const ProductsCarousel = () =>{
  const productsCarousel = [img1, img2, logo];
  const productsCarouselName = ["Tea", "Hand", "Logo"];
  const [activeIndex, setActiveIndex] = useState(0); // índice del slide actual

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 400,
    slideToShow: 3,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (oldIndex: number, newIndex: number) => setActiveIndex(newIndex),
  };

  
  return (
    <div className="slider">
      <Slider {...settings as any}> 
        {productsCarousel.map((img, indexI) => (
          <div className={`carousel-slide ${indexI === activeIndex ? 'carousel-slide-active' : ''}`}>
            <div className="product">
              <img src={img} alt={img} className="product-img"/>
              <p className="product-name">{productsCarouselName[indexI]}</p>
            </div>
          </div>
        ))}
      </Slider> 
    </div>
  );
}

export default ProductsCarousel;
