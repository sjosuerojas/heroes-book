import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => navigate('/auth/login', { replace: true });
  const isActiveNavLink = ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
        >
          Heroes
        </Link>

        <div className="navbar-collapse">
          <div className="navbar-nav">

            <NavLink
              className={isActiveNavLink}
              to="/marvel"
            >
              Marvel
            </NavLink>

            <NavLink
              className={isActiveNavLink}
              to="/dc"
            >
              DC
            </NavLink>
          </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <span className="nav-item nav-link text-info"> Fernando </span>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={handleLogout}
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
