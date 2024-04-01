import React from "react";
import { Link } from "react-router-dom";

function NavBarContact() {


    return (
            <nav className="navbar navbar-expand-md navbar-dark">
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
                        id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center ">

                            <li className="nav-item ">
                                <Link className="link-header " to="mailto:giacomettivirginie@gmail.com" title="Cliquer contacter moi" style={{ color: 'white' }}>
                                    <i className=" iconEmail bi bi-envelope"></i>
                                </Link>
                            </li>

                            <li className="nav-item ">
                                <Link className="link-header " to="tel:0618568698" title="Cliquer contacter moi" style={{ color: 'white' }}>
                                    <i className="iconTel bi bi-telephone-fill"></i>
                                </Link>
                            </li>

                            <li className="nav-item ">
                                <Link className="link-header " target="_blank" to="https://github.com/lana-12" title="GitHub" style={{ color: 'white' }}>
                                    <i className="iconGitHub bi bi-github"></i>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="link-header" target="_blank" to="https://www.linkedin.com/in/virginie-giacometti-a88a01220/" title="Linkedin" style={{ color: 'white' }}>
                                    <i className="iconLinkedin bi bi-linkedin"></i>
                                </Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
    );
}

export default NavBarContact;
