import React from "react";
import Facebook from './img/facebook.svg'
import Twitter from './img/twitter.svg'
import Youtube from './img/youtube.svg'

export default function Social() {
  return (
    <div className="h-32 w-full bg-[#303030] flex flex-row items-center ">
      <div className="desktop-two:block mobile:hidden">
        <div className="border-2 border-[#17ABEB] text-white h-12 flex justify-center items-center ml-40">
          <span>REGISTER NOW!</span>
        </div>
        <div className="flex items-center flex-row ">
          <div className="absolute right-60 mb-10 flex flex-row items-center">
            <span className="mr-5 text-[#17ABEB]">FOLLOW US</span> 
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Youtube} alt="" />
            </div>
        </div>
      </div>
      <div className="desktop-two:hidden mobile:block mx-auto">
        <span> All Site Content © & TM DC, unless otherwise noted here. All rights
        reserved. Gestionar preferencias</span>
      </div>
    </div>
  );
}
