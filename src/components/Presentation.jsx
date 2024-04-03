import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Presentation = () => {
    return (
        <>
        <div className="row mb-5">
            <div className="col d-flex justify-content-center ">
                <div className="textPresentation ">
                    <h2>Concepteur Développeur </h2>
                    <h3>FullStack</h3>
                </div>
            </div>
        </div>
        <div className="arrow-container">
            <FontAwesomeIcon icon={faArrowDown} className="arrow" />
        </div>
        </>
    );
}

export default Presentation;