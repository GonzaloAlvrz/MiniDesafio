import { React, useState } from "react";
import Icon from "../../img/header/dc-logo.svg";
import OptionsComicCharacters from "../header/OptionsComicCharacters";
import OptionsMoreCharacters from "../header/OptionsMoreCharacters";
import OptionsMovTvCharacters from "../header/OptionsMovTvCharacters";
import OptionsShopCharacters from "../header/OptionsShopCharacters";
import Search from "../../img/header/search.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../../context/authContext";
import { useNavigate } from "react-router-dom";
import HeaderResponsive from "./headerResponsive/HeaderResponsive";

export default function HeaderCharacters() {

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

  /* LOG OUT */

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className="h-32 w-full bg-white desktop-two:flex desktop-two:justify-center desktop-two:items-center desktop-two:flex-row z-10  mobile:hidden desktop-two:block">
        <Link to="/characters">
          <div className="mr-7">
            <img src={Icon} alt="" />
          </div>
        </Link>
        <div className="flex flex-row items-center">
          <h3 className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] hover:underline hover:underline-offset-[40px]">
            CHARACTERS
          </h3>
          <div className="flex flex-col">
            <button
              onClick={clickOptionsComics}
              className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] flex flex-row relative hover:underline hover:underline-offset-[40px] cursor-pointer"
            >
              COMICS
              <svg
                className="fill-[#17ABEB]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15L7 10H17L12 15Z" fill="" />
              </svg>
            </button>
            <div className="z-20">
              {optionsComics ? <OptionsComicCharacters /> : ""}
            </div>
            <div>{optionsComics ? (console.log('Click en Comics')) : ""}</div>
          </div>
          <div className="flex flex-col">
            <button
              onClick={clickOptionsMovTv}
              className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] hover:underline hover:underline-offset-[40px] flex flex-row"
            >
              MOVIES & TV
              <svg
                className="fill-[#17ABEB]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15L7 10H17L12 15Z" fill="" />
              </svg>
            </button>
            <div className="z-20">
              {optionsMovTv ? <OptionsMovTvCharacters /> : ""}
            </div>
            <div>{optionsMovTv ? (console.log('Click en Movies y & TV')) : ""}</div>

          </div>
          <h3 onClick={clickGames} className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] hover:underline hover:underline-offset-[40px]">
            GAMES
          </h3>
          <h3 onClick={clickNews} className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] hover:underline hover:underline-offset-[40px]">
            NEWS
          </h3>
          <h3 onClick={clickVideo} className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] hover:underline hover:underline-offset-[40px]">
            VIDEO
          </h3>
          <div className="flex flex-col">
            <button
              onClick={clickOptionsShop}
              className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] hover:underline hover:underline-offset-[40px] flex flex-row"
            >
              SHOP
              <svg
                className="fill-[#17ABEB]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15L7 10H17L12 15Z" fill="" />
              </svg>
            </button>
            <div className="z-20">
              {optionsShop ? <OptionsShopCharacters /> : ""}
            </div>
            <div>{optionsShop ? (console.log('Click en SHOP')): ""}</div>

          </div>
          <h3 onClick={clickCommunity} className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] hover:underline hover:underline-offset-[40px]">
            COMMUNITY
          </h3>
          <div className="flex flex-col">
            <button
              onClick={clickOptionsMore}
              className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] hover:underline hover:underline-offset-[40px] flex flex-row"
            >
              MORE
              <svg
                className="fill-[#17ABEB]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15L7 10H17L12 15Z" fill="" />
              </svg>
            </button>
            <div className="z-20">
              {optionsMore ? <OptionsMoreCharacters /> : ""}
            </div>
            <div>{optionsMore ? (console.log('Click en MORE')): ""}</div>

          </div>
          <div className=" mx-4 flex ">
            <div className="b">
              <input type="text" placeholder="Search" className="w-20" />
            </div>
            <img src={Search} alt="search" className="relative left-2" />
          </div>
          <h3
            onClick={handleLogout}
            className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] hover:underline hover:underline-offset-[40px]"
          >
            LOG OUT
          </h3>
        </div>
      </div>
      <div>
        <HeaderResponsive/>
      </div>
    </>
  );
}
