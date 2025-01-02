import React from "react";

type ButtonProps = {
  label: string; // Button text
  icon?: any; // Optional icon
  onClick?: () => void; // Click handler
  className?: string; // Additional styles
  disabled?: boolean;
  green?: boolean; // Special green style
};

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  onClick,
  className = "",
  disabled = false,
  green,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center gap-2 px-3 py-2 rounded mx-1 transition-all duration-300 ${
        disabled
          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
          : green
          ? "bg-[#282E16] border border-[#C9FF3B] text-[#C9FF3B] hover:bg-[#3C4B1E] hover:text-[#E3FF89]"
          : "bg-[#5959594D] text-[#D5D5D5] border border-white hover:bg-[#787878] hover:text-white"
      } ${className}`}
    >
      {icon && <img src={icon} alt="Icon" className="h-4 w-4" />}
      <span>{label}</span>
    </button>
  );
};

export default Button;
