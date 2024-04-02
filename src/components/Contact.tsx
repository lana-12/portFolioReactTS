import React from 'react';
import { Link } from 'react-router-dom';


const Contact = () => {
    return (
         <>
        {/* ContactFooter */}
          <div className="row">
            <div className="col app-footer">

                <h4 className="text-center my-3">Contact</h4>

                
              <div className="d-md-flex">
                <address className=''>
                <a className="linkContactHeader" href="mailto:giacomettivirginie@gmail.com" title="Cliquer contacter moi" ><i className=" iconEmail bi bi-envelope"></i>giacomettivirginie@gmail.com</a>
                </address>

                <address>
                  <a className="linkContactHeader" href="tel:0618568698" title="Cliquer contacter moi" ><i className="iconTel bi bi-telephone-fill"></i>0618568698</a>
                </address>
              </div>

              
                <Link className=" " target="_blank"   to="https://github.com/lana-12" title="GitHub" style={{ color: 'white' }}>
                  <i className="iconGitHub bi bi-github"></i>
                </Link>

                <Link className="" target="_blank" to="https://www.linkedin.com/in/virginie-giacometti-a88a01220/" title="Linkedin" style={{ color: 'white' }}>
                  <i className="iconLinkedin bi bi-linkedin"></i>
                </Link>
                
             



            </div>
          </div>

        </>
    );
}

export default Contact;