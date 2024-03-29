import React from "react";
import { Link } from "react-router-dom";


function Footer() {
    return (

      <footer className="container-fluid app-footer">
        {/* Mention + Copyright Footer */}
          <div className="row">
            <div className="col ">
              <div className="mentionCopyrightFooter">

              {/* Mention  */}
                {/* <div className="mentionFooter text-center col-md-6 ">
                  <h4 className="text-decoration-underline">Mention Légal</h4>
                  <div className="mention ">
                    <p>
                      <Link className="linkMentionHeader me-5" to="/rgpd" title="Lien vers RGPD">RGPD</Link>
                    </p>
                    <p>
                      <Link className="linkMentionHeader" to="/cgu" title="Lien vers CGU">CGU</Link>
                    </p>
                  </div>
                </div> */}

              {/* Copyright Footer */}
                <div className="copyrightFooter ">
                  {/* <img src={ logo } alt="Logo Vivi" className="logoHeader img-fluid"/> */}
                  <p className=" textCopyrightHeader" ><i className="bi bi-c-circle"></i> 2024 | Vivi
                  </p>         
                </div>
                
              </div>
            </div>
          </div>
        
      </footer>
    );

}
export default Footer;