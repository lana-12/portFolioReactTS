import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhp, faSymfony, faHtml5, faReact, faCss3, faSquareJs, faSass, faLinux, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCogs, faSpider} from "@fortawesome/free-solid-svg-icons";

function Stack() {


    return (
        <div className="container-lg">
        <div className="row">
            <div className="col boxStack ">
                    
                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon icon={faPhp}  />
                </div>

                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon icon={faHtml5}  />
                </div>

                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon icon={faCss3}  />
                </div>

                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon icon={faSquareJs}  />
                </div>

                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon icon={faSymfony}  />
                </div>

                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon icon={faReact}  />
                </div>

                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon icon={faSass}  />
                </div>

                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon icon={faDatabase}  />
                </div> 

                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon icon={faCogs}  />
                </div> 

                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon icon={faSpider}  />
                </div> 

                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon icon={faLinux}  />
                </div>    

                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon icon={faWindows}  />
                </div>    
            </div>
        </div>
        </div>

    );
}

export default Stack;
