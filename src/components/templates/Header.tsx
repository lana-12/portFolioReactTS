import React from "react";
import { Link } from "react-router-dom";

function Header() {
  

  return (
    <header className="app-header">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <h1>
            <Link className="navbar-brand mt-2 " to="/" title="Accueil">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item ">
                <Link className="link-header "  to="/" title="Accueil">
                  <i className="iconHouse bi bi-house-door-fill "></i>
                  <p>Accueil - Moi</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="link-header" to="/project"  title="Projets">
                  <i className="iconUser bi bi-person-fill"></i>
                  <p>Projets</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="link-header" to="/contact" title="Contact" 
                  style={{ color: 'white' }}
                  // activestyle={{ color: 'red' }}
                >
                  <i className="iconUser bi bi-person-fill"></i>
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
            

            {/* Lien reseaux Sociaux */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center ">

              <li className="nav-item ">
                <Link className="link-header " target="_blank" to="https://github.com/lana-12" title="GitHub" 
                >
                  <i className="iconGitHub bi bi-github"></i>
                  <p>GitHub</p>
                </Link>              
              </li>

              <li className="nav-item">
                <Link className="link-header" target="_blank" to="https://www.linkedin.com/in/virginie-giacometti-a88a01220/" title="Linkedin">
                  <i className="iconLinkedin bi bi-linkedin"></i>
                  <p>Linkedin</p>
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
