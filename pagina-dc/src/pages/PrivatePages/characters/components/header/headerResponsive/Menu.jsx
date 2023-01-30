import { React, useState } from "react";
import { useAuth } from "../../../../../../context/authContext";
import { useNavigate } from "react-router-dom";
import ModoOscuro from "../../../../../../modoOscuro/ModoOscuro";
import { Link } from "react-router-dom";
export default function Menu() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/", { replace: true });
  };

  const [modo, setModo] = useState(false);
  return (
    <div className="absolute  top-11 left-0 w-full min-h-screen bg-white dark:bg-slate-800  border-t-2 border-gray-200 z-20 overflow-y-auto ">
      <div className="ml-5 mt-5">
        {/* sections */}
        <ul>
          {/* Dark mode */}
          <li className="flex flex-row text-[#17ABEB]">DARK MODE <ModoOscuro modo={modo} setModo={setModo} />: {modo ? 'ON' : 'OFF'}</li>
          {/* Log out */} 
          <li onClick={handleLogout} className='text-[#17ABEB]'>LOG OUT</li>

          <Link to="/account">
          <li className='text-[#17ABEB]'>ACCOUNT</li>
          </Link>
          <li>ALL SITES</li>
          <li>MENU</li>
          <li>CHARACTERS</li>
          <li>LATEST COMICS</li>
          <li>IMG</li>
          <li>ALL COMICS SERIES</li>
          <li>TOP STORYLINES</li>
          <li>SHOWCASE COLLECTIONS</li>
          <li>COMIC SHOP LOCATOR</li>
          <li>PRINT SUBSCRIPTIONS</li>
          <li>DC MOVIES</li>
          <li>DC SERIES</li>
          <li>IMG</li>
          <li>GAMES</li>
          <li>VIDEOS</li>
          <li>NEWS</li>
          <li>IMG</li>
          <li>MOST POPULAR</li>
          <li>NEW ARRIVALS</li>
          <li>SHOP ART OF THE BAT</li>
          <li>SHOP BATMAN</li>
          <li>SHOP HARLEY QUINN</li>
          <li>COMMUNITY</li>
          <li>DC FANDOME</li>
          <li>DC NFTS</li>
          <li>MY DC ORIGIN STORY</li>
        </ul>
        <ul>
          <li>DC ENTERTAINMENT INFO</li>
          <li>TERMS OF US</li>
          <li>PRIVACY (NEW)</li>
          <li>ADVERTETISING</li>
          <li>JOBS</li>
          <li>SUBSCRIPTIONS</li>
          <li>CPCS CERTIFICATES</li>
          <li>RATINGS</li>
          <li>SHOP HELP</li>
          <li className="mobile:pb-20">CONTACT US</li>
        </ul>
      </div>
    </div>
  );
}
