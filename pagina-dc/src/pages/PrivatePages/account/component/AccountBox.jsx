import React from "react";
import Cva from "./dataUser/Cva";
import { Link } from "react-router-dom";
export default function AccountBox({ setBox, title, subTitle,currentEmail, text, button,styles, content}) {

  return (
    <div className="z-30 relative mobile:bottom-[1200px] tablet:bottom-[1130px]  desktop-two:bottom-[650px] flex justify-center ">
      <div className="tablet:h-[400px] tablet:w-[650px] mobile:w-full mobile:h-screen bg-white dark:bg-slate-800  fixed drop-shadow-2xl border-2 border-black">
        
        <div className="flex flex-row w-full">
          <div className="mx-auto mt-5 ">
             <h2 className="text-center ml-12 text-2xl">{title}</h2> 
          </div>
          {/* icon x */}
          <div>
            <svg
              onClick={() => setBox(false)}
              className="fill-black dark:fill-white mr-5 mt-5"
              width="28"
              height="24"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.706 10.5366C13.7992 10.6163 13.8731 10.7109 13.9236 10.8151C13.974 10.9192 14 11.0309 14 11.1437C14 11.2565 13.974 11.3682 13.9236 11.4724C13.8731 11.5766 13.7992 11.6712 13.706 11.7508C13.5173 11.9105 13.263 12 12.9979 12C12.7328 12 12.4785 11.9105 12.2898 11.7508L7 7.21538L1.71019 11.7508C1.52155 11.9105 1.26716 12 1.0021 12C0.737049 12 0.48266 11.9105 0.294019 11.7508C0.200825 11.6712 0.126881 11.5766 0.0764264 11.4724C0.0259721 11.3682 0 11.2565 0 11.1437C0 11.0309 0.0259721 10.9192 0.0764264 10.8151C0.126881 10.7109 0.200825 10.6163 0.294019 10.5366L5.58383 6.00116L0.294019 1.46569C0.106223 1.30468 0.000720407 1.08629 0.000720407 0.858583C0.000720407 0.745832 0.0266221 0.634186 0.0769463 0.530017C0.127271 0.425849 0.201032 0.3312 0.294019 0.251473C0.387006 0.171746 0.497398 0.108504 0.618891 0.0653558C0.740385 0.022208 0.8706 0 1.0021 0C1.26769 0 1.52239 0.0904577 1.71019 0.251473L7 4.78694L12.2898 0.251473C12.4776 0.0904577 12.7323 0 12.9979 0C13.2635 0 13.5182 0.0904577 13.706 0.251473C13.8938 0.412489 13.9993 0.630873 13.9993 0.858583C13.9993 1.08629 13.8938 1.30468 13.706 1.46569L8.41617 6.00116L13.706 10.5366Z" />
            </svg>
          </div>
        </div>
        <div>
          {content ? (<div><Cva/></div>): (<div></div>)}
        </div>
        <div className="w-[550px] mx-auto mt-20  mobile:px-3">
          <h3 className="text-xs">{subTitle}</h3>
          <span>{currentEmail}</span>
          <h3 className=" mt-6 tablet:text-center mobile:px-16 tablet:mx-auto tablet:px-0 mobile:w-80" >{text}</h3>
        </div>
        <div className="flex justify-center mt-3">
        <Link to='/404-not-found-Error'> <button className={`w-64  h-12 border-2 border-black ${styles}`}>{button}</button></Link> 
        </div>


      </div>
    </div>
  );
}
