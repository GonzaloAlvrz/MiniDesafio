import { React, useState } from "react";

export default function Alignment() {
  const [heroes, setHeroes] = useState(false);
  const clickHeroes = () => {
    setHeroes(!heroes);
  };

  const [complicated, seComplicated] = useState(false);
  const clickComplicated = () => {
    seComplicated(!complicated);
  };
  const [villains, setVillains] = useState(false);
  const clickVillains = () => {
    setVillains(!villains);
  };

  return (
   /*  options of Aligment */
    <div>
      <ul className="border-b-2 border-gray-200">
        <li className={heroes ? "text-[#0282F9]" : "text-black"}>
          Heroes <input onClick={clickHeroes} type="checkbox" name="" id="" />
        </li>
        <li className={complicated ? "text-[#0282F9]" : "text-black"}>
          It's Complicated
          <input
            onClick={clickComplicated}
            className="border-2 bg-black"
            type="checkbox"
          />
        </li>
        <li className={villains ? "text-[#0282F9]" : "text-black"}>
          Villains
          <input onClick={clickVillains} type="checkbox" name="" id="" />
        </li>
      </ul>
    </div>
  );
}
