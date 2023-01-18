import {React, useState} from "react";
import MenuIcon from "./img/menu.svg";
import Icon from './img/dc-logo.svg'
import Search from './img/search.svg'
import Menu from "./Menu";

export default function HeaderResponsive() {
  const [menu, setMenu] = useState(false);
  const clickMenu = () =>{
    setMenu(!menu)
  }

  
  return (
    <div className="bg-white w-full h-11 mobile:flex mobile:items-center desktop-two:hidden mobile:block relative  mobile:bottom-28 tablet:bottom-20 desktop-one:bottom-0">
      <div>
        <img onClick={clickMenu} src={MenuIcon} alt="" className="h-10 ml-4 " />
      </div>
      <div className="mx-auto">
        <img src={Icon} alt="" className="h-10 relative mobile:right-7" />
      </div>
      <div className="flex items-center">
        <img src={Search} alt=""  className="absolute right-4"/>
      </div>
      <div className="">
      {menu ? <Menu/> : ''} 
      </div>
    </div>
  );
}
