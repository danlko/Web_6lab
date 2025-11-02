function ProductCard({ name, price, imageUrl, color, size }) {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={imageUrl}
          className="card-img-top"
          alt={name}
          style={{ height: '280px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column"> 
          
          <h5 className="card-title">{name}</h5>
          
          <div className="card-text">
            <p className="mb-1"><strong>Колір:</strong> {color}</p>
            <p className="mb-2"><strong>Доступні розміри:</strong> {size}</p>
            <p className="fs-4 fw-bold text-success">${price}</p> 
          </div>
          
          <a href="#" className="btn btn-primary mt-auto">
            Детальніше
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;