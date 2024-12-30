import MyLineChart from "../components/LineChart";
import lightningIcon from "../assets/lightning-bolt.png";
import sparkleIcon from "../assets/sparkle.png";
import chevronDownIcon from "../assets/chevron-down.png";
import { useState } from "react";

export const Dashboard = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="w-full">
      <div id="Header-section" className="flex p-4">
        <img src={lightningIcon} alt="Home" className="h-7 w-7" />{" "}
        <h2 className="text-xl font-bold mb-4">Charging Station</h2>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex p-4">
          <img src={sparkleIcon} alt="Home" className="h-4 w-4" />
          <h3 className="ml-2 text-lg text-[#DAFD7F] font-bold">
            Best Scenario Results
          </h3>
        </div>
        <div
          className="border border-[#C8E972] rounded-full flex px-2 py-1"
          onClick={() => setExpand(!expand)}
        >
          {!expand ? (
            <img src={chevronDownIcon} alt="Home" className="h-4 w-4" />
          ) : (
            <img
              src={chevronDownIcon}
              alt="Home"
              className="h-4 w-4 rotate-180"
            />
          )}
        </div>
      </div>

      {expand && (
        <div className="p-4">
          <div className="border border-[#B3E237] p-2 mb-2 rounded">
            The best found configuration based on profit is characterized by 11
            zones (max) with charging stations and 48 total number of poles.
          </div>
          <div className="border border-[#B3E237] p-2 rounded">
            The best found configuration based on satisfied demand is
            characterized by 11 zones (max) with charging stations and 48 total
            number of poles.
          </div>
        </div>
      )}
      <h2 className="align-left flex p-4 text-lg">Graphs</h2>
      <MyLineChart />
    </div>
  );
};
