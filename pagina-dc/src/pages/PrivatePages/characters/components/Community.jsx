import React from "react";

export default function Community() {
  return (
    <div className="h-[470px] w-full bg-red-600 my-3 flex justify-center items-center">
      <div className="flex flex-row">
        <div className="bg-yellow h-96 ">
          <h3>ENTER THE WORLD OF THE BATMAN</h3>
          <div>
            <ul className="flex flex-row text-xs">
              <li className="mr-1">
                <img
                  src="https://www.dc.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg?itok=-fikeSiI"
                  alt=""
                />
                <h4>Batman</h4>
              </li>
              <li className="mx-1">
                <img
                  src="https://www.dc.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Catwoman_5c47c984ed1d66.81377433.jpg?itok=zv1Ri5SJ"
                  alt=""
                />
                <h4>Catwoman</h4>
              </li>
              <li className="mx-1">
                <img
                  src="https://www.dc.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_AlfredPennyworth_5c40ddc7b0e412.20200112.jpg?itok=dFnOKlbW"
                  alt=""
                />
                <h4>Alfred Pennyworth</h4>
              </li>
              <li className="ml-1">
                <img
                  src="https://www.dc.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Riddler_5c53a3b5e01958.22326638.jpg?itok=gmsT-SfE"
                  alt=""
                />
                <h4>Riddler</h4>
              </li>
            </ul>
            <ul className="flex flex-row text-xs">
              <li className="mr-1">
                <img
                  src="https://www.dc.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Penguin_5c5250a8ad2683.23365592.jpg?itok=hyS37hnq"
                  alt=""
                />
                <h4>Batman</h4>
              </li>
              <li className="mx-1">
                <img
                  src="https://www.dc.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_JamesGordon_5c489d36ad53c6.78970822.jpg?itok=x8_IngVP"
                  alt=""
                />
                <h4>Catwoman</h4>
              </li>
              <li className="mx-1">
                <img
                  src="https://www.dc.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_CarmineFalcone_60cc324de5eec0.03209868.jpg?itok=9xti_rNg"
                  alt=""
                />
                <h4>Alfred Pennyworth</h4>
              </li>
              <li className="ml-1">
                <img
                  src="https://www.dc.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_SalMaroni_60dcd13785fb14.35144346.jpg?itok=UPcCcIQu"
                  alt=""
                />
                <h4>Riddler</h4>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-violet-400 h-96 w-96 ml-5">
          <div className="flex flex-row">
            <h2 className="mt-5 w-1/2 bg-neutral-600 text-3xl">COMMUNITY</h2>
            <h4 className="flex justify-end w-1/2 bg-red-200 mt-8">SEE ALL</h4>
          </div>
          <div>
            <div className="mb-3">
                <h4 className="text-extrabold text-lg">TRIVIA TUESDAY: DC PRIDE 2022</h4>
                <h5>JUN 7</h5>
                <p>Bring your Pride knowledge for this week's Trivia Tuesday!</p>
            </div>
            <div className="mb-3">
                <h4 className="text-lg">TRIVIA TUESDAY: DC PRIDE 2022</h4>
                <h5>JUN 7</h5>
                <p>Bring your Pride knowledge for this week's Trivia Tuesday!</p>
            </div>
            <div className="mb-3">
                <h4 className="text-lg">TRIVIA TUESDAY: DC PRIDE 2022</h4>
                <h5>JUN 7</h5>
                <p>Bring your Pride knowledge for this week's Trivia Tuesday!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}