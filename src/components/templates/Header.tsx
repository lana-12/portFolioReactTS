import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
  // Vérifier si targetId est une chaîne valide
  if (typeof targetId === "string") {
    // Supprimez le préfixe '/#' pour obtenir l'ID correct
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  };

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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item ">
                <Link className="link-header "  to="/" title="Accueil">
                  <i className="iconHouse bi bi-house-door-fill "></i>
                  <p>Accueil - Moi</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="link-header" to="#about" onClick={handleScroll} title="Projets">
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
