import React from "react";
import { Link } from "react-router-dom";

function Header() {

  return (
    <header className="app-header">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <h1>
            <Link className="navbar-brand mt-2 " to="/home" title="Accueil">
              VirginieGiacometti
            </Link>
          </h1>
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mt-2"
            id="navbarSupportedContent"
          >
            
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center ">
              <li className="nav-item ">
                <Link className="link-header " to="/home" title="Accueil">
                  <i className="iconHouse bi bi-house-door-fill "></i>
                  <p>Accueil</p>
                </Link>
              
              </li>
              <li className="nav-item">
                <Link className="link-header" to="/project" title="Profil">
                  <i className="iconUser bi bi-person-fill"></i>
                  <p>Projet</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    
  );
}

export default Header;
