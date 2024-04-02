import React from "react";

import NavBarContact from "./NavBarContact";
import Presentation from "./Presentation";

function Header() {

  return (
    <header className="app-header">
      <div className="">
        <NavBarContact/>
      </div>
      <div className="">
        <Presentation/>
      </div>
      <div className="">
        {/* <NavBarLayout/> */}
      </div>
    </header>
    
  );
}

export default Header;
