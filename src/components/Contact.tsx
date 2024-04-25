import React from 'react';
import { Link } from 'react-router-dom';
import DownloadCV from './templates/DownloadCv';
import Config from './configs/Config';

const Contact = () => {
    return (
      <>
      <h4 className="text-center">Contact</h4>
      
        <div className="row">
            <div className="col app-contact">
                

                {/* Email - Téléphone - CV */}
                <div className="contactEmailTel">
                    <address className='pb-3'>
                        <a className="linkContactHeader" href={`mailto:${Config.EMAIL_URL}`} title="giacomettivirginie@gmail.com">
                            <i className="iconEmail bi bi-envelope pe-3 "></i>
                        </a>
                    </address>
                    <address className='pb-3'>
                        <a className="linkContactHeader" href={`tel:${Config.PHONE_URL}`}  title="0618568698">
                            <i className="iconTel bi bi-telephone pe-3"></i>
                        </a>
                    </address>
                    
                </div>
                    
                    <DownloadCV className="linkContactHeader"/>

                {/* GitHub et Linkedin */}
                <div className="contactGitLin">
                    <Link className="linkContactHeader" target="_blank" to={Config.GITHUB_URL} title="GitHub">
                        <i className="iconGitHub bi bi-github"></i>
                    </Link>
                    <Link className="linkContactHeader " target="_blank" to={Config.LINKEDIN_URL} title="LinkedIn">
                        <i className="iconLinkedin bi bi-linkedin "></i>
                    </Link>
                </div>
            </div>
        </div>
      </>
    );
}

export default Contact;
