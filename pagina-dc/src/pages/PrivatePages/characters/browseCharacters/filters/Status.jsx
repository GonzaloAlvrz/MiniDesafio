import { React, useState } from "react";

export default function Alignment() {
  const [neww, setNeww] = useState(false);
  const clickNew = () => {
    setNeww(!neww);
  };

  const [updated, setUpdated] = useState(false);
  const clickUpdated = () => {
    setUpdated(!updated);
  };

  return (
    /* options of type */
    <div>
      <ul className="border-b-2 border-gray-200">
        <li className={neww ? "text-[#0282F9]" : "text-black"}>
          New <input onClick={clickNew} type="checkbox" name="" id="" />
        </li>
        <li className={updated ? "text-[#0282F9]" : "text-black"}>
          Updated{" "}
          <input
            onClick={clickUpdated}
            className="border-2 bg-black"
            type="checkbox"
            name=""
            id=""
          />
        </li>{" "}
      </ul>
    </div>
  );
}
