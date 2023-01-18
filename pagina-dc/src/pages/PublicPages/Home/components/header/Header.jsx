import { React, useState } from "react";
import Icon from "../../img/header/dc-logo.svg";
import Search from "../../img/header/search.svg";
import Menu from "../../img/header/menu.svg";
import OptionsComics from "./OptionsComics";
import OptionsMovTv from "./OptionsMovTv";
import OptionsShop from "./OptionsShop";
import OptionsMore from "./OptionsMore";
import HeaderResponsive from "./headerResponsive/HeaderResponsive";
/* import LogIn from "../logIn/LogIn";
import Register from '../register/Register' */
import Register from '../register/Re'
import Login from "../logIn/Log";
import {Link} from 'react-router-dom'
/* import AgeGate from "../ageGate/AgeGate"; */


export default function Header() {
/* click */

  const clickGames = () => {
    console.log('click en GAMES')
  };


  const clickNews = () => {
    console.log('click en NEWS')
  };

  const clickVideo = () => {
    console.log('click en VIDEO')
  };
 
  const clickCommunity = () => {
    console.log('click en COMMUNITY')
  };
 /*  options */
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

  /* sign up */
  const [signUp, setSignUp] = useState(false);
  const clickSignUp = () => {
    setSignUp(!signUp);
  };



  return (
    <>

      <div className="h-16 bg-white flex flex-row mx-auto desktop-two:flex desktop-two:items-center mobile:hidden">
        {/* Vista web */}
       <Link to='/'><img src={Icon} alt="" className="h-10 mt-2 ml-20 mr-12 pl-10 " /></Link> 
        
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
            <div>{optionsComics ? (console.log('Click en Comics')) : ""}</div>
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
            <div>{optionsMovTv ? (console.log('Click en Movies y & TV')) : ""}</div>
          </div>
          <h3 onClick={clickGames} className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB]">
            GAMES
          </h3>
          <h3 onClick={clickNews} className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB]">
            NEWS
          </h3>
          <h3 onClick={clickVideo} className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB]">
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
            <div>{optionsShop ? (console.log('Click en SHOP')): ""}</div>
          </div>
          <h3 onClick={clickCommunity} className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB]">
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
            <div>{optionsMore ? (console.log('Click en MORE')): ""}</div>
          </div>
          <div className="w-80 mx-4 ">
            <img src={Search} alt="search" className="relative left-72" />
          </div>
          <button onClick={clickSignUp} className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB]">
            SIGN UP
          </button>
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
      <div className="mx-auto mt-20">{logIn ? <Login setLogIn={setLogIn}/> : ''}</div>
      <div className="mx-auto mt-20">{signUp ? <Register setSignUp={setSignUp}/> : ''}</div>

    </>
  );
}
