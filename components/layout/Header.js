import React from "react";
import Image from "next/image";
import { FaHeart, FaUserAlt } from "react-icons/fa";
import SearchBox from "./SearchBox";
// ----------
const Header = () => {
  return (
    <header className="w-full h-[680px] bg-hero-pattern bg-cover bg-no-repeat px-4 xl:px-0 header__banner_inset-shadow">
      <nav className=" max-w-7xl mx-auto pt-8 flex items-center justify-between">
        <div className="w-[85px] h-[21px] relative cursor-pointer">
          <Image
            src="https://cdn.jabama.com/original/statics/desktop/img/jabama-logo-white.d5a8ab5.svg"
            alt="jabama-logo"
            layout="fill"
          />
        </div>
        <div className="flex items-center">
          <button className=" pl-4 flex items-center">
            <span>
              <FaHeart className="w-3 h-3 md:w-4 md:h-4 text-white ml-1.5" />
            </span>
            <span className="text-xs md:text-sm text-white font-semibold">
              مورد علاقه‌ها
            </span>
          </button>
          <button className=" px-2 md:px-4 py-2  font-semibold bg-white rounded-lg flex items-center">
            <div className="flex items-center justify-center border boredr-gray-400 p-2 rounded-full ml-1.5">
              <FaUserAlt className="w-2 h-2 md:w-3 md:h-3 text-gray-400" />
            </div>
            <span className="text-xs md:text-sm  font-semibold text-gray-600">
              ورود یا ثبت‌نام
            </span>
          </button>
        </div>
      </nav>
      <SearchBox />
    </header>
  );
};

export default Header;
