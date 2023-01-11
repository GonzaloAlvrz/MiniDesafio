import React from "react";
import Header from "./components/header/Header";
import Banner from "./components/Banner";
import BoxHigh from "./components/BoxHigh";
import Videos from "./components/Videos";
import Carousel from "./components/carousel/carouselVideo/CarouselVideo";
import CarouselReleases from "./components/carousel/carouselReleases/CarouselReleases";
import CarouselNews from "./components/carousel/carouselNews/CarouselNews";
import Slider from "./components/Slider";
import LowBanner from "./components/LowBanner";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <header>
        <div className="fixed w-full z-30">
          <Header />
        </div>
      </header>
      <div>
        <Banner />
        <div className="flex flex-row mobile:felx mobile:flex-col mobile:mx-auto desktop-two:flex-row">
          <div className="flex flex- row mx-auto mobile:flex-col lap_tablet:flex-row">
            <BoxHigh />
            <BoxHigh />
          </div>
          <div className="flex flex- row mx-auto mobile:flex-col lap_tablet:flex-row">
            <BoxHigh />
            <BoxHigh />
          </div>
        </div>
        <div>
          <Videos />
        </div>
        <div className="mt-64">
          <h2 className="font-bold text-4xl desktop-two:ml-36">
            LATEST TRAILERS, CLIPS & MORE
          </h2>
          {<Carousel />}
        </div>
        <div>
          <CarouselReleases />
        </div>
        <div className="relative bottom-36">
          <Slider />
        </div>
        <div className="relative bottom-36">
          <CarouselNews />
        </div>
        <div>
          <LowBanner />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
