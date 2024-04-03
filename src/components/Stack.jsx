import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhp, faSymfony, faHtml5, faReact, faCss3, faSquareJs, faSass } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

function Stack() {


    return (
        <div className="row">
            <div className="col ">
                <div className=" " >
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

    );
}

export default Stack;
