import { React, useRef } from "react";

import Black from "./img/Black.svg";
import Yellow from "./img/Yellow.svg";

export default function ModoOsucuro({ modo, setModo }) {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const toggleDarkMode = useRef;
  const darkMode = toggleDarkMode(
    document.documentElement.className.includes("dark")
  );
  const changeDarkMode = () => {
    darkMode.value = document.documentElement.classList.toggle("dark");
    darkMode.value
      ? (localStorage.theme = "dark")
      : (localStorage.theme = "light");
  };
  return (
    <div onClick={changeDarkMode}>
      <div className=" " onClick={() => setModo(!modo)}>
        {modo ? (
          <img className="" src={Black} alt="" />
        ) : (
          <img src={Yellow} alt="" />
        )}
      </div>
    </div>
  );
}
