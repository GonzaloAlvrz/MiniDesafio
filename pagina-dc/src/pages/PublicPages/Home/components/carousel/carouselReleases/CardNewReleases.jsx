import React from "react";


export default function CardNewReleases(props) {
  return (
    <div className="flex mx-10 mobile:mx-auto tablet:mx-auto laptop:mx-auto flex-col items-center w-64 h-[500px] mt-20">
      <img className="h-84 w-full " src={props.url}  />
      <h4 className="text-center text-xl mt-3">{props.title}</h4>
    </div>
  );
}