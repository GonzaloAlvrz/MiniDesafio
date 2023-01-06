import React from "react";


export default function CardVideo(props) {
  return (
    <div className="flex mx-10 mb-20 flex-col items-center w-[450px]  h-64 ">
      <img className="h-40 w-full " src={props.url}  />
      <h4 className=" text-gray-500 mt-5">{props.title}</h4>
      <h2 className="text-xl text-center">{props.description}</h2>
    </div>
  );
}