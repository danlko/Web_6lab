import HeroBanner from './HeroBanner';
import ProductCard from './ProductCard'; 

import campImg from '../assets/campus.jpg'; 
import conImg from '../assets/converse.jpg';
import tigerImg from '../assets/tiger.jpg';

function Home() {
  return (
    <main>
      <HeroBanner />
      
      <div className="container my-5">
        <h2 className="text-center mb-4">Рекомендовані товари</h2>
        
        <div className="row">
          <ProductCard 
            name="Adidas Campus" 
            price="150" 
            imageUrl= {campImg}
            color="Grey"
            size="43"
          />

          <ProductCard 
            name="Converse Chuck 70" 
            price="100" 
            imageUrl={conImg}
            color="Black"
            size="42"
          />

          <ProductCard 
            name="Asics Tiger" 
            price="120" 
            imageUrl={tigerImg}
            color="Black"
            size="46"
          />
        </div>
      </div>
    </main>
  );
}

export default Home;