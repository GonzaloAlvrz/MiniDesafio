import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../../../context/authContext";
import { Link } from "react-router-dom";
export default function OptionsAccount({styles}) {
      /* LOG OUT */
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/", { replace: true });
  };
  return (
    <div>
        <div class={`h-6 w-6  absolute origin-bottom-left  rotate-45 transform  bg-white ${styles}`}></div>
      <div className="bg-white  h-40 w-44 rounded-lg drop-shadow-lg">
        {/*  options */}
        <ul className="ml-4 cursor-pointer text-black">
        <Link to='/profile'><li className="text-lg mb-2 pt-4 hover:text-[#0074E8]">MY DC</li></Link> 
        <Link to='/profile'><li className="text-lg mb-2 hover:text-[#0074E8]">INBOX</li></Link>
        <Link to='/account'><li className="text-lg mb-2 hover:text-[#0074E8]">SETTINGS</li></Link>
        {/* LOG OUT */}
          <li onClick={handleLogout} className="text-lg mb-2 pb-4 hover:text-[#0074E8]">LOG OUT</li>
        </ul>
      </div>
    </div>
  );
}
