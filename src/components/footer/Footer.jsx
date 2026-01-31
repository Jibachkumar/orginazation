import { Outlet } from "react-router-dom";
function Footer() {
  return (
     <footer className="bg-[#454546] font-serif text-slate-300 mt-12 text-sm">
          <div className="md:w-7xl md:mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-5 gap-5">
            <div className="">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3DB3rcwH2albPs_BTuFgM26HA2U7dZPfYdA&s" alt="ftrlogo" className="w-24 h-24"/>
              <h2>sucess story</h2>
              <h1>Helpdesk contact</h1>
              <button>click here</button>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-white">Government Directory</h4>
              <ul className="space-y-1">
                <li className="hover:underline cursor-pointer" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Ministries</li>
                <li className="hover:underline cursor-pointer" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Departments</li>
                <li className="hover:underline cursor-pointer" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Parastatal Organisations</li>
                <li className="hover:underline cursor-pointer" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Other Bodies</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-white">Legislations</h4>
              <ul className="space-y-1">
                <li className="hover:underline cursor-pointer" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Justice & Defence</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-white">Explore Mauritius</h4>
              <ul className="space-y-1">
                <li className="hover:underline cursor-pointer" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>History</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-white">Other Links</h4>
              <ul className="space-y-1">
                <li className="hover:underline cursor-pointer" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>News</li>
                <li className="hover:underline cursor-pointer" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>E-Services</li>
                <li className="hover:underline cursor-pointer" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Privacy Policy</li>
                <li className="hover:underline cursor-pointer" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Contact Us</li>
              </ul>
            </div>
          </div>
     </footer>
  )
}

export default Footer