import React, { useState } from 'react';
import logo from '../assets/images/logo_small.png';
import { Link } from 'react-router-dom';

// SVG Icons are small and only used here, so they can stay in this file.
const MenuIcon = (props) => (
  <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
);
const CloseIcon = (props) => (
  <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About", "Our Team", "Safety Quality", "Contact", "Privacy Policy"];

  return (
    <header className="bg-[#B0D79F] shadow-md  top-0 z-50  ">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center">
            <img src={logo} alt="Fruto Foods" className="h-30 mr-2" />
          </div>
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link, index) => (
              <Link
                key={`${link}-${index}`}
                to={link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-2 py-2 text-black text-xl font-sans font-semibold
            rounded-lg border-2 border-transparent transition-all duration-300 ease-in-out
            hover:border-black hover:shadow-4xl"
              >
                {link}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
              {isOpen ? <CloseIcon size={32} /> : <MenuIcon size={32} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-2">
              {navLinks.map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="block px-4 py-2 text-black font-semibold font-sans rounded hover:bg-green-100" onClick={() => setIsOpen(false)}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;