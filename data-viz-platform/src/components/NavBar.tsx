import { useState } from "react";
import { Link } from "react-router-dom";
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
    <nav className="bg-[#161618] p-4 h-screen flex space-between items-start flex-col left-4 top-4 bottom-0 fixed w-20">
      <div className="max-w-7xl">
        {/* Menu Icon */}
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <img src={menuIcon} alt="Menu" className="h-6 w-6" />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-col h-screen">
          <div className="flex flex-col h-full space-y-10">
            <Link
              to="/dashboard"
              className="mt-10 text-white hover:text-blue-200"
            >
              <img src={homeIcon} alt="Home" className="h-6 w-6" />
            </Link>
            <Link
              to="/notifications"
              className="text-white hover:text-blue-200"
            >
              <img src={bellIcon} alt="Notifications" className="h-6 w-6" />
            </Link>
            <Link to="/tasks" className="text-white hover:text-blue-200">
              <img src={clipboardIcon} alt="Clipboard" className="h-6 w-6" />
            </Link>
            <Link to="/uploads" className="text-white hover:text-blue-200">
              <img src={cloudIcon} alt="Cloud Upload" className="h-6 w-6" />
            </Link>
            <Link to="/settings" className="text-white hover:text-blue-200">
              <img src={cogIcon} alt="Settings" className="h-6 w-6" />
            </Link>
          </div>

          {/* Profile at the bottom */}
          <div className="text-white fixed bottom-10">
            <Link to="/profile">
              <img src={accountIcon} alt="Account" className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-600 text-white p-4">
            <Link
              to="/"
              className="block py-2 hover:bg-blue-500"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/notifications"
              className="block py-2 hover:bg-blue-500"
              onClick={toggleMenu}
            >
              Notifications
            </Link>
            <Link
              to="/tasks"
              className="block py-2 hover:bg-blue-500"
              onClick={toggleMenu}
            >
              Tasks
            </Link>
            <Link
              to="/uploads"
              className="block py-2 hover:bg-blue-500"
              onClick={toggleMenu}
            >
              Uploads
            </Link>
            <Link
              to="/settings"
              className="block py-2 hover:bg-blue-500"
              onClick={toggleMenu}
            >
              Settings
            </Link>
            <Link
              to="/profile"
              className="block py-2 hover:bg-blue-500"
              onClick={toggleMenu}
            >
              Profile
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
