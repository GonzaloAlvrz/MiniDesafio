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
            <BoxHigh
              title="SUPERHERO SUPERLATIVES"
              description="THE DC COMMUNITY BESTS OF 2022"
              button="THAT´S A WRAP"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCwuidJDBY8ahs08sYTXV7E40fL1dO2VHg78Az7yc2PpuQggNgnDt2w7L4w7nFIjqcggo&usqp=CAU"
            />
            <BoxHigh
              title="DC SHOP"
              description="NEW JUSTICE LEAGUE GOLD LOGO REGLANS"
              button="SHOP NOW"
              img="https://m.media-amazon.com/images/S/aplus-media-library-service-media/1c2e5c22-bf4d-4824-89cf-5a1ab88a0138.__CR0,0,300,300_PT0_SX300_V1___.jpg"
            />
          </div>
          <div className="flex flex- row mx-auto mobile:flex-col lap_tablet:flex-row">
            <BoxHigh
              title="BLACK ADAM"
              description="NOW STREAMING ON HBO MAX"
              button="SIGN UP NOW"
              img="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR157TSRJzJPghv5KVNx5NXfOWo-vSfnAvizVlCeNFUTwpneXxx"
            />
            <BoxHigh
              title="DC UNIVERSE INFINITE"
              description="DCUI ULTRA EXPANDS TO OVER 32,000 COMICS"
              button="JOIN TODAY"
              img="https://mundosuperman.com/wp-content/uploads/2022/10/DC-UNIVERSE-INFINITE-Ultra.jpg"
            />
          </div>
        </div>
        <div>
          <Videos />
        </div>
        <div className="mt-64">
          <h2 className="font-bold text-4xl desktop-two:ml-36 mobile:mx-3">
            LATEST TRAILERS, CLIPS & MORE
          </h2>
          {<Carousel />}
        </div>
        <div>
          <CarouselReleases />
        </div>
        <div className="relative mobile:bottom-36 desktop-one:bottom-16 desktop-two:bottom-40">
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
