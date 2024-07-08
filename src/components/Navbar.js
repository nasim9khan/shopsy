import React from 'react';
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { BsFillBagHeartFill } from "react-icons/bs";
import { useCart } from '../components/CartContext';

function Navbar({  searchQuery, setSearchQuery }) {
  const { cartCount } = useCart();
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ">
          <h2>Shopsy</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-3 mb-lg-0 ">
              <li className="nav-item ms-lg-3">
                <Link className="nav-link" to="/" > Home</Link>
              </li>
              <li className="nav-item ms-lg-3">
                <Link className="nav-link" to="/about" >Account</Link>
              </li>
              <li className="nav-item ms-lg-3">
              <Link className="nav-link" to="/login" >Login</Link>
              </li>
              <li className="nav-item dropdown ms-lg-3">
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item">Orders</a></li>
                  <li><a className="dropdown-item" >Transaction</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" >Contact-us</a></li>
                </ul>
              </li>
              <li className="nav-item ms-lg-3">
              <Link className="nav-link " to="/cart">
                <div className='ms-6'><BsFillBagHeartFill className='cart-logo'/><span className="top- start-80 translate-middle badge rounded-pill bg-danger cart-badge">{cartCount}</span></div>
              </Link></li>
            </ul>
            <form id='searchbar' className="d-flex ms-lg-5 mx-3" role="search">
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="btn btn-outline-secondary btn btn-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
