import React from "react";

export default function Footer() {
  return (
    <div
      className="tablet:h-80 flex flex-row justify-center items-center "
      style={{
        backgroundImage:
          'url("https://www.dcuniverseinfinite.com/_nuxt/img/footer-background.d5aee1e.jpg")',
      }}
    >
      {/* options */}
      <div className=" tablet:h-64 w-2/3 text-white z-10 mobile:mt-3">
        <span className="text-sm">DC UNIVERSE LINKS</span>
        <div className="flex flex-row mb-6 mt-2">
          <a href="https://es-la.facebook.com/dc/" target="_blank">
            <div className="mr-2">
              <svg
                width="40"
                height="50"
                viewBox="0 0 51 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.75 25C46.75 13.5 37.23 4.16669 25.5 4.16669C13.77 4.16669 4.25 13.5 4.25 25C4.25 35.0834 11.56 43.4792 21.25 45.4167V31.25H17V25H21.25V19.7917C21.25 15.7709 24.5863 12.5 28.6875 12.5H34V18.75H29.75C28.5812 18.75 27.625 19.6875 27.625 20.8334V25H34V31.25H27.625V45.7292C38.3563 44.6875 46.75 35.8125 46.75 25Z"
                  fill="white"
                />
              </svg>
            </div>
          </a>
          <a href="https://www.instagram.com/dccomics/" target="_blank">
            <div className="mr-2">
              <svg
                width="40"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.5 25C32.5 26.9891 31.7098 28.8968 30.3033 30.3033C28.8968 31.7098 26.9891 32.5 25 32.5C23.0109 32.5 21.1032 31.7098 19.6967 30.3033C18.2902 28.8968 17.5 26.9891 17.5 25C17.5 24.5725 17.545 24.155 17.6225 23.75H15V33.7425C15 34.4375 15.5625 35 16.2575 35H33.745C34.0781 34.9993 34.3973 34.8666 34.6326 34.6308C34.8679 34.395 35 34.0756 35 33.7425V23.75H32.3775C32.455 24.155 32.5 24.5725 32.5 25ZM25 30C25.6568 29.9998 26.3071 29.8703 26.9138 29.6188C27.5205 29.3673 28.0718 28.9988 28.5361 28.5343C29.0003 28.0698 29.3686 27.5183 29.6198 26.9115C29.871 26.3046 30.0002 25.6543 30 24.9975C29.9998 24.3407 29.8703 23.6904 29.6188 23.0837C29.3673 22.477 28.9988 21.9257 28.5343 21.4614C28.0698 20.9972 27.5183 20.6289 26.9115 20.3777C26.3046 20.1265 25.6543 19.9973 24.9975 19.9975C23.6711 19.9978 22.3991 20.5251 21.4614 21.4632C20.5238 22.4014 19.9972 23.6736 19.9975 25C19.9978 26.3264 20.5251 27.5984 21.4632 28.5361C22.4014 29.4737 23.6736 30.0003 25 30ZM31 19.75H33.9975C34.1966 19.75 34.3877 19.6711 34.5287 19.5305C34.6698 19.3899 34.7493 19.1991 34.75 19V16.0025C34.75 15.8029 34.6707 15.6115 34.5296 15.4704C34.3885 15.3293 34.1971 15.25 33.9975 15.25H31C30.8004 15.25 30.609 15.3293 30.4679 15.4704C30.3268 15.6115 30.2475 15.8029 30.2475 16.0025V19C30.25 19.4125 30.5875 19.75 31 19.75ZM25 1C18.6348 1 12.5303 3.52856 8.02944 8.02944C3.52856 12.5303 1 18.6348 1 25C1 31.3652 3.52856 37.4697 8.02944 41.9706C12.5303 46.4714 18.6348 49 25 49C28.1517 49 31.2726 48.3792 34.1844 47.1731C37.0962 45.967 39.742 44.1992 41.9706 41.9706C44.1992 39.742 45.967 37.0962 47.1731 34.1844C48.3792 31.2726 49 28.1517 49 25C49 21.8483 48.3792 18.7274 47.1731 15.8156C45.967 12.9038 44.1992 10.258 41.9706 8.02944C39.742 5.80083 37.0962 4.033 34.1844 2.82689C31.2726 1.62078 28.1517 1 25 1ZM37.5 34.7225C37.5 36.25 36.25 37.5 34.7225 37.5H15.2775C13.75 37.5 12.5 36.25 12.5 34.7225V15.2775C12.5 13.75 13.75 12.5 15.2775 12.5H34.7225C36.25 12.5 37.5 13.75 37.5 15.2775V34.7225Z"
                  fill="white"
                />
              </svg>
            </div>
          </a>
          <a href="https://twitter.com/dccomics" target="_blank">
            <div className="mr-2">
              <svg
                width="40"
                height="50"
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_30_12)">
                  <path
                    d="M21.4999 0.859985C10.1006 0.859985 0.859863 10.1007 0.859863 21.5C0.859863 32.8993 10.1006 42.14 21.4999 42.14C32.8992 42.14 42.1399 32.8993 42.1399 21.5C42.1399 10.1007 32.8992 0.859985 21.4999 0.859985ZM29.8956 17.7676C29.9042 17.9439 29.9064 18.1202 29.9064 18.2922C29.9064 23.6672 25.8192 29.8613 18.3415 29.8613C16.1319 29.865 13.9683 29.2304 12.1108 28.0338C12.4269 28.0725 12.7515 28.0876 13.0805 28.0876C14.9854 28.0876 16.7376 27.4404 18.1287 26.3482C17.281 26.3316 16.4596 26.0509 15.779 25.5452C15.0983 25.0396 14.5924 24.3342 14.3318 23.5274C14.9405 23.6432 15.5677 23.6189 16.1657 23.4565C15.2456 23.2704 14.4182 22.7719 13.8237 22.0454C13.2293 21.3189 12.9044 20.4091 12.9042 19.4704V19.4209C13.4524 19.7241 14.0802 19.909 14.7467 19.9305C13.8841 19.3563 13.2735 18.4742 13.0397 17.4647C12.8059 16.4552 12.9666 15.3945 13.489 14.4996C14.5101 15.7552 15.7836 16.7823 17.2269 17.5146C18.6702 18.2468 20.2512 18.6677 21.8675 18.7501C21.662 17.8779 21.7505 16.9622 22.1191 16.1454C22.4877 15.3286 23.1158 14.6565 23.9059 14.2336C24.6959 13.8106 25.6035 13.6605 26.4876 13.8066C27.3718 13.9527 28.1828 14.3868 28.7948 15.0414C29.7046 14.8614 30.5771 14.5277 31.3748 14.0545C31.0716 14.9965 30.4367 15.7964 29.5882 16.3056C30.3941 16.2085 31.181 15.9919 31.9231 15.6627C31.378 16.4795 30.6914 17.1923 29.8956 17.7676Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
          </a>
          <a href="https://www.youtube.com/dc" target="_blank">
            <div className="mr-2">
              <svg
                width="40"
                height="50"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_51_27)">
                  <path
                    d="M11.6029 9.83302L9.3569 8.78502C9.1609 8.69402 8.9999 8.79602 8.9999 9.01302V10.987C8.9999 11.204 9.1609 11.306 9.3569 11.215L11.6019 10.167C11.7989 10.075 11.7989 9.92502 11.6029 9.83302ZM9.9999 0.400024C4.6979 0.400024 0.399902 4.69802 0.399902 10C0.399902 15.302 4.6979 19.6 9.9999 19.6C15.3019 19.6 19.5999 15.302 19.5999 10C19.5999 4.69802 15.3019 0.400024 9.9999 0.400024ZM9.9999 13.9C5.0859 13.9 4.9999 13.457 4.9999 10C4.9999 6.54302 5.0859 6.10002 9.9999 6.10002C14.9139 6.10002 14.9999 6.54302 14.9999 10C14.9999 13.457 14.9139 13.9 9.9999 13.9Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
          </a>
          <a href="https://www.tiktok.com/@dc?lang=en" target="_blank">
            <div className="mr-2">
              <svg
                className="rounded-full bg-white h-[40px] w-[40px] p-3 mt-1"
                width="40"
                height="20"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.44 2.82C11.7564 2.03962 11.3797 1.03743 11.38 0H8.29V12.4C8.26617 13.071 7.98287 13.7066 7.49977 14.1729C7.01666 14.6393 6.37145 14.8999 5.7 14.9C4.28 14.9 3.1 13.74 3.1 12.3C3.1 10.58 4.76 9.29 6.47 9.82V6.66C3.02 6.2 0 8.88 0 12.3C0 15.63 2.76 18 5.69 18C8.83 18 11.38 15.45 11.38 12.3V6.01C12.633 6.90985 14.1374 7.39265 15.68 7.39V4.3C15.68 4.3 13.8 4.39 12.44 2.82Z"
                  fill="black"
                />
              </svg>
            </div>
          </a>
          <a
            href="https://www.dc.com/?_ga=2.40709793.2088736271.1674495662-1233490191.1674221985"
            target="_blank"
          >
            <div>
              <svg
                className="h-[40px] w-[40px] p-1 mt-1 rounded-full bg-white"
                width="50"
                height="50"
                viewBox="0 0 75 75"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.29 27.469h6.736a3.404 3.404 0 0 1 3.406 3.405l.01 15.475a3.404 3.404 0 0 1-3.405 3.405h-4.122l-.01-20.127a.493.493 0 0 0-.207-.401l-2.407-1.757zM37.517 72.18c-10.943.011-20.705-5.053-27.071-12.97a.138.138 0 0 1 .108-.227l18.547-.011a.832.832 0 0 0 .477-.152l7.082-5.151a.493.493 0 0 0 .207-.401V23.793a.493.493 0 0 0-.207-.402l-7.093-5.15a.832.832 0 0 0-.477-.153L9.002 18.1c-.12 0-.184-.13-.12-.227C15.142 8.784 25.619 2.82 37.485 2.809c11.865-.011 22.353 5.953 28.611 15.04a.145.145 0 0 1-.119.229h-4.989a.442.442 0 0 0-.39.25L59.49 20.69l-3.373-2.45a.832.832 0 0 0-.477-.153h-7.983a.832.832 0 0 0-.477.152l-7.082 5.151a.493.493 0 0 0-.206.402l.01 29.464c0 .163.076.304.206.401l7.094 5.151a.832.832 0 0 0 .477.152l16.79-.01c.119 0 .184.14.108.227-6.356 7.927-16.117 12.992-27.06 13.002M5 25.95l3.243 2.354c.13.098.206.25.206.412l.01 27.285c0 .14-.184.195-.26.075a34.638 34.638 0 0 1-5.39-18.565c0-4.023.683-7.895 1.942-11.495.043-.087.162-.13.249-.065m42.722 1.496H57.81V33c0 .14.12.26.26.26h8.439a.304.304 0 0 0 .303-.26l1.67-10.541c.022-.141.207-.163.272-.044a34.53 34.53 0 0 1 3.449 15.074 34.557 34.557 0 0 1-4.339 16.82.138.138 0 0 1-.26-.065v-9.64c0-.142-.12-.261-.26-.261H58.09c-.14 0-.26.12-.26.26v5.13h-4.067a3.404 3.404 0 0 1-3.406-3.406l-.01-16.733a.493.493 0 0 0-.207-.4l-2.419-1.747zM37.484 0C16.768.01-.011 16.809 0 37.522.01 58.235 16.811 75.01 37.516 75 58.232 74.99 75.011 58.191 75 37.49 74.99 16.786 58.189-.01 37.484 0"
                  fill="black"
                />
              </svg>
            </div>
          </a>
        </div>
        <div className="flex flex-col z-10">
          <span className="mobile:text-sm lap_tablet:text-base">
            ?? 2023 Warner Bros. Entertainment Inc. All rights reserved.
          </span>
          <span className="mobile:text-sm lap_tablet:text-base">
            The DC logo and all DC characters and related elements ?? & TM DC.
          </span>
        </div>
        <div className="flex mobile:flex-col tablet:flex-row items-center mt-4 z-10">
          <div className="h-10 w-40 border-2 border-white flex items-center mr-2 hover:bg-white hover:text-black">
            <span className="mx-auto ">Help Center</span>
          </div>
          <div className="hover:border-2 hover:border-white h-10 w-40 flex items-center justify-center mx-2">
            <span className="underline ">Terms of use</span>
          </div>
          <div className="hover:border-2 hover:border-white h-10 w-40 flex items-center justify-center mx-2">
            <span className="underline ">Privacy Policy</span>
          </div>
          <div className="hover:border-2 hover:border-white h-10 w-40 flex items-center justify-center mx-2">
            <span className="underline ">Manage Prefences</span>
          </div>
          <div className="hover:border-2 hover:border-white h-10 w-40 flex items-center justify-center mx-2">
            <span className="underline ">Ad choices</span>
          </div>
          <div className="hover:border-2 hover:border-white h-10 w-40 flex items-center justify-center ml-2 mobile:mb-4 tablet:mb-0">
            <span className="underline ">Press Inquiries</span>
          </div>
        </div>
      </div>

      <div className="w-3/12 flex flex-col justify-center items-center mobile:hidden">
        <div>
          <svg
            className="fill-white/30"
            width="155"
            height="155"
            viewBox="0 0 75 75"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.29 27.469h6.736a3.404 3.404 0 0 1 3.406 3.405l.01 15.475a3.404 3.404 0 0 1-3.405 3.405h-4.122l-.01-20.127a.493.493 0 0 0-.207-.401l-2.407-1.757zM37.517 72.18c-10.943.011-20.705-5.053-27.071-12.97a.138.138 0 0 1 .108-.227l18.547-.011a.832.832 0 0 0 .477-.152l7.082-5.151a.493.493 0 0 0 .207-.401V23.793a.493.493 0 0 0-.207-.402l-7.093-5.15a.832.832 0 0 0-.477-.153L9.002 18.1c-.12 0-.184-.13-.12-.227C15.142 8.784 25.619 2.82 37.485 2.809c11.865-.011 22.353 5.953 28.611 15.04a.145.145 0 0 1-.119.229h-4.989a.442.442 0 0 0-.39.25L59.49 20.69l-3.373-2.45a.832.832 0 0 0-.477-.153h-7.983a.832.832 0 0 0-.477.152l-7.082 5.151a.493.493 0 0 0-.206.402l.01 29.464c0 .163.076.304.206.401l7.094 5.151a.832.832 0 0 0 .477.152l16.79-.01c.119 0 .184.14.108.227-6.356 7.927-16.117 12.992-27.06 13.002M5 25.95l3.243 2.354c.13.098.206.25.206.412l.01 27.285c0 .14-.184.195-.26.075a34.638 34.638 0 0 1-5.39-18.565c0-4.023.683-7.895 1.942-11.495.043-.087.162-.13.249-.065m42.722 1.496H57.81V33c0 .14.12.26.26.26h8.439a.304.304 0 0 0 .303-.26l1.67-10.541c.022-.141.207-.163.272-.044a34.53 34.53 0 0 1 3.449 15.074 34.557 34.557 0 0 1-4.339 16.82.138.138 0 0 1-.26-.065v-9.64c0-.142-.12-.261-.26-.261H58.09c-.14 0-.26.12-.26.26v5.13h-4.067a3.404 3.404 0 0 1-3.406-3.406l-.01-16.733a.493.493 0 0 0-.207-.4l-2.419-1.747zM37.484 0C16.768.01-.011 16.809 0 37.522.01 58.235 16.811 75.01 37.516 75 58.232 74.99 75.011 58.191 75 37.49 74.99 16.786 58.189-.01 37.484 0" />
          </svg>
        </div>
        <div className="text-white/30">
          <h2 className="text-5xl">UNIVERSE</h2>
          <h3 className="text-3xl text-center">INFINITE</h3>
        </div>
      </div>
    </div>
  );
}
