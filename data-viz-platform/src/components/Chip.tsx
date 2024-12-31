import React, { useState } from "react";
import sparkleIcon from "../assets/sparkle.png";
import greenSparkleIcon from "../assets/greenSparkle.png";
import plusIcon from "../assets/plus.png";
import checkMarkIcon from "../assets/checkMark.png";

type ChipProps = {
  label: string; // Text to display in the chip
  onDelete?: () => void; // Optional delete handler
  className?: string; // Optional additional styles
};

const Chip: React.FC<ChipProps> = ({ label, onDelete, className = "" }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev); // Toggle the clicked state
  };

  return (
    <div
      onClick={handleClick}
      className={`flex items-center justify-between cursor-pointer ${
        isClicked
          ? "bg-[#282E16] border border-[#C9FF3B] text-[#C9FF3B]"
          : "bg-[#222324]text-[#5959594D] border border-white"
      } rounded-full px-4 py-1 text-sm font-medium transition-colors ${className}`}
    >
      <span>{label}</span>
      <img
        src={!isClicked ? sparkleIcon : greenSparkleIcon}
        alt="Home"
        className="h-6"
      />
      <img
        src={!isClicked ? plusIcon : checkMarkIcon}
        alt="Home"
        className="h-6"
      />
      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering the chip click
            onDelete();
          }}
          className="ml-2 bg-blue-200 hover:bg-blue-300 rounded-full p-1"
          aria-label="Delete"
        ></button>
      )}
    </div>
  );
};

export default Chip;
