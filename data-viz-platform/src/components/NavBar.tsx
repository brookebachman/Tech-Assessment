import { useState } from "react";
import menuIcon from "../assets/menu.png";

import homeIcon from "../assets/home.png";
import bellIcon from "../assets/bell.png";
import clipboardIcon from "../assets/clipboard.png";
import cogIcon from "../assets/cog.png";
import accountIcon from "../assets/account-circle.png";
import cloudIcon from "../assets/cloud-upload.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-blue-[#161618] p-4 h-screen flex space-between items-start flex-col left-4 top-4 bottom-0 fixed w-20">
      <div className="max-w-7xl">
        <a href="#" className="text-white hover:text-blue-200">
          <img src={menuIcon} alt="Menu" className="h-6 w-6" />
        </a>
        {/* Logo */}

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-col h-screen">
          <div className="flex flex-col h-full space-y-10">
            <a href="#about" className="mt-10 text-white hover:text-blue-200">
              <img src={homeIcon} alt="Home" className="h-6 w-6" />
            </a>
            <a href="#services" className="text-white hover:text-blue-200">
              <img src={bellIcon} alt="Notifications" className="h-6 w-6" />
            </a>
            <a href="#contact" className="text-white hover:text-blue-200">
              <img src={clipboardIcon} alt="Clipboard" className="h-6 w-6" />
            </a>
            <a href="#contact" className="text-white hover:text-blue-200">
              <img src={cloudIcon} alt="Cloud" className="h-6 w-6" />
            </a>
            <a href="#contact" className="text-white hover:text-blue-200">
              <img src={cogIcon} alt="Cog" className="h-6 w-6" />
            </a>
          </div>

          {/* Profile at the bottom */}
          <div className="text-white fixed bottom-10">
            {" "}
            <img src={accountIcon} alt="Menu" className="h-6 w-6" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu (hidden by default) */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 text-white p-4">
          <a href="#" className="block py-2 hover:bg-blue-500">
            Home
          </a>
          <a href="#about" className="block py-2 hover:bg-blue-500">
            About
          </a>
          <a href="#services" className="block py-2 hover:bg-blue-500">
            Services
          </a>
          <a href="#contact" className="block py-2 hover:bg-blue-500">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
