import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="bg-black fixed w-full z-20 top-0 left-0 overflow-hidden border-b border-gray-200 dark:border-gray-600">
        <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8 text-white text-xl">
          <a href="/"  className="logo">
        My Portfolio
          </a>

          <input type="checkbox" id="check" />

          <div className="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]: font-semibold [&>li>a]:text-lg">
            <a
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white  text-lg  font-semibold m-2 mr-5"
            >
              Home
            </a>
        
              <a
                href="/about"
                className="block mt-4 lg:inline-block lg:mt-0 text-white  text-lg  font-semibold m-2 mr-5"
              >
                About
                </a>
       
              <a
                href="/project"
                className="block mt-4 lg:inline-block lg:mt-0 text-white  text-lg  font-semibold m-2 mr-5"
              >
               Project
              </a>
    
             
              <a
                href="/contact"
                className="block mt-4 lg:inline-block lg:mt-0 text-white  text-lg  font-semibold m-2"
              >
               <button type="submit" className="bg-white text-black px-2 py-1 rounded-lg">Hire Us</button>
              </a>
            

            <label htmlFor="check" className="close-menu">
              X
            </label>
          </div>

          <label htmlFor="check" className="open-menu" onClick={toggleNavbar}>
            <FontAwesomeIcon icon={faBars} className="icons" />
          </label>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
