import React from "react";

import NavBarContact from "./NavBarContact";
import Presentation from "../Presentation";

function Header() {

  return (
    <header className="app-header">
      <div className="navBarContact">
        <NavBarContact/>
      </div>
      {/* <section className='text-center my-5 ' >
        <h1>En cours de développement ...</h1>
      </section> */}
      <div className="my-5 presentation">
        <Presentation/>
      </div>
    </header>
    
  );
}

export default Header;
