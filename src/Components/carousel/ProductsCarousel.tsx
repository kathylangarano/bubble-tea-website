import { useState } from 'react';
import Slider from "react-slick";
import "../../styles/ProductCarousel.css";
import bt from '../../public/assets/images/bt.png';
import btmango from '../../public/assets/images/btmango.png';
import btpanela from "../../public/assets/images/btpanela.png"
import btjamaica from "../../public/assets/images/btjamaica.png"
import btfresa from "../../public/assets/images/btfresa.png"
import Buttons from '../../common/Button/Button';
import CustomTypography from '../../common/CustomTypography/CustomTypography';
import UseNavigation from '../../hooks/UseNavigate';

const ProductsCarousel = () =>{
  const productsCarousel = [bt, btmango, btpanela, btjamaica, btfresa];
  const productsCarouselName = ["Bubble Tea", "Bubble Tea Mango", "Bubble Tea Panela", "Bubble Tea Jamaica", "Bubble Tea Fresa"];
  const [activeIndex, setActiveIndex] = useState(0); 
  const goTo = UseNavigation();

  const settings = {
    infinite: true,
    lazyLoad: 'ondemand' as const, // Corregido el tipo de lazyLoad
    speed: 400,
    slideToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    beforeChange: (_oldIndex: number, newIndex: number) => {
      setActiveIndex(newIndex);
    },
  };

  return (
    <div className="slider">
      <div className="menu-button-box"> 
        <Buttons
          variant="contained"
          size="large"
          buttonText="Mira más productos"
          onClick={goTo("/Menu")} 
        />
      </div>
      <Slider {...settings}> 
        {productsCarousel.map((img, indexI) => (
          <div className={`carousel-slide ${indexI === activeIndex ? 'carousel-slide-active' : ''}`} key={indexI}>
            <div className="product">
              <img src={img} alt={productsCarouselName[indexI]} className="product-img"/>
              <CustomTypography variant="caption" text={productsCarouselName[indexI]} />
            </div>
          </div>
        ))}
      </Slider> 
    </div>
  );
}

export default ProductsCarousel;
