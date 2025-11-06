function ProductCard({ name, price, imageUrl, color, size }) {
  return (
    <div className="card h-100 text-center shadow-sm">
      <img
        src={imageUrl}
        className="card-img-top"
        alt={name}
        style={{ objectFit: 'cover', height: '250px' }}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">{name}</h5>
        <p className="card-text mb-1">Color: {color}</p>
        <p className="card-text mb-1">Size: {size}</p>
        <p className="fw-semibold mt-2">${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
