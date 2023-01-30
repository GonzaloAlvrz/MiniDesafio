import React from "react";


export default function CardVideo(props) {
  return (
    <div className="flex mx-10 flex-col items-center mobile:w-72 mobile:mx-auto tablet:mx-auto laptop:mx-auto desktop-two:mx-auto  desktop-two:w-80   h-72 bg-white dark:bg-slate-800 drop-shadow-xl mb-10">
     {/*  picture */}
      <img className="h-40 w-full " src={props.url}  />
      {/* title */}
      <h4 className=" text-gray-500">{props.title}</h4>
      {/* description */}
      <h2 className="text-xl text-center">{props.description}</h2>
    </div>
  );
}