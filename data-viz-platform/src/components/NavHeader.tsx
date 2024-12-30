import { useState } from "react";
import menuIcon from "../assets/menu.png";

const NavHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-blue-[#161618] p-4 w-full flex justify-between items-center left-0 top-0 fixed h-20 border-b-2 border-b-[#525252]">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        {/* Left Side: Menu Icon */}
        <a href="#" className="text-white hover:text-blue-200">
          <img src={menuIcon} alt="Menu" className="h-6 w-6" />
        </a>

        {/* Desktop Menu */}
        <div className="flex space-x-10">
          <a href="#about" className="text-white hover:text-blue-200">
            Charging Stations
          </a>
          <a href="#services" className="text-white hover:text-blue-200">
            Foot Sizing
          </a>
        </div>

        {/* Right Side: Search */}
        <div className="text-white">Search</div>
      </div>
    </div>
  );
};

export default NavHeader;
