import React from "react";
import Facebook from './img/facebook.svg'
import Twitter from './img/twitter.svg'
import Youtube from './img/youtube.svg'

export default function Social() {
  return (
    /* Social box with the social media */
    <div className="h-32 w-full bg-[#303030] flex flex-row items-center ">
      <div className="desktop-two:block mobile:hidden">
        <div className="border-2 border-[#17ABEB] text-white h-12 flex justify-center items-center ml-40">
          <span>REGISTER NOW!</span>
        </div>
        <div className="flex items-center flex-row ">
          <div className="absolute right-60 mb-10 flex flex-row items-center">
            <span className="mr-5 text-[#17ABEB]">FOLLOW US</span> 
           <a href="https://es-la.facebook.com/dc/" target="_blank" > <img src={Facebook} alt="" /></a>
           <a href="https://twitter.com/dccomics" target="_blank" ><img src={Twitter} alt="" /></a>
           <a href="https://www.youtube.com/dc" target="_blank" > <img src={Youtube} alt="" /></a>
            </div>
        </div>
      </div>
      <div className="desktop-two:hidden mobile:block mx-auto px-5 text-white">
        <span> All Site Content © & TM DC, unless otherwise noted here. All rights
        reserved. Gestionar preferencias</span>
      </div>
    </div>
  );
}
