import { React, useState } from "react";
import Icon from "../../../img/header/dc-logo.svg";
import Search from "../../../img/header/search.svg";
import MenuIcon from "../../../img/header/menu.svg";
import Menu from "../headerResponsive/Menu";
import X from "../../../img/header/x.svg";

export default function HeaderResponsive() {
  const [menu, setMenu] = useState(false);
  const clickMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className=" mobile:flex  flex-row h-11  mobile:items-center  desktop-two:hidden bg-white">
      <div>
        <img src={Icon} alt="" className="h-10 ml-4" />
      </div>
      <div className="flex items-center">
        <img src={Search} alt="" className="absolute right-16" />
      </div>
      <div onClick={clickMenu}>
        {menu ? (
          <div className="flex items-center">
            <img src={X} alt="" className="absolute right-4" />
          </div>
        ) : (
          <div className="flex items-center">
            <img src={MenuIcon} alt="" className="absolute right-4" />
          </div>
        )}
      </div>
      <div>{menu ? <Menu /> : ""}</div>
    </div>
  );
}
