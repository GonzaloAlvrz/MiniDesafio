import React from "react";
import Button from '../../Button'
import { Link } from "react-router-dom";
export default function CardVideo(props) {
  return (
    <div className="flex mb-36 mobile:mx-auto tablet:mx-auto laptop:mx-auto mobile:w-72 mobile:h-64 flex-col items-center desktop-two:w-[450px]  h-[350px] ">
      {/*  picture */}
      <img className="h-56 w-full " src={props.url}  />
      {/* title */}
      <h4 className=" text-gray-500 mt-5">{props.title}</h4>
       {/* description */}
      <h2 className="text-xl text-center mb-3">{props.description}</h2>
      {/* button */}
      <Link to='/404-not-found-Error-P'><Button title={props.button}></Button></Link>
    </div>
  );
}