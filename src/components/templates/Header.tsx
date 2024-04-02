import React from "react";

import NavBarContact from "./NavBarContact";
import Presentation from "./Presentation";

function Header() {

  return (
    <header className="app-header">
      <div className="">
        <NavBarContact/>
      </div>
      <section className='text-center my-5 ' >
        <h1>En cours de développement ...</h1>
      </section>
      <div className="my-5">
        <Presentation/>
      </div>
      <div className="">
        {/* <NavBarLayout/> */}
      </div>
    </header>
    
  );
}

export default Header;
