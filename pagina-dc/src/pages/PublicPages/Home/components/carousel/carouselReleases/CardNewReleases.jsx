import React from "react";


export default function CardNewReleases(props) {
  return (
    <div className="flex mx-10 mobile:mx-auto tablet:mx-auto laptop:mx-auto flex-col items-center w-64 h-[500px] mt-20 bg-white dark:bg-slate-800">
      {/*  picture */}
      <img className="h-84 w-full " src={props.url}  />
      {/* title */}
      <h4 className="text-center text-xl mt-3">{props.title}</h4>
    </div>
  );
}