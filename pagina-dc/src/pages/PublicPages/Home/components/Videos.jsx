import React from "react";

export default function Videos() {
  return (
    <div className="bg-yellow w-full h-[550px] mb-16 flex flex-row justify-center items-center">
      <div className="h-[400px] w-[720px] bg-black">Videos</div>
      <div className="bg-green ml-10 w-[620px]">
        <h3 className="text-left">FEATURED VIDEO</h3>
        <h2 className="text-3xl ">SUICIDE SQUAD: KILL THE JUSTICE LEAGUE OFFICIAL BATMAN REVEAL</h2>
        <p className="text-justify mt-2">Check out the official reveal of Batman in this brand new cinematic. Suicide Squad: Kill the Justice League launches May 26, 2023 on PS5, Xbox Series X|S, and PC.</p>
        <p className="mt-2">Thank you Kevin. Learn more.</p>
      </div>
    </div>
  );
}
