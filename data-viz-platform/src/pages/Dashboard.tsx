import MyLineChart from "../components/LineChart";
import lightningIcon from "../assets/lightning-bolt.png";
import greenSparkleIcon from "../assets/greenSparkle.png";
import plusIcon from "../assets/plus.png";
import ellipsesIcon from "../assets/ellipses.png";
import reverseIcon from "../assets/reverse.png";
import infoIcon from "../assets/info.png";
import downloadIcon from "../assets/download.png";
import chevronDownIcon from "../assets/chevron-down.png";
import { useState } from "react";
import Tooltip from "../components/Tooltip";

type DashboardProps = {
  setShowSlider: (value: boolean) => void;
  show: boolean;
};

export const Dashboard: React.FC<DashboardProps> = ({
  show,
  setShowSlider,
}) => {
  const [expand, setExpand] = useState(false);

  return (
    <div
      className={`w-screen md:w-full relative md:h-[calc(100vh-120px)] ${
        show ? "blur-sm" : "none"
      }`}
    >
      <div className="p-2 md:p-3">
        <div id="Header-section" className="md:flex p-3 justify-between">
          <div className="flex">
            <img src={lightningIcon} alt="Home" className="h-7 w-7" />{" "}
            <h2 className="text-xl font-bold mb-4">Charging Station</h2>
          </div>
          <div className="flex items-center mb-2">
            <div className="bg-[#222324] rounded p-2 mx-2">
              <img src={reverseIcon} alt="Home" className="h-4" />
            </div>
            <div
              className="border border-[#222324] bg-[#222324] rounded px-2 py-1 cursor-pointer"
              onClick={() => setShowSlider(true)}
            >
              Edit Variables
            </div>
            <div className="bg-[#222324] rounded p-2 mx-2">
              <img src={downloadIcon} alt="Home" className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex p-4">
            <img src={greenSparkleIcon} alt="Home" className="h-7 w-7" />
            <h3 className="ml-2 text-lg text-[#DAFD7F] font-bold">
              Best Scenario Results
            </h3>
          </div>
          <div
            className="border border-[#C8E972] rounded-full flex px-2 py-1 mr-5 cursor-pointer"
            onClick={() => setExpand(!expand)}
          >
            {!expand ? (
              <img
                src={chevronDownIcon}
                alt="Home"
                className="h-4 w-4 rotate-180"
              />
            ) : (
              <img src={chevronDownIcon} alt="Home" className="h-4 w-4" />
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
                <img
                  src={ellipsesIcon}
                  alt="ellipses menu"
                  className="h-4 w-4"
                />
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
        <div className="md:flex block items-stretch w-full">
          <div className="md:w-7/12 overflow-x-auto">
            <h2 className="align-left flex p-4 text-lg">Graphs</h2>
            <div className="border border-[#222324] bg-[#222324] rounded md:w-11/12 p-4 md:ml-4">
              <MyLineChart />
            </div>
          </div>
          <div className="md:w-2/5">
            <div className="flex items-center justify-between">
              <h2 className="align-right flex p-4 text-lg">
                Key Performance Indicators
              </h2>
              <div className="flex items-center border border-[#5A5A5AA1] rounded p-1">
                <div>Variables</div>
                <img src={plusIcon} alt="plus icon" className="h-6 w-6" />
              </div>
            </div>
            <div className="flex md:ml-2">
              <div className="border border-[#222324] bg-[#222324] rounded w-3/6 p-3 md:p-6 mx-1 md:ml-2 text-left">
                <div className="flex items-center justify-between mb-2">
                  <div>Infrastructure units</div>
                  <Tooltip text="Infrastructure units represent the total number of charging stations installed.">
                    <img
                      src={infoIcon}
                      alt="info icon"
                      className="h-3 w-3 cursor-help"
                    />
                  </Tooltip>
                </div>
                <div className="text-[#BBBBBB] text-xs">
                  This describes variable two and what the shown data means.
                </div>
                <div className="text-2xl font-bold text-right mt-4">
                  €421.07
                </div>
              </div>
              <div className="border border-[#222324] bg-[#222324] rounded w-3/6 p-3 md:p-6 mx-1 md:ml-2 text-left">
                <div className="flex items-center justify-between mb-2">
                  <div>Changing growth</div>
                  <Tooltip
                    text="Changing growth over time blah blah."
                    position="bottom"
                  >
                    <img
                      src={infoIcon}
                      alt="info icon"
                      className="h-3 w-3 cursor-help"
                    />
                  </Tooltip>
                </div>
                <div className="text-[#BBBBBB] text-xs">
                  This describes variable two and what the shown data means.
                </div>
                <div className="text-2xl font-bold text-right mt-4">33.07</div>
              </div>
            </div>
            <div className="flex md:ml-2">
              <div className="border border-[#222324] bg-[#222324] rounded w-3/6 p-3 md:p-6 my-3 mx-1 md:ml-2 text-left">
                <div className="flex items-center justify-between mb-2">
                  <div>Localization change</div>
                  <Tooltip
                    text="Localization change represents the geographical distribution changes."
                    position="bottom"
                  >
                    <img
                      src={infoIcon}
                      alt="info icon"
                      className="h-3 w-3 cursor-help"
                    />
                  </Tooltip>
                </div>
                <div className="text-[#BBBBBB] text-xs">
                  This describes variable two and what the shown data means.
                </div>
                <div className="text-2xl font-bold text-right mt-4">21.9%</div>
              </div>
              <div className="border border-[#222324] bg-[#222324] rounded w-3/6 p-3 md:p-6 my-3 mx-1 md:ml-2 text-left">
                <div className="flex items-center justify-between mb-2">
                  <div>Fleet growth</div>
                  <Tooltip
                    text="Fleet growth shows the percentage increase in vehicle fleet size."
                    position="bottom"
                  >
                    <img
                      src={infoIcon}
                      alt="info icon"
                      className="h-3 w-3 cursor-help"
                    />
                  </Tooltip>
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
    </div>
  );
};
