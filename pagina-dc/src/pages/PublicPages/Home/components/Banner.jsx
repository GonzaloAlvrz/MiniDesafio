import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
export default function Banner() {
  const click = () => {
    console.log("Click en botón");
  };
  return (
    <div>
      {/* background image */}
      <img
        src="https://static.dc.com/2023-01/DC_Home_20230103_Top3Knox.jpg?w=1200"
        alt=""
        className="w-full"
      />
      {/* image text */}
      <div className="absolute mobile:hidden laptop:block  lap_tablet:top-[20%]  lap_tablet:left-[7%] laptop:top-[20%] laptop:left-[7%] desktop-one:top-[30%] desktop-one:left-[7%] desktop-two:top-[50%] desktop-two:left-[7%] text-white bg-red w-[440px]">
        <h2 className="text-xl">MY TOP THREE</h2>
        <h1 className="text-3xl font-extrabold mt-2">
          CATS, DOGS AND CONJURERS
        </h1>
        <h3 className="text-justify mt-2">
          Kelly Knox's favorite DC projects of 2022 included a teen take on a
          famous magician and two VERY different furry fables.
        </h3>
        <div className="mt-4">
          <Button measures="w-24" title="COLLARS AND CONS" />
        </div>
      </div>
      {/* image text (Responsive)*/}
      <div className="mt-4 mobile:block laptop:hidden mobile:w-[320px] tablet:w-[440px] mobile:mx-auto ">
        <h2 className="text-xl text-black text-center dark:text-white ">
          MY TOP THREE
        </h2>
        <h1 className="text-3xl font-extrabold mt-2 text-black dark:text-white">
          CATS, DOGS AND CONJURERS
        </h1>
        <h3 className="text-justify mt-2 text-black dark:text-white">
          Kelly Knox's favorite DC projects of 2022 included a teen take on a
          famous magician and two VERY different furry fables.
        </h3>
        <Link to="/404-not-found-Error-P">
          <div className="mt-4 flex justify-center">
            <Button onClick={click} measures="w-24" title="COLLARS AND CONS" />
          </div>
        </Link>
      </div>
    </div>
  );
}
