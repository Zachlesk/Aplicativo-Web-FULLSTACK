import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/MyFooter.css'
import React from 'react';

function Footer() {
  return (
    <footer className="footer fixed-bottom bg-light text-center">
      <div className="container">
        <div className="emoji">
          <p>
            <a href="https://www.instagram.com/zachleskt" className="text-white me-2 custom-icon" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram fa-2x"></i>
            </a>
            <a href="https://github.com/Zachlesk" className="text-white me-2 custom-icon" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/zharick-rojas-ardila/" className="text-white me-2 custom-icon" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin fa-2x"></i>
            </a>
            </p>
            <div className="position-relative">
            <a href='https://maps.app.goo.gl/eDAAc7aeDD9BX2ZX8' target="_blank" rel="noopener noreferrer">
            <button className="btn btn-light btn-round btn-location">
             
            <i className="fa fa-map-marker"></i>
          </button>
          </a>
        </div>

        
        </div>
        
      </div>
    </footer>
  );
}

export default Footer; 
