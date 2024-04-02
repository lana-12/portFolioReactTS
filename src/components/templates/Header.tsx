import React from "react";
import NavBarContact from "./NavBarContact";
import NavBarLayout from "./NavBarLayout";

function Header() {
  

  return (
    <header className="app-header">
      <div className="">
        <NavBarContact/>
      </div>
      <div className="">
        <NavBarLayout/>
      </div>
    </header>
    
  );
}

export default Header;
