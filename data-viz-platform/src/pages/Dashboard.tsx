import MyLineChart from "../components/LineChart";
import lightningIcon from "../assets/lightning-bolt.png";
import sparkleIcon from "../assets/sparkle.png";
import plusIcon from "../assets/plus.png";
import ellipsesIcon from "../assets/ellipses.png";
import reverseIcon from "../assets/reverse.png";
import infoIcon from "../assets/info.png";
import downloadIcon from "../assets/download.png";
import chevronDownIcon from "../assets/chevron-down.png";
import { useState } from "react";

export const Dashboard = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="w-full p-4">
      <div id="Header-section" className="flex p-4 justify-between">
        <div className="flex">
          <img src={lightningIcon} alt="Home" className="h-7 w-7" />{" "}
          <h2 className="text-xl font-bold mb-4">Charging Station</h2>
        </div>
        <div className="flex items-center">
          <div className="bg-[#222324] rounded p-2 mx-2">
            <img src={reverseIcon} alt="Home" className="h-4" />
          </div>
          <div className="border border-[#222324] bg-[#222324] rounded px-2 py-1">
            Edit Variables
          </div>
          <div className="bg-[#222324] rounded p-2 mx-2">
            <img src={downloadIcon} alt="Home" className="h-4 w-4" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex p-4">
          <img src={sparkleIcon} alt="Home" className="h-4 w-4" />
          <h3 className="ml-2 text-lg text-[#DAFD7F] font-bold">
            Best Scenario Results
          </h3>
        </div>
        <div
          className="border border-[#C8E972] rounded-full flex px-2 py-1 mr-5"
          onClick={() => setExpand(!expand)}
        >
          {!expand ? (
            <img
              src={chevronDownIcon}
              alt="Home"
              className="h-4 w-4 rotate-180"
            />
          ) : (
            <img src={chevronDownIcon} alt="Home" className="h-4 w-4 " />
          )}
        </div>
      </div>
      {expand && (
        <div className="p-4">
          <div className="border border-[#B3E237] p-2 mb-2 rounded flex items-center justify-between">
            <div className="text-[#C9FF3B] text-base">
              The best found configuration based on profit is characterized by
              11 zones (max) with charging stations and 48 total number of
              poles.
            </div>
            <div>
              <img src={ellipsesIcon} alt="ellipses menu" className="h-4 w-4" />
            </div>
          </div>
          <div>
            <div className="border border-[#B3E237] p-2 rounded flex items-center justify-between">
              <div className="text-[#C9FF3B] text-base">
                The best found configuration based on satisfied demand is
                characterized by 11 zones (max) with charging stations and 48
                total number of poles.
              </div>
              <div>
                <img
                  src={ellipsesIcon}
                  alt="ellipses menu"
                  className="h-4 w-4"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-stretch">
        <div>
          <h2 className="align-left flex p-4 text-lg">Graphs</h2>
          <div className="border border-[#222324] bg-[#222324] rounded w-fit p-4">
            <MyLineChart />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h2 className="align-right flex p-4 text-lg">
              Key Performance Indicators
            </h2>
            <div className="flex items-center border border-[#5A5A5AA1] rounded p-1">
              <div>Variables</div>
              <img src={plusIcon} alt="plus icon" className="h-6 w-6" />
            </div>
          </div>
          <div className="flex mx-2">
            <div className="border border-[#222324] bg-[#222324] rounded w-3/6 p-10 m-2 text-left">
              <div className="flex items-center justify-between mb-2">
                <div>Infrastructure units</div>
                <img src={infoIcon} alt="info icon" className="h-3 w-3" />
              </div>
              <div className="text-[#BBBBBB] text-xs">
                This describes variable two and what the shown data means.
              </div>
              <div className="text-2xl font-bold text-right mt-4">€421.07 </div>
            </div>
            <div className="border border-[#222324] bg-[#222324] rounded w-3/6 p-10 m-2 text-left">
              <div className="flex items-center justify-between mb-2">
                <div>Changing growth</div>
                <img src={infoIcon} alt="info icon" className="h-3 w-3" />
              </div>
              <div className="text-[#BBBBBB] text-xs">
                This describes variable two and what the shown data means.
              </div>
              <div className="text-2xl font-bold text-right mt-4">33.07 </div>
            </div>
          </div>
          <div className="flex mx-2">
            <div className="border border-[#222324] bg-[#222324] rounded w-3/6 p-10 m-2 text-left">
              <div className="flex items-center justify-between mb-2">
                <div>Localization change</div>
                <img src={infoIcon} alt="info icon" className="h-3 w-3" />
              </div>
              <div className="text-[#BBBBBB] text-xs">
                This describes variable two and what the shown data means.
              </div>
              <div className="text-2xl font-bold text-right mt-4">21.9%</div>
            </div>
            <div className="border border-[#222324] bg-[#222324] rounded w-3/6 p-10 m-2 text-left">
              <div className="flex items-center justify-between mb-2">
                <div>Fleet growth</div>
                <img src={infoIcon} alt="info icon" className="h-3 w-3" />
              </div>
              <div className="text-[#BBBBBB] text-xs">
                This describes variable two and what the shown data means.
              </div>
              <div className="text-2xl font-bold text-right mt-4">7.03%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
