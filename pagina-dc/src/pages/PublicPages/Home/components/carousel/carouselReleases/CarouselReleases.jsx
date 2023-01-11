import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../../carousel/Carousel.css";
import CardNewReleases from "../carouselReleases/CardNewReleases";
import { DataNewReleases } from "../carouselReleases/dataNewReleases";

export default function Silder() {
  const responsive = {
    
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
    mobileM: {
      breakpoint: { max:1000, min: 640 },
      items: 2,
    },
    laptop: {
      breakpoint: { max:1200, min: 1000 },
      items: 3,
    },
    desktopTwo: {
      breakpoint: { max:2000, min: 1400 },
      items: 5,
    },
  };

  const cardNewReleases = DataNewReleases.map((e) => (
    <CardNewReleases title={e.title} url={e.imageurl} />
  ));
  return (
  
      <div className="mt-10">
        <h2 className="font-bold text-4xl desktop-two:ml-36">NEW RELEASES FROM DC UNIVERSE INFINITE ULTRA</h2>
        <Carousel
          className="mobile:w-full desktop-two:w-[1400px]  mx-auto"
          responsive={responsive}
     
        >
          {cardNewReleases}
          <div className="flex justify-center items-center mx-10 flex-col w-80  h-[500px] mt-20">
             <h3 className="text-4xl text-[#0B86A8]">SEE MORE </h3>
          </div>
        </Carousel>
      </div>

  );
}
