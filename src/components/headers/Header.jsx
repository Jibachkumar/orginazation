import { useState } from 'react'
import { FaHome, FaFileAlt, FaSearch, FaNewspaper, FaInfoCircle  } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function NavItem({ icon, label, to }) {
  return (
    <NavLink
    to={to}
      className={({isActive}) => `flex items-center text-[15px] text-[#3a7ab5] font-normal gap-x-2 cursor-pointer pb-2 lg:px-[50px] md:px-5
        ${isActive ? "border-b-6 border-[#3a7ab5]" : " hover:hover:bg-slate-200"
      }`}
    >
       <span className="text-[17px] py-2">{icon}</span>
      <span className="py-2">{label}</span>
    </NavLink>
  );
}

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-lg fixed w-full z-50">
          <div className="max-w-6xl border-b border-slate-200 mx-auto px-2 py-2 flex items-center justify-between relative">
           <div className="flex w-full items-center justify-center sm:justify-start gap-3">
              <div className="w-14 h-14 flex justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0X-g0cYfQ2eaW9M9q7pzvhyWbKJ7gEu4Xg&s"
                  alt="logo"
                  className="object-cover"
                />
              </div>

              <h1 className="hidden lg:block text-slate-900 lg:mx-auto text-sm lg:text-[15px] leading-tight">
                Mauritius Business Licensing Platform
              </h1>
            </div>

            <div className="flex items-center gap-3">
              {/* 🔍 Mobile-only search icon */}
              <button className="md:hidden p-2 absolute right-4 rounded-full hover:bg-gray-200">
                <FaSearch className="text-[#3a7ab5] text-2xl" />
              </button>

              {/* 💻 Desktop content */}
              <div className="hidden md:flex items-center gap-3">
                {/* Search box */}
                <div className="relative w-full">
                  <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />

                  <input
                    type="text"
                    placeholder="Search"
                    className="w-[260px] bg-gray-50 border border-slate-300 rounded-sm pl-10 pr-3 py-2 text-sm focus:outline-none"
                  />
                </div>

                {/* Buttons */}
                <button className="px-3 py-1.5 text-[#3a7ab5] font-normal font-mono hover:bg-[#3a7ab5] hover:text-white">
                  REGISTER
                </button>
                <button className="text-[#3a7ab5] px-3 py-1.5 font-mono font-normal hover:bg-[#3a7ab5] hover:text-white">
                  LOGIN
                </button>
              </div>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl text-[#3a7ab5] absolute left-4">
              <BsThreeDotsVertical   />
            </button>
          </div>

          <nav className={`${menuOpen ? "block" : "hidden"} md:block`}>
            <div className="max-w-5xl mx-auto px-1 flex flex-col md:flex-row md:items-center gap-3 text-sm">
              <NavItem to="/" icon={<FaHome/>} label="Home"/>
              <NavItem to="/licensing" icon={<FaFileAlt />} label="Licensing" />
              <NavItem to="/searchpermits" icon={<FaSearch />} label="Search Permits" />
              <NavItem to="/news" icon={<FaNewspaper />} label="News" />
              <NavItem to="/faqs" icon={<FaInfoCircle />} label="FAQ's & Notices" />
            </div>
          </nav>
    </header>
  )
}

export default Header