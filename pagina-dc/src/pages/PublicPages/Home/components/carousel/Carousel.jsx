import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../carousel/Carousel.css";
import CardVideo from "./carouselVideo/CardVideo";
import { DataCard } from "./carouselVideo/dataVideos";
import CardNewReleases from "./carouselReleases/CardNewReleases";
import { DataNewReleases } from "./carouselReleases/dataNewReleases";

export default function Silder() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const cardVideo = DataCard.map((item) => (
    <CardVideo
      title={item.title}
      url={item.imageurl}
      description={item.description}
    />
  ));
  const cardNewReleases = DataNewReleases.map((e) => (
    <CardNewReleases title={e.title} url={e.imageurl} />
  ));
  return (
    <div>
      <div className="mt-10">
        <Carousel
          className="mobile:w-full desktop-two:w-[1400px]  mx-auto"
          responsive={responsive}
          button="bg-white"
        >
          {cardVideo}
        </Carousel>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-4xl ml-36">NEW RELEASES FROM DC UNIVERSE INFINITE ULTRA</h2>
        <Carousel
          className="mobile:w-full desktop-two:w-[1400px]  mx-auto"
          responsive={responsive}
          button="bg-white"
        >
          {cardNewReleases}
          <div className="flex justify-center items-center mx-10 flex-col w-80  h-[500px] mt-20">
             <h3 className="text-4xl text-[#0B86A8]">SEE MORE ></h3>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
