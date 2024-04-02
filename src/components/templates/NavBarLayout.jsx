import React from "react";
import { Link } from "react-router-dom";

function NavBarLayout(props) {


    return (
        <nav className="">
            <div className="row">
                <div className="col d-flex justify-content-around">
                    <div className="">
                        <Link className="link-header" to="/project"            title="Projets" style={{ color: 'black'}}>
                            <h2>Projets</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBarLayout;
