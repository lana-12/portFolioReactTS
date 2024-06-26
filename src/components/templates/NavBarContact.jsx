import React from "react";
import { Link } from "react-router-dom";
import DownloadCV from "./DownloadCv";
import Config from "../configs/Config.ts"; 

function NavBarContact() {
   
    return (
            <nav className="navbar navbar-expand-md navbar-light ">
                <div className="container-fluid">
                    <h1>
                        <Link className="navbar-brand titleSite mt-2 " to="/" title="Accueil">
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

                            <li className="nav-item mb-3 me-md-5 ">
                                <Link className="link-header " to={`mailto:${Config.EMAIL_URL}`} title="Cliquer contacter moi" >
                                    <i className=" iconEmail bi bi-envelope"></i>
                                </Link>
                            </li>

                            <li className="nav-item mb-3 me-md-5">
                                <Link className="link-header "  
                                to={`tel:${Config.PHONE_URL}`}                               title="Cliquer contacter moi" >
                                    <i className="iconTel bi bi-telephone"></i>
                                </Link>
                            </li>

                            <li className="nav-item mb-3 me-md-5">
                                <Link className="link-header " target="_blank" to={Config.GITHUB_URL} title="GitHub" style={{ color: 'black' }}>
                                    <i className="iconGitHub bi bi-github"></i>
                                </Link>
                            </li>

                            <li className="nav-item  me-md-5">
                                <Link className="link-header" target="_blank" to={Config.LINKEDIN_URL}>
                                    <i className="iconLinkedin bi bi-linkedin"></i>
                                </Link>
                            </li>
                            
                            <li className="nav-item pt-4 pt-md-0 me-md-5">
                                <DownloadCV className="link-header " />
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
    );
}

export default NavBarContact;
