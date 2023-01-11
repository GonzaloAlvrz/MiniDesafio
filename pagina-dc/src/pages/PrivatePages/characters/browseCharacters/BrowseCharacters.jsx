import React from "react";
import Filters from "./filters/Filters";

export default function BrowseCharacters() {
  return (
    <div>
      <div className="bg-yellow mx-auto w-[1300px] h-[1000px]">
        <div>
          <h2 className="text-[#0282F9] text-4xl">BROWSE CHARACTERS</h2>
        </div>
        <div><Filters /></div>
      </div>
      
    </div>
  );
}
