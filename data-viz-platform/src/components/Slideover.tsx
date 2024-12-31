import React, { useState } from "react";
import xIcon from "../assets/x-icon.png";
import Chip from "./chip";
import chevronDownIcon from "../assets/chevron-down.png";
import sparkleIcon from "../assets/sparkle.png";
import greenReverseIcon from "../assets/green_reverse.png";
import magnifyingGlassIcon from "../assets/magnifying_glass.png";
import infoIcon from "../assets/info.png";
import Button from "./Button";

type SlideOverProps = {
  setShowSlider: (value: boolean) => void;
  show: boolean;
};
export const SlideOver: React.FC<SlideOverProps> = ({
  show,
  setShowSlider,
}) => {
  const [showExtra, setShowExtra] = useState(false);
  return (
    <div
      className={`bg-[#0E0D0D] border border-b-black h-full w-[691px] top-0 absolute p-4
      z-40 transition-all`}
      style={{
        right: show ? 0 : -700,
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl ">Edit Variables</h1>
        <img
          src={xIcon}
          alt="Home"
          className="h-4"
          onClick={() => setShowSlider(false)}
        />
      </div>
      <div className="flex items-center">
        <div className="border border-[#5A5A5A] bg-[#161618] rounded flex items-center p-1 w-3/4 mr-3">
          <img src={magnifyingGlassIcon} className="mr-2" /> Carbo
        </div>
        <Button label="Autofill" icon={sparkleIcon} />
        <Button label="Rerun" icon={greenReverseIcon} green />
      </div>
      <div className="bg-[#161618] rounded p-4 my-4 overflow-auto">
        <div>Variable category 1</div>
        <div className="flex my-4 gap-4">
          <Chip label="Carbon 1" />
          <Chip label="Co2 Distribution" />
          <Chip label="Fleet sizing" />
        </div>
        <div>Variable category 1</div>
        <div className="flex my-4 gap-4">
          <Chip label="Parking Rate" />
          <Chip label="Border Rate" />
          <Chip label="Request Rate" />
        </div>
        <div>Variable category 1</div>
        <div className="flex my-4 gap-4">
          <Chip label="Carbon 1" />
          <Chip label="Carbon 1" />
        </div>
      </div>
      {showExtra && (
        <div className="bg-[#5959594D] p-4 text-2xl my-4 rounded">
          <div className="flex items-center justify-between mb-2">
            <div>Co2 Distribution</div>
            <img src={infoIcon} alt="Home" className="h-4" />
          </div>
          <div className="text-base">
            But what truly sets Switch apart is its versatility. It can be used
            as a scooter, a bike, or even a skateboard, making it suitable for
            people of all ages. Whether you're a student, a professional, or a
            senior citizen, Switch adapts to your needs and lifestyle.
          </div>
        </div>
      )}
      <div className="bg-[#5959594D] p-4 text-2xl text-[#C8E972] my-4 rounded flex justify-between">
        <div>Primary Variables</div>
        <div className="border border-[#C8E972] rounded-full flex px-2 py-1 mr-5">
          <img
            src={chevronDownIcon}
            alt="down chevron"
            className="h-6 rotate-180"
          />
        </div>
      </div>
      <div className="bg-[#5959594D] p-4 text-2xl text-[#C8E972] my-4 rounded flex justify-between">
        <div>Secondary Variables</div>
        <div className="border border-[#C8E972] rounded-full flex px-2 py-1 mr-5">
          <img
            src={chevronDownIcon}
            alt="down chevron"
            className="h-6 rotate-180"
          />
        </div>
      </div>
    </div>
  );
};
