import HeroBanner from './HeroBanner';
import ProductCard from './ProductCard';

import campImg from '../assets/campus.jpg';
import conImg from '../assets/converse.jpg';
import tigerImg from '../assets/tiger.jpg';

function Home() {
  return (
    <main className="flex-grow-1">
      {/* Hero section */}
      <HeroBanner />

      {/* Product tiles */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-5">Recommended Products</h2>

        <div className="row justify-content-center g-4">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <ProductCard
              name="Adidas Campus"
              price="150"
              imageUrl={campImg}
              color="Grey"
              size="43"
            />
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <ProductCard
              name="Converse Chuck 70"
              price="100"
              imageUrl={conImg}
              color="Black"
              size="42"
            />
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3">
            <ProductCard
              name="Asics Tiger"
              price="120"
              imageUrl={tigerImg}
              color="Black"
              size="46"
            />
          </div>
        </div>

        {/* View more button */}
        <div className="text-center mt-5">
          <button type="button" className="btn btn-dark btn-lg">
            View more
          </button>
        </div>
      </div>
    </main>
  );
}

export default Home;
