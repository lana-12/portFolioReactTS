import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhp, faSymfony, faHtml5, faReact, faCss3, faSquareJs, faSass, faLinux, faWindows, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCogs, faSpider} from "@fortawesome/free-solid-svg-icons";

function Stack() {


    return (
        <div className="container-lg">
        <div className="row">
            <div className="col boxStack ">
                    
                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon title="PHP" icon={faPhp}  />
                </div>
                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon title="Python" icon={faPython}  />
                </div>
                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon title="Java" icon={faJava}  />
                </div>

                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon title="Html5" icon={faHtml5}  />
                </div>

                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon title="Css3" icon={faCss3}  />
                </div>

                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon title="JavaScript" icon={faSquareJs}  />
                </div>

                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon title="Symfony" icon={faSymfony}  />
                </div>

                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon title="React" icon={faReact}  />
                </div>

                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon title="Sass" icon={faSass}  />
                </div>

                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon title="SQL | NoSQL" icon={faDatabase}  />
                </div> 

                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon title="Gestion de flux de données" icon={faCogs}  />
                </div> 

                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon title="ApiPlatform" icon={faSpider}  />
                </div> 

                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon title="Linux" icon={faLinux}  />
                </div>    

                <div className="stackIcon col-6 col-lg-3">
                    <FontAwesomeIcon title="Windows" icon={faWindows}  />
                </div>    
            </div>
        </div>
        </div>

    );
}

export default Stack;
