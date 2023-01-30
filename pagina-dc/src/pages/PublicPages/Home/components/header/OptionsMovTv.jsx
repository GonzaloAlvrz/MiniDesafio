import React from 'react'

export default function OptionsMovTv() {
  return (
    <div>
      {/* triangular figure */}
        <div class="h-6 w-6 dark:bg-slate-800 absolute origin-bottom-left top-[57px] left-[500px] rotate-45 transform  bg-white"></div>
      <div className="bg-white dark:bg-slate-800 w-48 absolute top-[80px] left-[420px] rounded-xl ">
        {/* Section Options */}
        <ul>
          <li className="my-3 ml-3 hover:text-[#17ABEB]">DC MOVIES</li>
          <li className="my-3 ml-3 hover:text-[#17ABEB]">DC SERIES</li>
          <li className="my-3 ml-3 hover:text-[#17ABEB]">DC ON HBO MAX</li>
        </ul>
      </div>
    </div>
  );
}
