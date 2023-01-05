import React from "react";

export default function Button({measures, title }) {
  return (
    <div
      className={`bg-white  rounded-full border-black border-2 h-12 flex justify-center items-center  ${measures}}`}
    >
      <h1 className="text-black">{title}</h1>
    </div>
  );
}
