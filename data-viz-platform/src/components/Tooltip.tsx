import React, { useState } from "react";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  position?: "top" | "right" | "bottom" | "left";
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  position = "top",
}) => {
  const [show, setShow] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div
          role="tooltip"
          className={`
            absolute z-50 px-2 py-1 text-sm
            bg-[#222324] text-white rounded-md
            whitespace-nowrap pointer-events-none
            ${positionClasses[position]}
          `}
        >
          {text}
          <div
            className={`
              absolute w-2 h-2 bg-[#222324] rotate-45
              ${
                position === "top"
                  ? "bottom-[-4px] left-1/2 -translate-x-1/2"
                  : ""
              }
              ${
                position === "right"
                  ? "left-[-4px] top-1/2 -translate-y-1/2"
                  : ""
              }
              ${
                position === "bottom"
                  ? "top-[-4px] left-1/2 -translate-x-1/2"
                  : ""
              }
              ${
                position === "left"
                  ? "right-[-4px] top-1/2 -translate-y-1/2"
                  : ""
              }
            `}
          />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
