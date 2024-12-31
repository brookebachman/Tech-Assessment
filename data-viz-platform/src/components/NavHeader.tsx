import { useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../assets/menu.png";

const NavHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here, e.g., navigate to a search results page or filter data
    console.log("Search query:", searchQuery);
  };

  return (
    <div className="bg-[#161618] p-4 flex justify-between items-center left-20 top-0 fixed h-20 w-full z-10">
      {/* Left Side: Menu Icon and Links */}
      <div className="flex space-x-10">
        <Link
          to="/charging-stations"
          className="text-white hover:text-blue-200"
        >
          Charging Stations
        </Link>
        <Link to="/foot-sizing" className="text-white hover:text-blue-200">
          Foot Sizing
        </Link>
        <Link to="/parking" className="text-white hover:text-blue-200">
          Parking
        </Link>
      </div>

      {/* Right Side: Search Bar */}
      <div className="text-white">
        <form onSubmit={handleSearchSubmit} className="flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="p-2 rounded bg-[#262626] text-white border border-[#525252] focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="ml-2 p-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default NavHeader;
