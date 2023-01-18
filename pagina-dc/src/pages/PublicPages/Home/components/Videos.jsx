import React from "react";

export default function Videos() {
  return (
    <div className="w-full mobile:h-[550px] desktop-one:h-[360px] mb-16">
      <div className="flex justify-center items-center mx-10 desktop-two:mx-40 mobile:flex-col desktop-one:flex-row items-center relative top-16">
        <div className="flex justify-center items-center ">
           {/* video */}
          <iframe
            className="mobile:w-[340px] mobile:h-[215px] mobileM:w-[420px] mobileM:h-[215px] tablet:w-[460px] tablet:h-[315px] desktop-two:w-[660px] desktop-two:h-[450px]" /* mobileM:w-[660px] mobileM:h-[315px] */
            src="https://www.youtube.com/embed/9We6tZ6bgcw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className=" mobile:mt-4 mobile:h-96 mobile:w-80 tablet:w-[500px] tablet:h-[300px] desktop-one:ml-4  desktop-two:h-72 mobile:mx-auto mobile:mx-4">
           {/* titulo */}
          <h3 className="text-left">FEATURED VIDEO</h3>
           {/* subtitulo */}
          <h2 className="text-3xl ">
            SUICIDE SQUAD: KILL THE JUSTICE LEAGUE OFFICIAL BATMAN REVEAL
          </h2>
          {/* descripción */}
          <p className="text-justify mt-2">
            Check out the official reveal of Batman in this brand new cinematic.
            Suicide Squad: Kill the Justice League launches May 26, 2023 on PS5,
            Xbox Series X|S, and PC.
          </p>
          <p className="mt-2">Thank you Kevin. Learn more.</p>
        </div>
      </div>
    </div>
  );
}
