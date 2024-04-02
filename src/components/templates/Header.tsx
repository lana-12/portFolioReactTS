import React from "react";
import { useEffect, useState } from "react";

import NavBarContact from "./NavBarContact";
import NavBarLayout from "./NavBarLayout";
import Presentation from "./Presentation";

function Header() {
   const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


  return (
    <header className="app-header">
      <div className="">
        <NavBarContact/>
      </div>
      <div className="">
        <Presentation/>
      </div>
      <div className="">
        <NavBarLayout/>
      </div>
    </header>
    
  );
}

export default Header;
