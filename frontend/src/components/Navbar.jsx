import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/dashboard">SIMBA</Link>
        <div>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/items">Data Barang</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
