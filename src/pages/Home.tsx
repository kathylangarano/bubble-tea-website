import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsCarousel from '../Components/carousel/ProductsCarousel';
import TopCarousel from '../Components/carousel/Carousel';
import OfferSection from '../Components/OfferSection';
import BubbleTeaLovers from '../Components/BubbleTeaLovers';
const Home = () =>{

  return (
    <div>
      <TopCarousel/>
      <OfferSection/>
      <ProductsCarousel/>
      <BubbleTeaLovers/>
    </div>
  );
}

export default Home;
