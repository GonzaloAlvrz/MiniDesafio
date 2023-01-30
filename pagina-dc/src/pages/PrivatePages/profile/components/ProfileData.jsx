import { React, useState } from "react";
import { useAuth } from "../../../../context/authContext";
import Inbox from "./Inbox";
import Library from "./Library";
import Community from "./Community";
import { Link } from "react-router-dom";

export default function ProfileData() {
  const { user } = useAuth();
  const [library, setLibrary] = useState(false);
  const clickLibrary = () => {
    setLibrary(!library);
  };
  const [inbox, setInbox] = useState(false);
  const clickInbox = () => {
    setInbox(!inbox);
  };
  const [community, setCommunity] = useState(false);
  const clickCommunity = () => {
    setCommunity(!community);
  };

  return (
    <div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          {/* user picture */}
          <div className="h-32 w-32  relative bottom-9  tablet:left-12 flex justify-center items-center">
            {user.photoURL === null ? (
              <div>
                <img
                  src="https://www.dcuniverseinfinite.com/st/img/mydc.png"
                  className="h-24"
                  alt=""
                />
              </div>
            ) : (
              <img
                className="rounded-full h-24"
                src={user.photoURL}
                alt="pic user"
              />
            )}
          </div>
          {/* Show the name if is an account from google or only the email if is an account created with a email */}
          <div className="mobile:ml-4 tablet:ml-16 text-2xl relative bottom-7">
            {user.displayName === null ? (
              <div>{user.email}</div>
            ) : (
              <div>{user.displayName}</div>
            )}
          </div>
         {/*  show when was created the account */}
          <div className="mobile:ml-4 tablet:ml-16 ">
            <h3>MEMBER SINCE: {user.metadata.creationTime}</h3>
          </div>
        </div>

        <Link to="/account">
          <div className="absolute mobile:right-16 tablet:right-32 flex  flex-col">
            <svg
              className="mx-auto mobile:h-[40px] mobile:[40px]  fill-black dark:fill-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.5901 15.5L17.7701 14.2C18.0701 13.12 18.0901 11.95 17.7701 10.78L19.5901 9.5L18.1401 7L16.1101 7.92C15.3201 7.12 14.3201 6.5 13.1501 6.21L12.9501 4H10.0501L9.85008 6.21C8.68008 6.5 7.68008 7.12 6.89008 7.92L4.86008 7L3.41008 9.5L5.23008 10.78C4.91008 11.95 4.93008 13.12 5.23008 14.2L3.41008 15.5L4.86008 18L6.89008 17.07C7.68008 17.86 8.68008 18.46 9.85008 18.77L10.0501 21H12.9501L13.1501 18.77C14.3201 18.46 15.3201 17.86 16.1101 17.07L18.1401 18L19.5901 15.5ZM13.5001 3C13.7701 3 14.0001 3.2 14.0001 3.46L14.1801 5.5C14.9401 5.78 15.6201 6.19 16.2301 6.68L18.0801 5.81C18.3101 5.69 18.6001 5.77 18.7401 6L20.7401 9.5C20.8801 9.71 20.8001 10 20.5801 10.15L18.9101 11.32C19.0401 12.12 19.0301 12.91 18.9101 13.68L20.5801 14.85C20.8001 15 20.8801 15.29 20.7401 15.5L18.7401 19C18.6001 19.21 18.3101 19.29 18.0801 19.17L16.2301 18.31C15.6201 18.8 14.9401 19.2 14.1801 19.5L14.0001 21.5C14.0001 21.79 13.7701 22 13.5001 22H9.50008C9.36747 22 9.24029 21.9473 9.14652 21.8536C9.05276 21.7598 9.00008 21.6326 9.00008 21.5L8.82008 19.5C8.06008 19.2 7.38008 18.8 6.77008 18.31L4.92008 19.17C4.69008 19.29 4.40008 19.21 4.26008 19L2.26008 15.5C2.12008 15.29 2.20008 15 2.42008 14.85L4.09008 13.68C3.97008 12.91 3.96008 12.12 4.09008 11.32L2.42008 10.15C2.20008 10 2.12008 9.71 2.26008 9.5L4.26008 6C4.40008 5.77 4.69008 5.69 4.92008 5.81L6.77008 6.68C7.38008 6.19 8.06008 5.78 8.82008 5.5L9.00008 3.46C9.00008 3.2 9.23008 3 9.50008 3H13.5001ZM11.5001 9C12.4283 9 13.3186 9.36875 13.975 10.0251C14.6313 10.6815 15.0001 11.5717 15.0001 12.5C15.0001 13.4283 14.6313 14.3185 13.975 14.9749C13.3186 15.6313 12.4283 16 11.5001 16C10.5718 16 9.68158 15.6313 9.02521 14.9749C8.36883 14.3185 8.00008 13.4283 8.00008 12.5C8.00008 11.5717 8.36883 10.6815 9.02521 10.0251C9.68158 9.36875 10.5718 9 11.5001 9ZM11.5001 10C10.837 10 10.2012 10.2634 9.73231 10.7322C9.26347 11.2011 9.00008 11.837 9.00008 12.5C9.00008 13.163 9.26347 13.7989 9.73231 14.2678C10.2012 14.7366 10.837 15 11.5001 15C12.1631 15 12.799 14.7366 13.2678 14.2678C13.7367 13.7989 14.0001 13.163 14.0001 12.5C14.0001 11.837 13.7367 11.2011 13.2678 10.7322C12.799 10.2634 12.1631 10 11.5001 10Z" />
            </svg>
            <h4 className="text-center mobile:text-xs tablet:text-sm">
              SETTINGS
            </h4>
          </div>
        </Link>
        <Link to="/404-not-found-Error">
          <div className="absolute mobile:right-2 tablet:right-10">
            <svg
              className="mx-auto mobile:h-[40px] mobile:[40px] fill-black dark:fill-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 17V16H13V13H16V15H18V17H17V19H15V21H13V18H15V17H16ZM21 21H17V19H19V17H21V21ZM3 3H11V11H3V3ZM13 3H21V11H13V3ZM3 13H11V21H3V13ZM18 13H21V15H18V13ZM6 6V8H8V6H6ZM6 16V18H8V16H6ZM16 6V8H18V6H16Z" />
            </svg>
            <h4 className="text-center mobile:text-xs tablet:text-sm">
              QR CODE
            </h4>
          </div>
        </Link>
      </div>
      <div>
        <div className="flex flex-row mobile:ml-4 tablet:ml-16 mt-12">
          <span
            onClick={clickLibrary}
            className={
              library
                ? "underline-offset-[15px] mb-12 underline  decoration-[#17ABEB] cursor-pointer"
                : " cursor-pointer mb-12"
            }
          >
            LIBRARY
          </span>
          <span
            onClick={clickInbox}
            className={
              inbox
                ? "underline-offset-[15px] mb-12 underline decoration-[#17ABEB] cursor-pointer mx-4"
                : " cursor-pointer mb-12 mx-4"
            }
          >
            INBOX
          </span>
          <span
            onClick={clickCommunity}
            className={
              community
                ? "underline-offset-[15px] mb-12 underline decoration-[#17ABEB] cursor-pointer"
                : " cursor-pointer mb-12"
            }
          >
            COMMUNITY
          </span>
        </div>
        <div>
          {library ? <Library /> : ""}
          {inbox ? <Inbox /> : ""}
          {community ? <Community /> : ""}
        </div>
      </div>
    </div>
  );
}
