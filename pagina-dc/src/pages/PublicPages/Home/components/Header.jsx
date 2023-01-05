import React from "react";
import Icon from "../img/header/dc-logo.svg";
import Search from "../img/header/search.svg";
import Menu from '../img/header/menu.svg'

export default function Header() {
  return (
    <>
    <div className="h-16 bg-orange-500 flex flex-row mx-auto desktop-two:flex desktop-two:items-center mobile:hidden desktop-two:block">
      {/* Vista web */}
        <img src={Icon} alt="" className="h-10 mt-2 ml-20 mr-12 pl-10 " />
        <div className="flex flex-row items-center">
          <h3 className="font-extrabold ml-2 mr-5">CHARACTERS</h3>
          <h3 className="font-extrabold ml-2 mr-5">COMICS</h3>
          <h3 className="font-extrabold ml-2 mr-5">MOVIES & TV</h3>
          <h3 className="font-extrabold ml-2 mr-5">GAMES</h3>
          <h3 className="font-extrabold ml-2 mr-5">NEWS</h3>
          <h3 className="font-extrabold ml-2 mr-5">VIDEO</h3>
          <h3 className="font-extrabold ml-2 mr-5">SHOP</h3>
          <h3 className="font-extrabold ml-2 mr-5">COMMUNITY</h3>
          <h3 className="font-extrabold ml-2 mr-5">MORE</h3>
          <div className="w-80 mx-4 ">
            <img src={Search} alt="search" className="relative left-72" />
          </div>
          <h3 className="font-extrabold ml-2 mr-5 ">LOG IN</h3>
          <h3 className="font-extrabold ml-2 mr-5 ">SIGN UP</h3>
        </div>
    </div>
        
      {/* Vista responsive */}
      <div className=" mobile:flex flex-row h-11  mobile:items-center mobile:block desktop-two:hidden">
      <img src={Icon} alt="" className="h-10 ml-4" />
      <img src={Menu} alt=""  className="absolute right-4"/>
      <img src={Search} alt="" className="absolute right-16" />
      </div>
</>
  );
}
