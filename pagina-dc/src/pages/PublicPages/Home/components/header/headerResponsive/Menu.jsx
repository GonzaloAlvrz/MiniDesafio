import { React, useState } from "react";
import Button from "../../Button";
import Login from "../../logIn/Log";
import Register from "../../register/Re";

export default function Menu() {
  const clickGames = () => {
    console.log("click en GAMES");
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
  const clickNFTS = () => {
    console.log('click en NFTS')
  };
  const clickFandome = () => {
    console.log('click en FANDOME')
  };
  const clickOrigin = () => {
    console.log('click en ORIGIN')
  };

  const [optionsComic, setOptionsComic] = useState(false);
  const clickOptionComic = () => {
    setOptionsComic(!optionsComic);
  };
  const [optionsMoTv, setOptionsMoTv] = useState(false);
  const clickOptionMoTv = () => {
    setOptionsMoTv(!optionsMoTv);
  };
  const [optionShop, setOptionsShop] = useState(false);
  const clickOptionShop = () => {
    setOptionsShop(!optionShop);
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
    <div className="absolute top-11 left-0 w-full min-h-screen bg-white  border-t-2 border-gray-200 overflow-y-scroll">
      <div className="border-b-2 border-gray-200">
        <ul className="ml-4">
          <li className="my-3 hover:text-[#17ABEB]">CHARACTERS</li>
          <li onClick={clickOptionComic} className=" flex flex-col">
            <div className="mb-3 hover:text-[#17ABEB] flex flex-row">
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
              <div>{optionsComic ? (console.log('Click en Comics')) : ""}</div>
            </div>
            <div className={optionsComic ? "block" : "hidden"}>
              <ul className="ml-6">
                <li>LATEST COMICS</li>
                <li>DC UNIVERSE INFINITE</li>
                <li>ALL COMICS SERIES</li>
                <li>TOP STORYLINES</li>
                <li>SHOWCASE COLLECTIONS</li>
                <li>COMIC SHOP LOCATOR</li>
                <li className="mb-2">PRINT SUBSCRIPTIOS</li>
              </ul>
            </div>
          </li>

          <li onClick={clickOptionMoTv} className=" flex flex-col">
            <div className=" hover:text-[#17ABEB] flex flex-row">
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
            </div>
            <div className={optionsMoTv ? "block" : "hidden"}>
              <ul className="ml-6">
                <li>DC MOVIES</li>
                <li>DC SERIES</li>
                <li className="mb-2">DC ON HBO MAX</li>
              </ul>
            </div>
            <div>{optionsMoTv ? (console.log('Click en Movies y & TV')) : ""}</div>
          </li>
          <li onClick={clickGames}  className="my-3 hover:text-[#17ABEB]">GAMES</li>
          <li onClick={clickNews}  className="my-3 hover:text-[#17ABEB]">NEWS</li>
          <li onClick={clickVideo} className="my-3 hover:text-[#17ABEB]">VIDEO</li>

          <li onClick={clickOptionShop} className="flex flex-col">
            <div className="hover:text-[#17ABEB] flex flex-row">
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
            </div>
            <div className={optionShop ? "block" : "hidden"}>
            <div>{optionShop ? (console.log('Click en SHOP')): ""}</div>
              <ul className="ml-6">
                <li>DC SHOP</li>
                <li>NEWS ARRIVALS</li>
                <li>MOST POPULAR</li>
                <li>SHOP ART OF THE BAT</li>
                <li>SHOP BATMAN</li>
                <li className="mb-2">SHOP HARLEY QUINN</li>
              </ul>
            </div>
          </li>

          <li onClick={clickCommunity} className="my-3 hover:text-[#17ABEB]">COMMUNITY</li>
          <li onClick={clickNFTS} className="my-3 hover:text-[#17ABEB]">DC NFTS</li>
          <li onClick={clickFandome} className="my-3 hover:text-[#17ABEB]">DC FANDOME</li>
          <li onClick={clickOrigin}  className="my-3 hover:text-[#17ABEB]">MY DC ORIGIN STORY</li>
        </ul>
      </div>
      <div className="flex mobile:flex-col tablet:flex-row justify-center mt-10">
        <div
          onClick={clickLogIn}
          className="tablet:mr-4 mobile:flex mobile:justify-center"
        >
          <Button title="Iniciar sesión" />
        </div>
        <div
          onClick={clickSignUp}
          className="tablet:ml-4 mobile:flex mobile:justify-center mobile:mt-4 tablet:mt-0"
        >
          <Button title="Registrate" />
        </div>
      </div>
      <div className="mx-auto relative mobile:bottom-[478px] tablet:bottom-[420px]">
        {logIn ? <Login setLogIn={setLogIn} /> : ""}
      </div>
      <div className="mx-auto relative mobile:bottom-[478px] tablet:bottom-[420px]">
        {signUp ? <Register setSignUp={setSignUp} /> : ""}
      </div>
    </div>
  );
}
