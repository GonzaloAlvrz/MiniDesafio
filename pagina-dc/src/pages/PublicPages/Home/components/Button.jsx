import React from "react";

export default function Button({d, title }) {
  return (
    <div
      className={`bg-white  rounded-full border-black border-2 h-12 flex justify-center items-center  ${d}}`}
    >
      <h1 className="text-black">{title}</h1>
    </div>
  );
}
