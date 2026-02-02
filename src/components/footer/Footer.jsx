import { Outlet } from "react-router-dom";
function Footer() {
  return (
     <footer className="bg-[#454546] font-serif text-slate-300 mt-9 text-sm">
          <div className="md:w-7xl md:mx-auto px-4 py-6 grid mx-auto md:grid-cols-6 gap-5">
            <div className="border-b md:border-none border-white pb-3">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3DB3rcwH2albPs_BTuFgM26HA2U7dZPfYdA&s" alt="ftrlogo" className="w-24 h-24 hidden md:block"/>
              <h2 className="hidden md:block">sucess story</h2>
              <h1 className="hover:underline cursor-pointer"  onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Helpdesk contact</h1>
              <h1 className="md:hidden hover:underline cursor-pointer"  onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>nels@edbmauritius.org</h1>
              <button className="hidden md:block">click here</button>
            </div>
            <div className="border-b md:border-none border-white pb-2">
              <h4 className="font-semibold mb-2 text-slate-300 hover:underline cursor-pointer" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Government Directory</h4>
              <ul className="">
                <li className="hover:underline cursor-pointer hidden md:block" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Ministries</li>
                <li className="hover:underline cursor-pointer hidden md:block" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Departments</li>
                <li className="hover:underline cursor-pointer hidden md:block" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Parastatal Organisations</li>
                <li className="hover:underline cursor-pointer hidden md:block" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Other Bodies</li>
              </ul>
            </div>
            <div className="border-b md:border-none border-white pb-3">
              <h4 className="font-semibold mb-2 text-slate-300 hover:underline cursor-pointer"  onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Legislations</h4>
              <ul className="space-y-1">
                <li className="hover:underline cursor-pointer hidden md:block" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Justice & Defence</li>
              </ul>
            </div>
            <div className="border-b md:border-none border-white pb-3">
              <h4 className="font-semibold mb-2 text-slate-300 hover:underline cursor-pointer"  onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Explore Mauritius</h4>
              <ul className="space-y-1">
                <li className="hover:underline cursor-pointer hidden md:block" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>History</li>
              </ul>
            </div>
            <div className="border-b md:border-none border-white pb-3">
              <h4 className="font-semibold mb-2 text-slate-300 hover:underline cursor-pointer" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Media</h4>
              <ul className="">
                <li className="hover:underline cursor-pointer hidden md:block" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Communiques</li>          
              </ul>
            </div>
            <div className="border-b md:border-none border-white pb-3">
              <h4 className="font-semibold mb-2 text-slate-300 hover:underline cursor-pointer"  onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Other Links</h4>
              <ul className="">
                <li className="hover:underline cursor-pointer hidden md:block" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>News</li>
                <li className="hover:underline cursor-pointer hidden md:block" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>E-Services</li>
                <li className="hover:underline cursor-pointer hidden md:block" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>ISMS Policy</li>
                <li className="hover:underline cursor-pointer hidden md:block" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Supplier Relationship Policy</li>
                <li className="hover:underline cursor-pointer hidden md:block" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Terms of Use</li>
                <li className="hover:underline cursor-pointer hidden md:block" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Privacy Policy</li>
                <li className="hover:underline cursor-pointer hidden md:block" onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Contact Us</li>
              </ul>
            </div>
            <div className="md:hidden mt-7 border-t md:border-none border-white pt-2">
              <h4 className="font-semibold mb-2 text-slate-300 border-b md:border-none border-white pb-3 hover:underline cursor-pointer"  onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Privacy Statement</h4>
              <h4 className="font-semibold mb-2 text-slate-300 md:hidden border-b md:border-none border-white pb-3 hover:underline cursor-pointer"  onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Terms of Use</h4>
              <h4 className="font-semibold mb-2 text-slate-300 md:hidden border-b md:border-none border-white pb-3 hover:underline cursor-pointer"  onClick={() =>
                  window.open(
                    "https://govmu.org/EN/Pages/default.aspx",
                    "_blank",
                  )
                }>Legal</h4>
            </div>
          </div>
     </footer>
  )
}

export default Footer