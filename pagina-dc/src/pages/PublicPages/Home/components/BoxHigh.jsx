import React from "react";
import Button from "./Button";

export default function BoxHigh() {
  return (
    <div className=" mx-12 my-10 border-b-orange-600">
      <div className="bg-red-600 h-[556px] laptop:w-80 mobile:w-64 drop-shadow-drop-shadow-lg">
        <div className="bg-violet-700 w-full h-72 mx-auto  flex justify-center items-center">
          img
        </div>
        <div className="w-0 h-0 relative laptop:bottom-[60px] laptop:border-b-[60px] laptop:border-b-w laptop:border-l-[320px] laptop:border-l-transparent  mobile:border-b-[60px] mobile:border-b-w mobile:border-l-[256px] mobile:border-l-transparent mobile:bottom-14"></div>
        <div className="bg-green h-32">
           <h3>Super</h3>
           <h2>THE DC COMMUNITY</h2>
            <Button  measures='w-4' title='sdf'/>
        </div>
      </div>
    </div>
  );
}
