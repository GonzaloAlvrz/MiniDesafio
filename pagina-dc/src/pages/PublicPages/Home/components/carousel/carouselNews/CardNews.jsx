import React from "react";


export default function CardVideo(props) {
  return (
    <div className="flex  mb-20 mobile:mx-auto tablet:mx-auto laptop:mx-auto mobile:w-72 mobile:h-64 flex-col items-center desktop-two:w-[450px]  h-80 ">
      <img className="h-56 w-full " src={props.url}  />
      <h4 className=" text-gray-500 mt-5">{props.title}</h4>
      <h2 className="text-xl text-center">{props.description}</h2>
    </div>
  );
}