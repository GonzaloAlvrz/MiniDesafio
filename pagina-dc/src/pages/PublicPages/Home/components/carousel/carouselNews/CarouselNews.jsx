import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../Carousel.css";
import CardNews from "../carouselNews/CardNews";
import { dataCard } from "../carouselNews/dataNews";


export default function Silder() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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

  const cardNews = dataCard.map((item) => (
    <CardNews
      title={item.title}
      url={item.imageurl}
      description={item.description}
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
