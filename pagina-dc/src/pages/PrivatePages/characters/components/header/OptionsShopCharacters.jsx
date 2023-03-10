import React from 'react'

export default function OptionsShopCharacters() {
    return (
        <div>
          {/*Shop Characters options */}
          <div className="bg-gray-200 dark:bg-slate-800 w-48 absolute top-[120px] left-[820px] ">
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
