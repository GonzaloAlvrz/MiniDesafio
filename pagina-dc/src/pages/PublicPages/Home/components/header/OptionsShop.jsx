import React from 'react'

export default function OptionsShop() {
    return (
        <div>
            <div class="h-6 w-6 dark:bg-slate-800 absolute origin-bottom-left top-[57px] left-[830px] rotate-45 transform  bg-white"></div>
          <div className="bg-white dark:bg-slate-800 w-48 absolute top-[80px] left-[750px] rounded-xl ">
            <ul>
              <li className="my-3 ml-3 hover:text-[#17ABEB]">DC SHOP</li>
              <li className="my-3 ml-3 hover:text-[#17ABEB]">NEW ARRIVALS</li>
              <li className="my-3 ml-3 hover:text-[#17ABEB]">MOST POPULAR</li>
              <li className="my-3 ml-3 hover:text-[#17ABEB]">SHOP ART OF THE BAT</li>
              <li className="my-3 ml-3 hover:text-[#17ABEB]">SHOP BATMAN</li>
              <li className="my-3 ml-3 hover:text-[#17ABEB]">SHOP HARLEY QUINN</li>
            </ul>
          </div>
        </div>
      );
}
