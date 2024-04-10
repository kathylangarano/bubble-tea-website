import  { useState } from 'react';
import {useNavigate } from 'react-router';

import Slider from "react-slick";
import "../../styles/ProductCarousel.css";
import bt from '../../assets/images/bt.png';
import btmango from '../../assets//images/btmango.png';
import btpanela from "../../assets/images/btpanela.png"
import btjamaica from "../../assets/images/btjamaica.png"
import btfresa from "../../assets/images/btfresa.png"
import Buttons from '../../common/Button/Button';
import CustomTypography from '../../common/Typography/Typography';



const ProductsCarousel = () =>{
  const productsCarousel = [bt, btmango, btpanela, btjamaica, btfresa];
  const productsCarouselName = ["Bubble Tea", "Bubble Tea Mango", "Bubble Tea Panela", "Bubble Tea Jamaica", "Bubble Tea Fresa"];
  const [activeIndex, setActiveIndex] = useState(0); 
  const navigate = useNavigate();


  const handleButtonClick = () => {
    navigate('/Menu');
  };

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
      <div className="menu-button-box"> 
        <Buttons
          variant="contained"
          size="large"
          buttonText="Mira más productos"
          onClick={handleButtonClick} 
        />
      </div>
      <Slider {...settings as any}> 
        {productsCarousel.map((img, indexI) => (
          <div className={`carousel-slide ${indexI === activeIndex ? 'carousel-slide-active' : ''}`}>
            <div className="product">
              <img src={img} alt={img} className="product-img"/>
              <CustomTypography variant="p" text={productsCarouselName[indexI]}/>
            </div>
          </div>
        ))}
      </Slider> 
    </div>
  );
}

export default ProductsCarousel;
