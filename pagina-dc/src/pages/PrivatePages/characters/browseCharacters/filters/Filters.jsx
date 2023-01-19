import { React, useState } from "react";
import Names from "./Names";
import Mas from "./img/mas.svg";
import Menos from "./img/menos.svg";
import Alignment from "./Alignment";
import Type from "./Type";
import Status from "./Status";

export default function Filters() {
  const [names, setNames] = useState(false);
  const clickNames = () => {
    setNames(!names);
  };

  const [alignment, setAlignment] = useState(false);
  const clickAlignment = () => {
    setAlignment(!alignment);
  };

  const [type, setType] = useState(false);
  const clickType = () => {
    setType(!type);
  };

  const [status, setStatus] = useState(false);
  const clickStatus = () => {
    setStatus(!status);
  };
  return (
    <div className=" h-96 lap_tablet:w-56 mobile:w-[325px] mobileM:w-[350px] mt-16">
      <div>
        <div>
          <h3 className="text-xl">FILTERS</h3>
        </div>
        <div>
          <ul>
            <div>
              <li
                onClick={clickNames}
                className="w-full cursor-pointer flex flex-row items-center border-b-2 border-gray-200"
              >
                <p className="lap_tablet:mr-[151px] mobile:mr-[280px]">NAMES</p>
                <div className="flex justify-end">
                  {names ? (
                    <div>
                      <svg
                      className="fill-black dark:fill-white"
                        width="25"
                        height="30"
                        viewBox="0 0 5 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.67045 0.789773V1.72727H0.852273V0.789773H4.67045Z"
                          
                        />
                      </svg>
                    </div>
                  ) : (
                    <div className=" flex items-center h-10">
                      <svg
                      className="fill-black dark:fill-white"
                        width="25"
                        height="25"
                        viewBox="0 0 6 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.47727 6.40341V0.778409H3.43182V6.40341H2.47727ZM0.142046 4.06818V3.11364H5.76705V4.06818H0.142046Z"
                         
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </li>

              <div>{names ? <Names /> : ""}</div>
            </div>

            <div>
              <li
                onClick={clickAlignment}
                className="w-full cursor-pointer flex flex-row items-center border-b-2 border-gray-200"
              >
                <p className="lap_tablet:mr-28 mobile:mr-[242px]">ALIGNMENT</p>
                <div className="flex justify-end">
                  {alignment ? (
                    <div className="">
                      <svg
                      className="fill-black dark:fill-white"
                        width="25"
                        height="30"
                        viewBox="0 0 5 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.67045 0.789773V1.72727H0.852273V0.789773H4.67045Z"
                         
                        />
                      </svg>
                    </div>
                  ) : (
                    <div className=" flex items-center  h-10">
                      <svg
                      className="fill-black dark:fill-white"
                        width="25"
                        height="25"
                        viewBox="0 0 6 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.47727 6.40341V0.778409H3.43182V6.40341H2.47727ZM0.142046 4.06818V3.11364H5.76705V4.06818H0.142046Z"
                         
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </li>

              <div>{alignment ? <Alignment /> : ""}</div>
            </div>

            <div>
              <li
                onClick={clickType}
                className="w-full cursor-pointer flex flex-row items-center border-b-2 border-gray-200"
              >
                <p className="lap_tablet:mr-40 mobile:mr-[290px]">TYPE</p>
                <div className="flex justify-end">
                  {type ? (
                    <div className="">
                      <svg
                        className="fill-black dark:fill-white"
                        width="25"
                        height="30"
                        viewBox="0 0 5 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.67045 0.789773V1.72727H0.852273V0.789773H4.67045Z"
                         
                        />
                      </svg>
                    </div>
                  ) : (
                    <div className=" flex items-center  h-10">
                      <svg
                        className="fill-black dark:fill-white"
                        width="25"
                        height="25"
                        viewBox="0 0 6 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.47727 6.40341V0.778409H3.43182V6.40341H2.47727ZM0.142046 4.06818V3.11364H5.76705V4.06818H0.142046Z"
                          
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </li>

              <div>{type ? <Type /> : ""}</div>
            </div>

            <div>
              <li
                onClick={clickStatus}
                className="w-full cursor-pointer flex flex-row items-center border-b-2 border-gray-200"
              >
                <p className="lap_tablet:mr-[141px] mobile:mr-[270px]">STATUS</p>
                <div className="flex justify-end">
                  {status ? (
                    <div className="">
                      <svg
                        className="fill-black dark:fill-white"
                        width="25"
                        height="30"
                        viewBox="0 0 5 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.67045 0.789773V1.72727H0.852273V0.789773H4.67045Z"
                         
                        />
                      </svg>
                    </div>
                  ) : (
                    <div className=" flex items-center h-10">
                      <svg
                        className="fill-black dark:fill-white"
                        width="25"
                        height="25"
                        viewBox="0 0 6 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.47727 6.40341V0.778409H3.43182V6.40341H2.47727ZM0.142046 4.06818V3.11364H5.76705V4.06818H0.142046Z"
                        
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </li>

              <div>{status ? <Status /> : ""}</div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
