import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
export default function BoxHigh({ img, title, description, button }) {
  const click = () => {
    console.log("Click en botón");
  };
  return (
    <div className=" bg-white dark:bg-slate-800 mx-12 my-10 drop-shadow-2xl">
      <div className="h-[446px] laptop:w-80 mobile:w-64 drop-shadow-drop-shadow-lg">
        <div className=" w-full h-72 mx-auto  flex justify-center items-center">
          {/* picture */}
          <img src={img} alt="" className="w-full h-[286px]" />
        </div>
        <div className="w-0 h-0 relative laptop:bottom-[60px] laptop:border-b-[60px] laptop:border-b-w laptop:border-l-[320px] laptop:border-l-transparent  mobile:border-b-[60px] dark:mobile:border-b-slate-800 mobile:border-b-white mobile:border-l-[256px] mobile:border-l-transparent mobile:bottom-14"></div>
        <div className="h-32 flex justify-center flex-col items-center relative bottom-11">
          {/* title */}
          <h3>{title}</h3>
          {/* description */}
          <h2 className="text-center">{description}</h2>
          <div onClick={click}>
           {/*  button */}
           <Link to='/404-not-found-Error-P'><Button measures="w-4" title={button} /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
