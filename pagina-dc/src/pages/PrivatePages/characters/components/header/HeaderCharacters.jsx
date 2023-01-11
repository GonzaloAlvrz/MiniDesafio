import {React, useState} from 'react'
import Icon from '../../img/header/dc-logo.svg'
import OptionsComicCharacters from '../header/OptionsComicCharacters';
import OptionsMoreCharacters from '../header/OptionsMoreCharacters';
import OptionsMovTvCharacters from '../header/OptionsMovTvCharacters';
import OptionsShopCharacters from '../header/OptionsShopCharacters';
import Search from '../../img/header/search.svg'
import {Link} from 'react-router-dom'

export default function HeaderCharacters() {
    const [optionsComics, setOptionsComics] = useState(false);
    const clickOptionsComics = () => {
      setOptionsComics(!optionsComics);
    };
    const [optionsMovTv, setOptionsMovTv] = useState(false);
    const clickOptionsMovTv = () => {
      setOptionsMovTv(!optionsMovTv);
    };
    const [optionsShop, setOptionsShop] = useState(false);
    const clickOptionsShop = () => {
      setOptionsShop(!optionsShop);
    };
    const [optionsMore, setOptionsMore] = useState(false);
    const clickOptionsMore = () => {
      setOptionsMore(!optionsMore);
    };
  return (
    <div className='h-32 w-full bg-yellow flex justify-center items-center flex-row z-10'>
       <Link to='/home'><div className='mr-7'><img src={Icon} alt="" /></div></Link>
       <div className="flex flex-row items-center">
          <h3 className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] hover:underline hover:underline-offset-[40px]">
            CHARACTERS
          </h3>
          <div className="flex flex-col">
            <button
              onClick={clickOptionsComics}
              className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] flex flex-row relative hover:underline hover:underline-offset-[40px] cursor-pointer"
            >
              COMICS
              <svg
                className="fill-[#17ABEB]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15L7 10H17L12 15Z" fill="" />
              </svg>
            </button>
            <div className='z-20'>{optionsComics ? <OptionsComicCharacters /> : ""}</div>
          </div>
          <div className="flex flex-col">
            <button
              onClick={clickOptionsMovTv}
              className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] hover:underline hover:underline-offset-[40px] flex flex-row"
            >
              MOVIES & TV
              <svg
                className="fill-[#17ABEB]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15L7 10H17L12 15Z" fill="" />
              </svg>
            </button>
            <div className='z-20'>{optionsMovTv ? <OptionsMovTvCharacters /> : ""}</div>
          </div>
          <h3 className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] hover:underline hover:underline-offset-[40px]">
            GAMES
          </h3>
          <h3 className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] hover:underline hover:underline-offset-[40px]">
            NEWS
          </h3>
          <h3 className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] hover:underline hover:underline-offset-[40px]">
            VIDEO
          </h3>
          <div className="flex flex-col">
            <button
              onClick={clickOptionsShop}
              className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] hover:underline hover:underline-offset-[40px] flex flex-row"
            >
              SHOP
              <svg
                className="fill-[#17ABEB]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15L7 10H17L12 15Z" fill="" />
              </svg>
            </button>
            <div className='z-20'>{optionsShop ? <OptionsShopCharacters /> : ""}</div>
          </div>
          <h3 className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] hover:underline hover:underline-offset-[40px]">
            COMMUNITY
          </h3>
          <div className="flex flex-col">
            <button
              onClick={clickOptionsMore}
              className="font-extrabold ml-2 mr-5 hover:text-[#17ABEB] hover:underline hover:underline-offset-[40px] flex flex-row"
            >
              MORE
              <svg
                className="fill-[#17ABEB]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 15L7 10H17L12 15Z" fill="" />
              </svg>
            </button>
            <div className='z-20'>{optionsMore ? <OptionsMoreCharacters /> : ""}</div>
          </div>
          <div className=" mx-4 flex ">
            <div className='b'><input type="text" placeholder='Search' className='w-20'/></div>
            <img src={Search} alt="search" className="relative left-2" />
          </div>

        </div>
    </div>
  )
}
