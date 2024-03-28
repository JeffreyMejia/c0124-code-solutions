import { Link, Outlet } from 'react-router-dom';
import './AppDrawer.css';
import { FaBars } from 'react-icons/fa6';
import { useState } from 'react';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};
export function AppDrawer({ menuItems }: Props) {
  const [open, setOpen] = useState(true);

  let text;
  if (open === false) {
    text = 'is-open';
  } else {
    text = '';
  }

  function handleOpen() {
    open === true ? setOpen(false) : setOpen(true);
  }

  return (
    <div className="d-flex vw-100 nav">
      <nav className={`shadow-sm app-drawer ${text}`}>
        <div className="navbar-collapse drawer">
          <FaBars onClick={handleOpen} className="bars"></FaBars>
          {open === false && <h3 className="header">Hylian Shopping</h3>}
          <ul className="navbar-nav mr-auto">
            {menuItems.map((menu) => (
              <li key={menu.name} className="nav-item nav-link">
                <Link to={menu.path} className="title">
                  <img className="icon" src={menu.iconUrl} />
                  {open === false && menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="flex-grow-1">
        <Outlet />
      </div>
    </div>
  );
}
