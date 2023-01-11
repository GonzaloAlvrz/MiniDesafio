import { React, useState } from "react";
import Names from "./Names";
import Mas from "./img/mas.svg";
import Menos from "./img/menos.svg";
import Alignment from './Alignment'
import Type from './Type'
import Status from './Status'

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
    <div className="bg-orange-400 h-96 w-56 mt-16">
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
                <p className="mr-40">NAMES</p>
                <div className="flex justify-end">
                  {names ? (
                    <div className="bg-lime-600">
                      <img className=" bg-lime-600" src={Menos} alt="" />
                    </div>
                  ) : (
                    <div className=" bg-yellow ">
                      <img src={Mas} alt="" />
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
                <p className="mr-32">ALIGNMENT</p>
                <div className="flex justify-end">
                  {alignment ? (
                    <div className="bg-lime-600">
                      <img className=" bg-lime-600" src={Menos} alt="" />
                    </div>
                  ) : (
                    <div className=" bg-yellow">
                      <img src={Mas} alt="" />
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
                <p className="mr-40">TYPE</p>
                <div className="flex justify-end">
                  {type ? (
                    <div className="bg-lime-600">
                      <img className=" bg-lime-600" src={Menos} alt="" />
                    </div>
                  ) : (
                    <div className="flex bg-yellow ">
                      <img className="" src={Mas} alt="" />
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
                <p className="mr-40">STATUS</p>
                <div className="flex justify-end">
                  {status ? (
                    <div className="bg-lime-600">
                      <img className=" bg-lime-600" src={Menos} alt="" />
                    </div>
                  ) : (
                    <div className="flex bg-yellow justify-end">
                      <img className="" src={Mas} alt="" />
                    </div>
                  )}
                </div>
              </li>

              <div>{status ? <Names /> : ""}</div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
