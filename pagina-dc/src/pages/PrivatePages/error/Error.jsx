import React from "react";

export default function Error() {
  return (
    <div className=" w-[350px] mobile:mt-7 desktop-two:mt-32 mx-auto ">
      <div>
        <img
          src="https://shop.dc.com/coming-soon/dc-shop-logo.png"
          className="h-20"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://shop.dc.com/coming-soon/static/media/mxyzptlk.0f810a8a.png"
          alt=""
        />
      </div>
      <div className="text-center">
        <h1 className="text-xl">NOT AVAILABLE IN YOUR LOCATION!</h1>
        <p className="mt-2">
          DC Shop is not available in your dimension, but make like Mxyzptlk and
          check back soon!
        </p>
      </div>
    </div>
  );
}
