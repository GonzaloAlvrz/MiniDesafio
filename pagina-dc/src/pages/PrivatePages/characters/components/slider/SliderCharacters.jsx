import React, { useState } from "react";
import ArrowL from "../../img/slider/arrowLeft.svg";
import ArrowR from "../../img/slider/arrowRight.svg";
import Point from "../../img/slider/point.svg";
import Button from "../../../../PublicPages/Home/components/Button";
export default function Slider() {
  const slides = [
    {
      url: "https://www.lascosasquenoshacenfelices.com/wp-content/uploads/2022/10/black-adam-movie-review-003.jpg",
      title:'GET TO KNOW',
      bigTitle:'HAWKMAN',
      text: "Since the days of World War II, there has always been an imposing figure with majestic wings and a striking bird-shaped helmet, brandishing ancient weaponry and standing alongside Earth's greatest heroes in its time of need.",
      name: 'MEET CARTER HALL'
    },
    {
      url: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/02/Black-Adam-La-Sociedad-de-la-Justicia-de-America-1.jpg?resize=1280%2C720&quality=80&ssl=1",
      title:'GET TO KNOW',
      bigTitle:'DOCTOR FATE',
      text: 'One of the founding members of The Justice Society, Doctor Fate is able to use his powers to wield magic, conjure illusions and see the future.',
      name: 'MEET KENT NELSON'
    },
    {
      url: "https://es.web.img3.acsta.net/r_1920_1080/pictures/22/10/10/08/58/1583588.jpg",
      title:'GET TO KNOW',
      bigTitle:'CYCLONE',
      text: 'After being subjected to nanotechnology experimentation by evil scientists, at just nineteen years old, Maxine Hunkel is a force of nature—literally—with the ability to control the wind with her mind. ',
      name: 'MEET MAXINE HUNKEL'
    },
    {
      url: "https://www.egames.news/__export/1668372988547/sites/debate/img/2022/11/13/atomsmasher_1.jpg_172596871.jpg",
      title:'GET TO KNOW',
      bigTitle:'ATOM SMASHER',
      text: 'As one of the newest recruits of The Justice Society, 20-year-old Al Rothstein can transform his molecular structure to grow in size to towering heights to become the superhero Atom Smasher.',
      name: 'MEET AL ROTHSTEIN'
    },
    {
      url: "https://www.cadena3.com/admin/playerswf/fotos/ARCHI_924973.jpg",
      title:'GET TO KNOW',
      bigTitle:'BLACK ADAM',
      text: 'One of the world’s foremost wielders of magic, Black Adam has been both hero and villain over a life that’s spanned thousands of years.',
      name: 'MEET TETH-ADAM'
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
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full  bg-center bg-cover "
      ></div>
      <div onClick={prevSlide} className="absolute top-[70%] translate-x-0 translate-y-[-50%] right-60 text-2xl flex justify-center items-center h-11 w-11 rounded-full p-2 bg-white text-white cursor-pointer z-10">
        <img src={ArrowL}  alt="" />
      </div>
      <div  onClick={nextSlide} className="absolute top-[70%] translate-x-0 translate-y-[-50%] right-40 text-2xl flex justify-center items-center h-11 w-11 rounded-full p-2 bg-white text-white cursor-pointer z-10">
        <img src={ArrowR} alt="" />
      </div>
      <div className="absolute  top-[50%] translate-x-0 translate-y-[-50%]  mobile:w-full mobile:   laptop:w-96  laptop:left-40 text-white ">
        <h3 className="mb-3  mobile:flex mobile:justify-center laptop:justify-start mobile:text-sm" >{slides[currentIndex].title}</h3>
        <h2 className="laptop:text-6xl mb-3  mobile:flex mobile:justify-center laptop:justify-start mobile:text-2xl">{slides[currentIndex].bigTitle}</h2>
        <p className="mb-3 mobile:hidden laptop:block">{slides[currentIndex].text}</p>
        <div className="mobile:flex mobile:justify-center laptop:justify-start">
        <Button  d='w-10' title={slides[currentIndex].name}/>
        </div>
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
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