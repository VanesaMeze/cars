import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-3">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li className="nav-item">
              <Link className="nav-link active" to={`/`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={`/cars`}>
                Cars
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={`/addCar`}>
                Add car
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
