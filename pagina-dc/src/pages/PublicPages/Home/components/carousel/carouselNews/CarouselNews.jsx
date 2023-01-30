import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../Carousel.css";
import CardNews from "../carouselNews/CardNews";
import { dataNews } from "../carouselNews/dataNews";


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
      items: 3,
    }
  };

  const cardNews = dataNews.map((item) => (
    <CardNews
      title={item.title}
      url={item.imageurl}
      description={item.description}
      button={item.button}
    />
  ));
  return (
    <div>
      <div className="mt-10">
        <Carousel
          className="mobile:w-full desktop-two:w-[1400px]  mx-auto"
          responsive={responsive}
          button="bg-white"
        >
          {cardNews}
        </Carousel>
      </div>

    </div>
  );
}
