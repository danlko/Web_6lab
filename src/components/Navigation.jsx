function Navigation() {
  return (
    <ul className="navbar-nav gap-4">
      <li className="nav-item">
        <a className="nav-link active fw-semibold px-3 rounded-pill bg-dark text-white" href="#">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark fw-semibold" href="#">
          Catalog
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark fw-semibold" href="#">
          Cart
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
