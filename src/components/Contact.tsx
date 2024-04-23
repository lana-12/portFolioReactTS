import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
      <>
      <h4 className="text-center">Contact</h4>
      
        <div className="row">
            <div className="col app-contact">
                

                {/* Email et Téléphone */}
                <div className="contactEmailTel">
                    <address className='pb-3'>
                        <a className="linkContactHeader" href="mailto:giacomettivirginie@gmail.com" title="giacomettivirginie@gmail.com">
                            <i className="iconEmail bi bi-envelope pe-3 "></i>
                        </a>
                    </address>
                    <address>
                        <a className="linkContactHeader" href="tel:0618568698" title="0618568698">
                            <i className="iconTel bi bi-telephone pe-3"></i>
                        </a>
                    </address>
                </div>

                {/* GitHub et Linkedin */}
                <div className="contactGitLin">
                    <Link className="linkContactHeader" target="_blank" to="https://github.com/lana-12" title="GitHub">
                        <i className="iconGitHub bi bi-github"></i>
                    </Link>
                    <Link className="linkContactHeader " target="_blank" to="https://www.linkedin.com/in/virginie-giacometti-a88a01220/" title="LinkedIn">
                        <i className="iconLinkedin bi bi-linkedin "></i>
                    </Link>
                </div>
            </div>
        </div>
      </>
    );
}

export default Contact;
