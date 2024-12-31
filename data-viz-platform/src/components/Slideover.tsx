import React, { useState } from "react";
import xIcon from "../assets/x-icon.png";
import Chip from "./chip";

type SlideOverProps = {
  setShowSlider: (value: boolean) => void;
  show: boolean;
};
export const SlideOver: React.FC<SlideOverProps> = ({
  show,
  setShowSlider,
}) => {
  return (
    <div
      className={`bg-[#0E0D0D] border border-b-black h-full w-[500px] top-0 absolute p-4
      z-40 transition-all`}
      style={{
        right: show ? 0 : -520,
      }}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Edit Variables</h1>
        <img
          src={xIcon}
          alt="Home"
          className="h-4"
          onClick={() => setShowSlider(false)}
        />
      </div>
      <div className="bg-[#222324] rounded p-4">
        <div>Variable category 1</div>
        <div className="flex mt-4 gap-4">
          <Chip label="Carbon 1" />
          <Chip label="Carbon 1" />
        </div>
      </div>
    </div>
  );
};
