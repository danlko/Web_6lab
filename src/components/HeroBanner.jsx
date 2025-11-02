function HeroBanner() {
  return (
    <div className="container my-5">
      <div className="p-5 text-center bg-light rounded-3">
        <h1 className="display-4 fw-bold">Ласкаво просимо до магазину!</h1>
        <p className="fs-5 text-muted">Найкращі [товари] тут.</p>
        <button className="btn btn-primary btn-lg" type="button">До каталогу</button>
      </div>
    </div>
  );
}

export default HeroBanner;