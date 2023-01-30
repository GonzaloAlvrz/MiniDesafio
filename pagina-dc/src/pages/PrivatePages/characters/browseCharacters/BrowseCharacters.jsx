import  React from "react";
import Filters from "./filters/Filters";
import Apid from "../api/Api";


export default function BrowseCharacters() {
  return (
    <div className="mt-8">
      <div className=" mx-auto laptop:w-full  desktop-two:w-[1300px] mobile:h-[1500px] mobileL:h-[1100px] lap_tablet:h-[720px] ">
        <div className="flex flex-row w-full">
          <h2 className="text-[#0282F9] text-4xl  mobile:ml-4 ">BROWSE CHARACTERS</h2>
        </div>
        <div className="flex lap_tablet:flex-row mobile:flex-col mobile:mx-4 lap_tablet:mx-auto lap_tablet:w-[760px] laptop:w-[975px] desktop-two:w-[1300px] ">
          <div className="mobile:mx-auto lap_tablet:mx-0">
            <Filters />
          </div>
          <div className=" desktop-two:h-[600px] mobileL:h-[580px] mobile:w-[350px] mobileL:w-[530px] lap_tablet:mt-16 mx-auto " >
            <Apid />
          </div>
        </div>
      </div>
    </div>
  );
}
