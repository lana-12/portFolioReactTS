import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhp, faSymfony, faHtml5, faReact, faCss3, faSquareJs, faSass } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from "@fortawesome/free-solid-svg-icons";




const Presentation = () => {
    return (
        <>
        <div className="row">
            <div className="col d-flex justify-content-center mb-5">
                <div className="text-center">
                    <Link className="link-header " id="#{props}" to="/" title="Accueil" style={{ color: 'black' }}>
                        <h2>Concepteur Développeur FullStack</h2>
                        <h3>PHP, React, Type Script</h3>
                    </Link>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col ">
                    <div className="presentationIcon" >
                    <FontAwesomeIcon icon={faPhp} size="3x" />
                    <FontAwesomeIcon icon={faHtml5} size="3x" />
                    <FontAwesomeIcon icon={faCss3} size="3x" />
                    <FontAwesomeIcon icon={faSquareJs} size="3x" />


                    <FontAwesomeIcon icon={faSymfony} size="3x" />
                    <FontAwesomeIcon icon={faReact} size="3x" />
                    <FontAwesomeIcon icon={faSass} size="3x" />
                    <FontAwesomeIcon icon={faDatabase} size="3x" />
                        
                </div>
            </div>
        </div>
        
        </>
    );
}

export default Presentation;