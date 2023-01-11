import { React, useState } from "react";
import Icon from "../../img/header/dc-logo.svg";
import Search from "../../img/header/search.svg";
import Menu from "../../img/header/menu.svg";
import OptionsComics from "./OptionsComics";
import OptionsMovTv from "./OptionsMovTv";
import OptionsShop from "./OptionsShop";
import OptionsMore from "./OptionsMore";
import HeaderResponsive from "./headerResponsive/HeaderResponsive";
import LogIn from "../logIn/LogIn";
import {Link} from 'react-router-dom'

export default function Header() {
  const [optionsComics, setOptionsComics] = useState(false);
  const clickOptionsComics = () => {
    setOptionsComics(!optionsComics);
  };
  const [optionsMovTv, setOptionsMovTv] = useState(false);
  const clickOptionsMovTv = () => {
    setOptionsMovTv(!optionsMovTv);
  };
  const [optionsShop, setOptionsShop] = useState(false);
  const clickOptionsShop = () => {
    setOptionsShop(!optionsShop);
  };
  const [optionsMore, setOptionsMore] = useState(false);
  const clickOptionsMore = () => {
    setOptionsMore(!optionsMore);
  };

  /* log in */
  const [logIn, setLogIn] = useState(false);
  const clickLogIn = () => {
    setLogIn(!logIn);
  };
  return (
    <>

      <div className="h-16 bg-white flex flex-row mx-auto desktop-two:flex desktop-two:items-center mobile:hidden">
        {/* Vista web */}
       <Link to='/home'><img src={Icon} alt="" className="h-10 mt-2 ml-20 mr-12 pl-10 " /></Link> 
        
        <div className="flex flex-row items-center">
          <h3 onClick={clickLogIn} className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] ">
            CHARACTERS
          </h3>
          <div className="flex flex-col">
            <button
              onClick={clickOptionsComics}
              className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] flex flex-row relative cursor-pointer"
            >
              COMICS
              <svg
                className="fill-black hover:fill-[#17ABEB]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15L7 10H17L12 15Z" fill="" />
              </svg>
            </button>
            <div>{optionsComics ? <OptionsComics /> : ""}</div>
          </div>
          <div className="flex flex-col">
            <button
              onClick={clickOptionsMovTv}
              className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] flex flex-row"
            >
              MOVIES & TV
              <svg
                className="fill-black hover:fill-[#17ABEB]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15L7 10H17L12 15Z" fill="" />
              </svg>
            </button>
            <div>{optionsMovTv ? <OptionsMovTv /> : ""}</div>
          </div>
          <h3 className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB]">
            GAMES
          </h3>
          <h3 className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB]">
            NEWS
          </h3>
          <h3 className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB]">
            VIDEO
          </h3>
          <div className="flex flex-col">
            <button
              onClick={clickOptionsShop}
              className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] flex flex-row"
            >
              SHOP
              <svg
                className="fill-black hover:fill-[#17ABEB]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15L7 10H17L12 15Z" fill="" />
              </svg>
            </button>
            <div>{optionsShop ? <OptionsShop /> : ""}</div>
          </div>
          <h3 className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB]">
            COMMUNITY
          </h3>
          <div className="flex flex-col">
            <button
              onClick={clickOptionsMore}
              className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] flex flex-row"
            >
              MORE
              <svg
                className="fill-black hover:fill-[#17ABEB]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15L7 10H17L12 15Z" fill="" />
              </svg>
            </button>
            <div>{optionsMore ? <OptionsMore /> : ""}</div>
          </div>
          <div className="w-80 mx-4 ">
            <img src={Search} alt="search" className="relative left-72" />
          </div>
          <h3 className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB]">
            SIGN UP
          </h3>
          <div className="flex flex-col" >
            <button onClick={clickLogIn} className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB]">
              LOG IN
            </button>
            
          </div>
        </div>
      </div>
      
      {/*responsive */}
      <div>
        <HeaderResponsive />
      </div>
      <div className="mx-auto mt-20">{logIn ? <LogIn setLogIn={setLogIn}/> : ''}</div>
    </>
  );
}
