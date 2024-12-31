import React from "react";

type ButtonProps = {
  label: string; // Button text
  icon?: React.ReactNode; // Optional icon
  onClick?: () => void; // Click handler
  className?: string; // Additional styles
  disabled?: boolean;
  green?: boolean; // Disable state
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
      className={`flex items-center justify-center gap-2 px-2 py-1 rounded mx-1 transition-all ${
        disabled
          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
          : !green
          ? "bg-[#5959594D] text-[#D5D5D5] border border-white"
          : "bg-[#282E16] border border-[#C9FF3B] text-[#C9FF3B]"
      } ${className}`}
    >
      {icon && <img src={icon} alt="Home" className="h-3" />}
      <span>{label}</span>
    </button>
  );
};

export default Button;
