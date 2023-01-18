import React from "react";
import Facebook from './img/facebook.svg'
import Twitter from './img/twitter.svg'
import Youtube from './img/youtube.svg'

export default function Footer() {
  return (
    <div className="bg-black desktop-two:h-[470px] w-full flex items-center">
      <div className="text-white desktop-two:block  mobile:hidden  w-[800px] desktop-two:ml-48 desktop-one:ml-36 laptop:ml-20 lap_tablet:ml-28 mobile:ml-6">
        <div className=" w-[360px] flex flex-row ">
          <div className="w-80">
            <h3 className="text-xl">DC COMICS</h3>
            <ul>
              <li>Characters</li>
              <li>Comics</li>
              <li>Movies</li>
              <li>TV</li>
              <li>Games</li>
              <li>Videos</li>
              <li>News</li>
            </ul>

            <h3 className="text-xl">DC SHOP</h3>
            <ul>
              <li>DC shop</li>
              <li>Shop By Character</li>
            </ul>
          </div>
          <div className="w-80 mx-5">
            <h3 className="text-xl">DC</h3>
            <ul>
              <li>Terms Of Use</li>
              <li>Privacy Policy (New)</li>
              <li>Advertising</li>
              <li>Jobs</li>
              <li>Subscriptions</li>
              <li>CPSC Certificates</li>
              <li>Ratings</li>
              <li>Shop Help</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-xl">SITES</h3>
            <ul>
              <li>DC</li>
              <li>DC UNIVERSE INFINITE</li>
              <li>DC Kids</li>
              <li>DC Shop</li>
              <li>MAD Magazine</li>
            </ul>
          </div>
        </div>
        <div className="my-3">
          <span>
            All Site Content © & TM DC, unless otherwise noted here. All rights
            reserved. Gestionar preferencias
          </span>
        </div>
      </div>
      {/* Responsive */}
      <div>
        <div className=" h-48 w-80 py-10  ml-6 mobile:block desktop-two:hidden">
        <div className=" h-12 ">
          <span className="text-white bg-[#17ABEB] h-10 w-32 flex justify-center items-center">REGISTER NOW!</span>
        </div>
        <div>
            <span className="text-[#17ABEB]">FOLLOW US</span>
        </div> 
        <div className="flex flex-row">
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Youtube} alt="" />

        </div>
        </div>
      </div>
    </div>
  );
}
