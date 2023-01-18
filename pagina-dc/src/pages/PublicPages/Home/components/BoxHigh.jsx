import React from "react";
import Button from "./Button";

export default function BoxHigh({ img, title, description, button }) {
  const click = () => {
    console.log("Click en botón");
  };
  return (
    <div className=" bg-white mx-12 my-10 drop-shadow-2xl">
      <div className="h-[446px] laptop:w-80 mobile:w-64 drop-shadow-drop-shadow-lg">
        <div className=" w-full h-72 mx-auto  flex justify-center items-center">
          {/* imagen */}
          <img src={img} alt="" className="w-full h-[286px]" />
        </div>
        <div className="w-0 h-0 relative laptop:bottom-[60px] laptop:border-b-[60px] laptop:border-b-w laptop:border-l-[320px] laptop:border-l-transparent  mobile:border-b-[60px] mobile:border-b-white mobile:border-l-[256px] mobile:border-l-transparent mobile:bottom-14"></div>
        <div className="h-32 flex justify-center flex-col items-center relative bottom-11">
          {/* titulo */}
          <h3>{title}</h3>
          {/* descripción */}
          <h2 className="text-center">{description}</h2>
          <div onClick={click}>
           {/*  botón */}
            <Button measures="w-4" title={button} />
          </div>
        </div>
      </div>
    </div>
  );
}
