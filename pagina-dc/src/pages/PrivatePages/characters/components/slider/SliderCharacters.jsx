import React, { useState } from "react";
import ArrowL from "../../img/slider/arrowLeft.svg";
import ArrowR from "../../img/slider/arrowRight.svg";
import Point from "../../img/slider/point.svg";
import { Link } from "react-router-dom";
export default function Slider() {
  const slides = [
    {
      url: require("./img/uno.png"),
      title: "GET TO KNOW",
      bigTitle: "STEPHANIE BROWN",
      text: "The daughter of a super-villain, Stephanie Brown now fights to put criminals like him in prison and has found great success—and even greater friends—within the Bat-Family.",
      name: "Learn more",
    },
    {
      url: require("./img/dos.png"),
      title: "GET TO KNOW",
      bigTitle: "CASSANDRA CAIN",
      text: "The child of two assassins, Cassandra Cain should have been a killer. Yet, in the ultimate case of nurture over nature, she was taken in by Bruce Wayne and now fights for justice as part of the Bat-Family.",
      name: "Learn more",
    },
    {
      url: require("./img/tres.png"),
      title: "GET TO KNOW",
      bigTitle: "BARBARA GORDON",
      text: "As dangerous with a computer as she is with a batarang, Barbara Gordon has risen from tragedy to become one of the world’s best—and most buzzed about—crime fighters.",
      name: "Learn more",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full h-[650px]  mx-auto relative mobile:mt-28  tablet:mt-20 desktop-one:mt-0 desktop-two:mt-0">
      {/* background image */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full  bg-center bg-cover "
      ></div>
      {/* left button */}
      <div
        onClick={prevSlide}
        className="absolute top-[70%] translate-x-0 translate-y-[-50%] right-60 text-2xl laptop:flex laptop:justify-center laptop:items-center h-11 w-11 rounded-full p-2 bg-white text-white cursor-pointer z-10 mobile:hidden laptop:block"
      >
        <img src={ArrowL} alt="" />
      </div>
      {/* right button */}
      <div
        onClick={nextSlide}
        className="absolute top-[70%] translate-x-0 translate-y-[-50%] right-40 text-2xl laptop:flex laptop:justify-center laptop:items-center h-11 w-11 rounded-full p-2 bg-white text-white cursor-pointer z-10 mobile:hidden laptop:block"
      >
        <img src={ArrowR} alt="" />
      </div>
      {/* information */}
      <div className="absolute  top-[50%] translate-x-0 translate-y-[-50%]  mobile:w-full mobile:   laptop:w-96  laptop:left-40 text-white ">
        <h3 className="mb-3  mobile:flex mobile:justify-center laptop:justify-start mobile:text-sm">
          {slides[currentIndex].title}
        </h3>
        <h2 className="laptop:text-6xl mb-3  mobile:flex mobile:justify-center laptop:justify-start mobile:text-2xl">
          {slides[currentIndex].bigTitle}
        </h2>
        <p className="mb-3 mobile:hidden laptop:block">
          {slides[currentIndex].text}
        </p>
        <div className="mobile:flex mobile:justify-center laptop:justify-start">
          <Link to="/404-not-found-Error">
            <button className="h-10 w-28 bg-[#17ABEB]">
              {slides[currentIndex].name}
            </button>
          </Link>
        </div>
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <div className="relative bottom-12">
              <img src={Point} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
