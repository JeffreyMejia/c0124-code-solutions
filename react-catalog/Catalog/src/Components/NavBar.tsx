import { Link, Outlet } from 'react-router-dom';
import './NavBar.css';

export function NavBar() {
  return (
    <div className="container">
      <div className="row nav-row">
        <div className="column-full">
          <div className="nav-bar">
            <Link to={'/about'}>
              <a className="about-anchor">About</a>
            </Link>
            <Link to={'/'}>
              <a className="catalog-anchor">Catalog</a>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
