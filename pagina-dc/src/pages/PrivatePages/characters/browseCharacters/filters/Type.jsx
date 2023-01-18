import { React, useState } from "react";

export default function Alignment() {
  const [individuals, setIndividuals] = useState(false);
  const clickIndividuals = () => {
    setIndividuals(!individuals);
  };

  const [places, setPlaces] = useState(false);
  const clickPlaces = () => {
    setPlaces(!places);
  };
  const [teams, setTeams] = useState(false);
  const clickTeams = () => {
    setTeams(!teams);
  };

  return (
    <div>
      <ul className="border-b-2 border-gray-200">
        <li className={individuals ? "text-[#0282F9]" : "text-black"}>
          Individuals{" "}
          <input onClick={clickIndividuals} type="checkbox" name="" id="" />
        </li>
        <li className={places ? "text-[#0282F9]" : "text-black"}>
          It's Complicated{" "}
          <input
            onClick={clickPlaces}
            className="border-2 bg-black"
            type="checkbox"
            name=""
            id=""
          />
        </li>
        <li className={teams ? "text-[#0282F9]" : "text-black"}>
          Villains <input onClick={clickTeams} type="checkbox" name="" id="" />
        </li>
      </ul>
    </div>
  );
}
