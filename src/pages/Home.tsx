import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsCarousel from '../Components/carousel/ProductsCarousel';
import TopCarousel from '../Components/carousel/Carousel';

export const Home = () =>{

  return (
    <div>
      <TopCarousel/>
      <ProductsCarousel/>
    </div>
  );
}

export default Home;
