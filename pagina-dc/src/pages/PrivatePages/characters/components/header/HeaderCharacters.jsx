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
import ModoOscuro from "../../../../../modoOscuro/ModoOscuro";

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

   /*  modo oscuro */

 const [modo, setModo] = useState(false);



  return (
    <>
      <div className="h-32 w-full bg-white dark:bg-slate-800 desktop-two:flex desktop-two:justify-center desktop-two:items-center desktop-two:flex-row z-10  mobile:hidden desktop-two:block">
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
            <div>
              <input  type="text" placeholder="Search" className="dark:bg-slate-800" />
            </div>
            <div className="relative right-[275px]">
            <svg
            className="relative left-72 fill-black dark:fill-white"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.146 12.371 1.888 11.113C0.629333 9.85433 0 8.31667 0 6.5C0 4.68333 0.629333 3.14567 1.888 1.887C3.146 0.629 4.68333 0 6.5 0C8.31667 0 9.85433 0.629 11.113 1.887C12.371 3.14567 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.81267 10.5627 9.688 9.688C10.5627 8.81267 11 7.75 11 6.5C11 5.25 10.5627 4.18733 9.688 3.312C8.81267 2.43733 7.75 2 6.5 2C5.25 2 4.18733 2.43733 3.312 3.312C2.43733 4.18733 2 5.25 2 6.5C2 7.75 2.43733 8.81267 3.312 9.688C4.18733 10.5627 5.25 11 6.5 11Z"
                
              />
            </svg>
            </div>
          {/*   <img src={Search} alt="search" className="relative left-2" /> */}
          </div>
          <h3
            onClick={handleLogout}
            className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] hover:underline hover:underline-offset-[40px]"
          >
            LOG OUT
          </h3>
          <h3 className="mr-5">
           <Link to='/account'>CUENTA</Link> 
          </h3>
          <div>
            <ModoOscuro modo={modo} setModo={setModo} />
          </div>
        </div>
      </div>
      <div>
        <HeaderResponsive/>
      </div>
    </>
  );
}
