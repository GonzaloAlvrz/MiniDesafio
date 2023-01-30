import { React, useState } from "react";
import { useAuth } from "../../../../context/authContext";
import Options from "../component/header/component/Options";
import ModoOscuro from '../../../../modoOscuro/ModoOscuro'
import { Link } from "react-router-dom";

export default function Menu() {
  const { user } = useAuth();
  const [options, setOptions] = useState(false);
  const clickOptions = () => {
    setOptions(!options);
  };
  const [modo, setModo] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-800  w-full h-screen absolute top-[64px] right-0">
      <div>
        {/* sections */}
        <ul className="mt-6 ml-6">
        <li className="text-lg pb-3 flex lfex-row">DARK MODE <ModoOscuro modo={modo} setModo={setModo} />: {modo ? 'ON' : 'OFF'}</li>
        <Link to='/404-not-found-Error'> <li className="text-lg pb-3">BROWSE COMICS</li></Link> 
        <Link to='/404-not-found-Error'> <li className="text-lg pb-3">COMMUNITY</li></Link>
        <Link to='/404-not-found-Error'><li className="text-lg pb-3">SHOP</li></Link> 
        <a href="https://www.hbomax.com/ar/es" target="_blank" ><li className="text-lg pb-3">DC ON HBO MAX</li></a>
        </ul>
      </div>
      <div className="flex flex-col  mt-3 border-y-2 border-black py-5">
        <div className=" flex flex-row items-center ">
          {/* user picture */}
          <div onClick={clickOptions} className="ml-6">
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
         {/*  user email */}
          <div onClick={clickOptions} className="ml-3">
            <h3>{user.email}</h3>
          </div>
          {/* icon options */}
          <div onClick={clickOptions}>
            <svg
              className="fill-black dark:fill-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 15L7 10H17L12 15Z" />
            </svg>
          </div>
        </div>
        {/* show options */}
        <div className="ml-24">
          {options ? <Options styles="top-[242px] left-[165px]" /> : ""}
        </div>
      </div>
      <div className="flex flex-row items-center h-28 ml-6">
        <div>
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
        <div className="mx-5">
          <span>THE LARGEST COLLECTION OF DC COMICS ANYWHERE!</span>
        </div>
      </div>
    </div>
  );
}
