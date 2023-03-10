import { React, useState } from "react";
import { useAuth } from "../../../../../context/authContext";
import Menu from "../../menu.jsx/Menu";
import Icon from "../img/header/icon.svg";
import OptionsAccount from "./component/OptionsAccount";
import { Link } from "react-router-dom";
import ModoOscuro from "../../../../../modoOscuro/ModoOscuro";

export default function Header() {
  const { user } = useAuth();
  const [menu, setMenu] = useState(false);
  const clickMenu = () => {
    setMenu(!menu);
  };
  const [options, setOptions] = useState(false);
  const clickOptions = () => {
    setOptions(!options);
  };

  const [modo, setModo] = useState(false);
  return (
    <div>
      <div className="mobile:hidden laptop:block z-40 sticky top-0 bg-white ">
        <div className="h-20 w-full  flex items-center  ">
          {/* icon DC */}
          <div className="ml-24">
          <Link to='/characters'><img src={Icon} alt="Icon" /></Link>
          </div>
          {/* Dark mode */}
          <div className="ml-5">
            <ModoOscuro modo={modo} setModo={setModo} />
          </div>
          <div>
            <Link to="/404-not-found-Error">
              <h3 className="ml-14 text-black hover:text-[#0074E8]">BROWSE COMICS</h3>
            </Link>
          </div>
          {/* icon search */}
          <div className="absolute right-[420px]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.146 12.371 1.888 11.113C0.629333 9.85433 0 8.31667 0 6.5C0 4.68333 0.629333 3.14567 1.888 1.887C3.146 0.629 4.68333 0 6.5 0C8.31667 0 9.85433 0.629 11.113 1.887C12.371 3.14567 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.81267 10.5627 9.688 9.688C10.5627 8.81267 11 7.75 11 6.5C11 5.25 10.5627 4.18733 9.688 3.312C8.81267 2.43733 7.75 2 6.5 2C5.25 2 4.18733 2.43733 3.312 3.312C2.43733 4.18733 2 5.25 2 6.5C2 7.75 2.43733 8.81267 3.312 9.688C4.18733 10.5627 5.25 11 6.5 11Z"
                fill="black"
              />
            </svg>
          </div>
          {/* user picture */}
          <div
            onClick={clickOptions}
            className="absolute right-80 cursor-pointer"
          >
            {user.photoURL === null ? (
              <div>
                <img
                  src="https://www.dcuniverseinfinite.com/st/img/mydc.png"
                  className="h-12"
                  alt=""
                />
              </div>
            ) : (
              <img
                className="rounded-full h-12"
                src={user.photoURL}
                alt="pic user"
              />
            )}
          </div>
          {/* user email */}
          <div
            onClick={clickOptions}
            className="absolute right-6  w-72 text-start cursor-pointer"
          >
            <div className="text-black">{user.email}</div>
          </div>
          {/* options */}
          <div>
            {options ? (
              <div className="absolute right-32 top-24">
                <OptionsAccount styles=" bottom-40 right-20" />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {/* Responsive */}
      <div className="mobile:block laptop:hidden">
        <div className="h-16 w-full  flex items-center z-30 bg-white dark:bg-slate-800  fixed border-b-2 border-black">
          {/* Icon DC */}
          <Link to="/characters">
            <div className="ml-5">
              <svg
                className="fill-[#0074E8]"
                width="35"
                height="35"
                viewBox="0 0 75 75"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.29 27.469h6.736a3.404 3.404 0 0 1 3.406 3.405l.01 15.475a3.404 3.404 0 0 1-3.405 3.405h-4.122l-.01-20.127a.493.493 0 0 0-.207-.401l-2.407-1.757zM37.517 72.18c-10.943.011-20.705-5.053-27.071-12.97a.138.138 0 0 1 .108-.227l18.547-.011a.832.832 0 0 0 .477-.152l7.082-5.151a.493.493 0 0 0 .207-.401V23.793a.493.493 0 0 0-.207-.402l-7.093-5.15a.832.832 0 0 0-.477-.153L9.002 18.1c-.12 0-.184-.13-.12-.227C15.142 8.784 25.619 2.82 37.485 2.809c11.865-.011 22.353 5.953 28.611 15.04a.145.145 0 0 1-.119.229h-4.989a.442.442 0 0 0-.39.25L59.49 20.69l-3.373-2.45a.832.832 0 0 0-.477-.153h-7.983a.832.832 0 0 0-.477.152l-7.082 5.151a.493.493 0 0 0-.206.402l.01 29.464c0 .163.076.304.206.401l7.094 5.151a.832.832 0 0 0 .477.152l16.79-.01c.119 0 .184.14.108.227-6.356 7.927-16.117 12.992-27.06 13.002M5 25.95l3.243 2.354c.13.098.206.25.206.412l.01 27.285c0 .14-.184.195-.26.075a34.638 34.638 0 0 1-5.39-18.565c0-4.023.683-7.895 1.942-11.495.043-.087.162-.13.249-.065m42.722 1.496H57.81V33c0 .14.12.26.26.26h8.439a.304.304 0 0 0 .303-.26l1.67-10.541c.022-.141.207-.163.272-.044a34.53 34.53 0 0 1 3.449 15.074 34.557 34.557 0 0 1-4.339 16.82.138.138 0 0 1-.26-.065v-9.64c0-.142-.12-.261-.26-.261H58.09c-.14 0-.26.12-.26.26v5.13h-4.067a3.404 3.404 0 0 1-3.406-3.406l-.01-16.733a.493.493 0 0 0-.207-.4l-2.419-1.747zM37.484 0C16.768.01-.011 16.809 0 37.522.01 58.235 16.811 75.01 37.516 75 58.232 74.99 75.011 58.191 75 37.49 74.99 16.786 58.189-.01 37.484 0" />
              </svg>
            </div>
          </Link>
          {/* search icon */} 
          <div className="flex items-center">
            {menu ? (
              ""
            ) : (
              <div className="absolute right-16  ">
                <svg
                  className="fill-black dark:fill-white"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.146 12.371 1.888 11.113C0.629333 9.85433 0 8.31667 0 6.5C0 4.68333 0.629333 3.14567 1.888 1.887C3.146 0.629 4.68333 0 6.5 0C8.31667 0 9.85433 0.629 11.113 1.887C12.371 3.14567 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.81267 10.5627 9.688 9.688C10.5627 8.81267 11 7.75 11 6.5C11 5.25 10.5627 4.18733 9.688 3.312C8.81267 2.43733 7.75 2 6.5 2C5.25 2 4.18733 2.43733 3.312 3.312C2.43733 4.18733 2 5.25 2 6.5C2 7.75 2.43733 8.81267 3.312 9.688C4.18733 10.5627 5.25 11 6.5 11Z" />
                </svg>
              </div>
            )}
          </div>
          {/* icon menu */}
          <div onClick={clickMenu} className="absolute right-5 ">
            <div>
              {menu ? (
                <svg
                  className="fill-black dark:fill-white"
                  width="24"
                  height="24"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.706 10.5366C13.7992 10.6163 13.8731 10.7109 13.9236 10.8151C13.974 10.9192 14 11.0309 14 11.1437C14 11.2565 13.974 11.3682 13.9236 11.4724C13.8731 11.5766 13.7992 11.6712 13.706 11.7508C13.5173 11.9105 13.263 12 12.9979 12C12.7328 12 12.4785 11.9105 12.2898 11.7508L7 7.21538L1.71019 11.7508C1.52155 11.9105 1.26716 12 1.0021 12C0.737049 12 0.48266 11.9105 0.294019 11.7508C0.200825 11.6712 0.126881 11.5766 0.0764264 11.4724C0.0259721 11.3682 0 11.2565 0 11.1437C0 11.0309 0.0259721 10.9192 0.0764264 10.8151C0.126881 10.7109 0.200825 10.6163 0.294019 10.5366L5.58383 6.00116L0.294019 1.46569C0.106223 1.30468 0.000720407 1.08629 0.000720407 0.858583C0.000720407 0.745832 0.0266221 0.634186 0.0769463 0.530017C0.127271 0.425849 0.201032 0.3312 0.294019 0.251473C0.387006 0.171746 0.497398 0.108504 0.618891 0.0653558C0.740385 0.022208 0.8706 0 1.0021 0C1.26769 0 1.52239 0.0904577 1.71019 0.251473L7 4.78694L12.2898 0.251473C12.4776 0.0904577 12.7323 0 12.9979 0C13.2635 0 13.5182 0.0904577 13.706 0.251473C13.8938 0.412489 13.9993 0.630873 13.9993 0.858583C13.9993 1.08629 13.8938 1.30468 13.706 1.46569L8.41617 6.00116L13.706 10.5366Z" />
                </svg>
              ) : (
                <svg
                  className="fill-black dark:fill-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" />
                </svg>
              )}
            </div>
          </div>
          {/* show the menu */}
          <div>{menu ? <Menu /> : ""}</div>
        </div>
      </div>
    </div>
  );
}
