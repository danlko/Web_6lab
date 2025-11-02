import Navigation from './Navigation';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">E-Shop</a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <Navigation /> {/* Наш компонент з посиланнями */}
            
            {/* Іконка кошика (справа) */}
            <div className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                🛒 Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
              </button>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;