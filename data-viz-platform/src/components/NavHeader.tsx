import { useState } from "react";
import menuIcon from "../assets/menu.png";

const NavHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-blue-[#161618] p-4 flex justify-between items-center left-20 top-0 fixed h-20">
      <div className="flex justify-between items-center">
        {/* Left Side: Menu Icon */}

        {/* Desktop Menu */}
        <div className="flex space-x-10">
          <a href="#about" className="text-white hover:text-blue-200">
            Charging Stations
          </a>
          <a href="#services" className="text-white hover:text-blue-200">
            Foot Sizing
          </a>
          <a href="#services" className="text-white hover:text-blue-200">
            Parking
          </a>
        </div>

        {/* Right Side: Search */}
        <div className="text-white">Search</div>
      </div>
    </div>
  );
};

export default NavHeader;
