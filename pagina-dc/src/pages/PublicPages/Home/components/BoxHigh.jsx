import React from "react";
import Button from "./Button";

export default function BoxHigh() {
  return (
    <div className="mt-10 ml-20 mb-20 border-b-orange-600">
      <div className="bg-red-600 h-[556px] w-80 drop-shadow-drop-shadow-lg">
        <div className="bg-violet-700 w-full h-72 mx-auto  flex justify-center items-center">
          img
        </div>
        <div className="w-0 h-0 relative bottom-[60px] border-b-[60px] border-b-w border-l-[320px] border-l-transparent"></div>
        <div className="bg-green h-32">
           <h3>Super</h3>
           <h2>THE DC COMMUNITY</h2>
            <Button  measures='w-4' title='sdf'/>
        </div>
      </div>
    </div>
  );
}
