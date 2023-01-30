import React from "react";

export default function Who() {
  return (
    /* box with characters and their names */
    <div className="w-full mx-auto desktop-two:h-[600px]">
      <div className="flex justify-start flex-col desktop-two:ml-48 laptop:ml-14">
        <h5 className="text-[#0282F9] mobile:ml-4 ">WHO´S</h5>
        <h2 className="text-4xl text-[#0282F9] mobile:ml-4 ">WHO</h2>
      </div>
      <div className="flex justify-center items-center">
        <ul className="flex mobile:flex-row mobileM:flex-row mobile:mx-4 lap_tablet:mx-0">
          <div className="flex mobile:flex-col mobileM:flex-row">
            <li>
              <img
                className="desktop-two:h-96 laptop:h-72 lap_tablet:h-56 mobile:h-56"
                src="https://www.dc.com/sites/default/files/styles/whos_who/public/Char_WhosWho_Superman_20190116_5c3fc71f524f38.28405711.jpg?itok=342N-dja"
                alt=""
              />
              <h4 className="mobile:text-xs  mobile:text-center laptop:text-start laptop:text-base">
                SUPERMAN
              </h4>
            </li>

            <li>
              <img
                className="desktop-two:h-96 laptop:h-72 lap_tablet:h-56 mobile:h-56"
                src="https://www.dc.com/sites/default/files/styles/whos_who/public/Char_WhosWho_Batman_20190116_5c3fc4b40faf04.59002472.jpg?itok=eXehq-Ei"
                alt=""
              />
              <h4 className="mobile:text-xs  mobile:text-center laptop:text-start  laptop:text-base">
                BATMAN
              </h4>
            </li>
          </div>

          <div className="flex mobile:flex-col mobileM:flex-row">
            <li >
              <img
                className="desktop-two:h-96 laptop:h-72 lap_tablet:h-56 mobile:h-56"
                src="https://www.dc.com/sites/default/files/styles/whos_who/public/Char_WhosWho_WonderWoman_20190116_5c3fc6aa51d124.25659603.jpg?itok=kx42fT9H"
                alt=""
              />
              <h4 className="mobile:text-xs  mobile:text-center laptop:text-start laptop:text-base">
                WONDER WOMAN
              </h4>
            </li>

            <li>
              <img
                className="desktop-two:h-96 laptop:h-72 lap_tablet:h-56 mobile:h-56"
                src="https://www.dc.com/sites/default/files/styles/whos_who/public/Char_WhosWho_GreenLantern%2920200721_5f173adcedb982.94529743.jpg?itok=3jpwHy-h"
                alt=""
              />
              <h4 className="mobile:text-xs  mobile:text-center laptop:text-start laptop:text-base">
                GREEN LANTERN
              </h4>
            </li>
          </div>
          <div className="flex mobile:flex-col mobileM:flex-row">
            <li>
              <img
                className="desktop-two:h-96 laptop:h-72 lap_tablet:h-56 mobile:h-56"
                src="https://www.dc.com/sites/default/files/styles/whos_who/public/Char_WhosWho_Flash_20190116_5c3fcadbc6a963.74676553.jpg?itok=CXaNeAzA"
                alt=""
              />
              <h4 className="mobile:text-xs mobile:text-center laptop:text-start laptop:text-base">
                THE FLASHMAN
              </h4>
            </li>

            <li>
              <img
                className="desktop-two:h-96 laptop:h-72 lap_tablet:h-56 mobile:h-56"
                src="https://www.dc.com/sites/default/files/styles/whos_who/public/Char_WhosWho_Aquaman_5c411a95e710b9.62155274.jpg?itok=xX0wDSYt"
                alt=""
              />
              <h4 className="mobile:text-xs  mobile:text-center laptop:text-start laptop:text-base">
                AQUAMAN
              </h4>
            </li>
          </div>

          <li>
            <img
              className="desktop-two:h-96 laptop:h-72 lap_tablet:h-56 mobile:h-56"
              src="https://www.dc.com/sites/default/files/styles/whos_who/public/Char_WhosWho_Cyborg_20190116_5c3fcd9048a1a2.67778180.jpg?itok=N-UsHdT5"
              alt=""
            />
            <h4 className="mobile:text-xs  mobile:text-center laptop:text-start laptop:text-base">
              CYBORG
            </h4>
          </li>
        </ul>
      </div>
    </div>
  );
}
