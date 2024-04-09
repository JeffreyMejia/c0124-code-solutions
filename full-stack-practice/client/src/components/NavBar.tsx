import { Link, Outlet } from 'react-router-dom';
import './NavBar.css';

export function NavBar() {
  return (
    <div className="container">
      <div className="row">
        <div className="column-full">
          <div className="nav-bar">
            <Link to="/about">
              <h1 className="about-anchor">About</h1>
            </Link>
            <Link to={'/'}>
              <h1 className="catalog-anchor">Catalog</h1>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
