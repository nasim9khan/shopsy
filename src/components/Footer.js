import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Shopsy</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">About Us</a></li>
              <li><a href="#" className="text-white">Careers</a></li>
              <li><a href="#" className="text-white">Press</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Contact Us</a></li>
              <li><a href="#" className="text-white">Returns</a></li>
              <li><a href="#" className="text-white">Order Tracking</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <a href="#" className="text-white mr-2"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white mr-2"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white mr-2"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 Shopsy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
