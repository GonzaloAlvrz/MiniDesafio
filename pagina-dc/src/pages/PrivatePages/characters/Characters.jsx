import React from "react";
import HeaderCharacters from "./components/header/HeaderCharacters";
import SliderCharacters from "./components/slider/SliderCharacters";
import Community from "./components/Community";
import Banner from "./components/bannerBlue/BannerBlue";
import Who from "./components/who/Who";
import BrowseCharacters from "./browseCharacters/BrowseCharacters";
import Footer from "./components/footer/Footer";
import Social from './components/footer/Social'

export default function Characters() {
  return (
    <div>
      <header className="fixed w-full z-30 ">
        <HeaderCharacters />
      </header>
     <div>
        <SliderCharacters />
      </div>
     <div>
        <Community />
      </div>
        <div>
        <Banner />
      </div>
       <div>
        <Who />
      </div>
     <div>
        <BrowseCharacters />
      </div>
      <div>
        <Footer/>
        <Social/>
      </div>
    </div>
  );
}
