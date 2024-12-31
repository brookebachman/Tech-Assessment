import React from "react";
type SlideOverProps = {
  show: boolean;
};
export const SlideOver: React.FC<SlideOverProps> = ({ show }) => {
  return (
    <div
      className={`bg-blue-950 border border-b-black h-full w-[500px] absolute
      z-40 transition-all`}
      style={{
        right: show ? 0 : -520,
      }}
    >
      hello world
    </div>
  );
};
