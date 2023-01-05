import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import BoxHigh from "./components/BoxHigh";
import Videos from "./components/Videos";
export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div>
        <Banner />
        <div className="flex flex-row mobile:felx mobile:flex-col mobile:mx-auto desktop-two:flex-row">
          <BoxHigh />
          <BoxHigh />
         <div></div>
          <BoxHigh />
          <BoxHigh />
        </div>
        <div>
          <Videos />
        </div>
      </div>
    </div>
  );
}
