import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsCarousel from '../components/carousel/ProductsCarousel';
import TopCarousel from '../components/carousel/Carousel';

const Home = () =>{

  return (
    <div>
      <TopCarousel/>
      <ProductsCarousel/>
    </div>
  );
}

export default Home;
