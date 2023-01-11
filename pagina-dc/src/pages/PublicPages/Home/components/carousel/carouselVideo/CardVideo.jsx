import React from "react";


export default function CardVideo(props) {
  return (
    <div className="flex mx-10 flex-col items-center mobile:w-72 mobile:mx-auto tablet:mx-auto laptop:mx-auto desktop-two:mx-auto tablet:bg-green laptop:bg-red-800 desktop-two:w-80 desktop-two:bg-orange-700  h-72 bg-slate-100">
      <img className="h-40 w-full " src={props.url}  />
      <h4 className=" text-gray-500">{props.title}</h4>
      <h2 className="text-xl text-center">{props.description}</h2>
    </div>
  );
}