import React from "react";

export default function OptionsComics() {
  return (
    <div>
      {/* triangular figure */}
        <div class="h-6 w-6 dark:bg-slate-800 absolute origin-bottom-left top-[57px] left-[365px] rotate-45 transform  bg-white"></div>
      <div className="bg-white dark:bg-slate-800 w-48 absolute top-[80px] left-72 rounded-xl ">
      {/* Section Options */}
        <ul>
          <li className="my-3 ml-3 hover:text-[#17ABEB]">LASTEST COMICS</li>
          <li className="my-3 ml-3 hover:text-[#17ABEB]">DC UNVERSE INFINENTE</li>
          <li className="my-3 ml-3 hover:text-[#17ABEB]">ALL COMICS SERIES</li>
          <li className="my-3 ml-3 hover:text-[#17ABEB]">TOP STORYLINES</li>
          <li className="my-3 ml-3 hover:text-[#17ABEB]">SHOWCASE COLLECTIONS</li>
          <li className="my-3 ml-3 hover:text-[#17ABEB]">COMIC SHOP LOCATOR</li>
          <li className="my-3 ml-3 hover:text-[#17ABEB]">PRINT SUBSCRIPTIONS</li>
        </ul>
      </div>
    </div>
  );
}
