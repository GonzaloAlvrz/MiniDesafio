import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../../context/authContext";

export default function ComicPart({ clickContent }) {
  /* log out */
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/", { replace: true });
  };
  return (
    <div className="mx-auto">
      <div className="mobile:w-[356px]  tablet:w-[600px] mt-20 h-[400px]">
        <h2 className="mb-5 text-xl mobile:ml-2 mobileM:ml-0">COMICS</h2>
        <div
          onClick={clickContent}
          className="ml-4  mobile:w-[340px] tablet:w-[545px]  flex flex-row items-center"
        >
          <div className="mb-3 mobile:w-[310px] tablet:w-96 ">
            <h3 className="w-64 ">CONTENT VIEWERSHIP ALERTS</h3>
            <span className="text-xs ">None Selected</span>
          </div>
          <div className=" h-12  tablet:ml-[230px] flex justify-center items-center">
            <svg
              className="fill-black dark:fill-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.1499 21.1C6.8999 20.85 6.7749 20.554 6.7749 20.212C6.7749 19.8707 6.8999 19.575 7.1499 19.325L14.4749 12L7.1249 4.65C6.89157 4.41667 6.7749 4.125 6.7749 3.775C6.7749 3.425 6.8999 3.125 7.1499 2.875C7.3999 2.625 7.6959 2.5 8.0379 2.5C8.37924 2.5 8.6749 2.625 8.9249 2.875L17.3249 11.3C17.4249 11.4 17.4959 11.5083 17.5379 11.625C17.5792 11.7417 17.5999 11.8667 17.5999 12C17.5999 12.1333 17.5792 12.2583 17.5379 12.375C17.4959 12.4917 17.4249 12.6 17.3249 12.7L8.8999 21.125C8.66657 21.3583 8.37924 21.475 8.0379 21.475C7.6959 21.475 7.3999 21.35 7.1499 21.1Z" />
            </svg>
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-xl mobile:ml-2 mobileM:ml-0">PRIVACY</h2>
          <div className="ml-4   mobile:w-[330px] tablet:w-[550px]  flex flex-row items-center">
            <div>
              <h4 className="mb-3 text-xs h-14 w-full">
                To learn more about how we process information relating to you,
                and your rights relating to such information and how to exercise
                them, please visit the privacy policy applicable for your region
                here
              </h4>
            </div>
          </div>
        </div>
        {/* log out */}
        <div
          onClick={handleLogout}
          className="skew-x-[-25deg] w-40 h-12 flex justify-center items-center border-2 border-black hover:bg-black hover:text-white mx-auto mt-8"
        >
          <h4 className="skew-x-[25deg]">LOG OUT</h4>
        </div>
      </div>
    </div>
  );
}
