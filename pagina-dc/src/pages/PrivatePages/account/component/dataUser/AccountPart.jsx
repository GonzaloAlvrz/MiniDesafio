import { React } from "react";
import { useAuth } from "../../../../../context/authContext";

export default function AccountPart({
  clickEmail,
  clickPassword,
  clickSubscription,
  clickPayment,
}) {
  const { user } = useAuth();
  return (
    <>
      <div className=" mobile:w-[356px]  tablet:w-[600px]  mt-20 h-[400px]  mx-auto">
        <h2 className="mb-5 text-xl mobile:ml-2 mobileM:ml-0">ACCOUNT</h2>
        <div
          onClick={clickEmail}
          className="ml-4 mb-4 mobile:w-[330px] tablet:w-[550px] flex flex-row "
        >
          {/* show if the email is verificated */}
          <div className="mb-3">
            <h3>EMAIL</h3>
            <div className="mobile:w-[310px]  tablet:w-96 ">
              <span className="text-xs ">{user.email}</span>
            </div>
            <div className="text-xs">
              {user.emailVerified ? (
                <div className="text-[#43b636]">Email verificado</div>
              ) : (
                <div className="text-red-600">Email sin verificar</div>
              )}
            </div>
          </div>
          <div className=" h-20 w-10 mobile:ml-0  tablet:ml-32 flex justify-center items-center">
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
        <div
          onClick={clickPassword}
          className="ml-4 mb-5  w-[550px] flex flex-row  mobile:w-[330px] tablet:w-[550px]"
        >
          <div>
            <h3>PASSWORD</h3>
            <div className="mobile:w-[303px]  tablet:w-96">
              <span>********</span>
            </div>
          </div>
          <div>
            <div className=" h-12 w-10 tablet:ml-[130px] flex justify-center items-center mobile:ml-0">
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
        </div>
        <div onClick={clickSubscription}>
          <h2 className="mb-5 text-xl mobile:ml-2 mobileM:ml-0">
            SUBSCRIPTION
          </h2>
          <div className="flex flex-row ml-4 items-center  mobile:w-[330px] tablet:w-[550px] ">
            <div>
              <h4 className="mb-3 text-xs w-52 mobile:w-[310px]  tablet:w-96">
                Become a member today!
              </h4>
            </div>
            <div className=" h-12 w-10 mobile:ml-0 tablet:ml-[130px] flex justify-center items-center">
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
        </div>
        <div onClick={clickPayment}>
          <h2 className="mb-5 text-xl mobile:ml-2 mobileM:ml-0">
            PAYMENT METHOD
          </h2>
          <div className="ml-4 mobile:w-[330px] tablet:w-[550px] flex flex-row items-center">
            <div>
              <h4 className="mb-3 text-xs mobile:w-[310px]  tablet:w-96 ">
                You do not have active subscription
              </h4>
            </div>
            <div className=" h-12 w-10  flex justify-center items-center mobile:ml-0 tablet:ml-[130px]">
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
        </div>
      </div>
    </>
  );
}
