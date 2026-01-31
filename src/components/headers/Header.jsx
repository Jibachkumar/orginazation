import { useState } from 'react'
import { FaHome, FaFileAlt, FaSearch, FaNewspaper, FaQuestionCircle, FaBars  } from "react-icons/fa";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
          <div className="max-w-7xl font-serif mx-auto px-4 py-3 flex items-center justify-between relative">
           <div className="flex w-full items-center justify-center sm:justify-start gap-3">
              <div className="w-16 h-16 flex justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0X-g0cYfQ2eaW9M9q7pzvhyWbKJ7gEu4Xg&s"
                  alt="logo"
                  className="object-cover"
                />
              </div>

              <h1 className="hidden sm:block text-sm md:text-md font-medium leading-tight">
                Mauritius Business Licensing Platform
              </h1>
            </div>

            <div className="flex items-center gap-3">
              {/* 🔍 Mobile-only search icon */}
              <button className="md:hidden p-2 absolute left-5 rounded-full hover:bg-gray-200">
                <FaSearch className="text-gray-600 text-lg" />
              </button>

              {/* 💻 Desktop content */}
              <div className="hidden md:flex items-center gap-3">
                {/* Search box */}
                <div className="relative w-full">
                  <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />

                  <input
                    type="text"
                    placeholder="Search"
                    className="w-sm bg-gray-50 border border-slate-400 rounded-lg pl-10 pr-3 py-2 text-sm focus:outline-none"
                  />
                </div>

                {/* Buttons */}
                <button className="border px-3 py-1.5 rounded-lg text-sm">
                  Register
                </button>
                <button className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm">
                  Login
                </button>
              </div>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-xl">
              <FaBars />
            </button>
          </div>

          <nav className={`${menuOpen ? "block" : "hidden"} md:block`}>
            <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col md:flex-row md:items-center md:gap-6 gap-3 text-sm font-medium">
              <div className="flex items-center gap-2 text-blue-600"><FaHome /> Home</div>
              <div className="flex items-center gap-2"><FaFileAlt /> Licensing</div>
              <div className="flex items-center gap-2 border-b-2 border-blue-600 pb-1 w-fit"><FaSearch /> Search Permits</div>
              <div className="flex items-center gap-2"><FaNewspaper /> News</div>
              <div className="flex items-center gap-2"><FaQuestionCircle /> FAQ's & Notices</div>
            </div>
          </nav>
    </header>
  )
}

export default Header