import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/headers/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
       <div>
        <div>
          <Header/>
        </div>
        <div className="pt-24 md:pt-32">
          <div className="max-w-6xl h-[450px] md:h-full overflow-y-auto mx-auto px-3 py-6">
          <div className="border border-slate-100 w-sm md:w-xl lg:w-5xl mx-auto rounded-md overflow-hidden">
            <div className="border-b text-center font-serif bg-slate-50 border-slate-400 px-4 py-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="font-semibold text-md text-center sm:text-lg">Ministry of Labour and Industrial Relations</h2>
              <p className="text-center font-medium">Permit Number: MOL-WP-2025-19311</p>
              <p className="text-center text-xs sm:text-sm px-3 py-1 font-medium">Status: <span className="text-green-700">Active</span> </p>
            </div>

            <div className="px-4 mt-10 mx-auto pb-6 flex flex-col md:grid md:grid-cols-2 gap-6">
              {/* 🖼 Image — TOP on mobile, RIGHT on desktop */}
              <div className="order-1 md:order-2 w-32 h-32 sm:w-40 sm:h-48 bg-slate-200 rounded-lg flex items-center justify-center text-xs text-slate-500 mx-auto md:mx-0">
                <img
                  src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="identity"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* 📄 Details — BELOW image on mobile, LEFT on desktop */}
              <div className="order-2 md:order-1 text-center md:text-left font-serif grid gap-y-2 text-sm">
                <div><span className="font-semibold">Surname:</span> YADAV</div>
                <div><span className="font-semibold">First Name:</span> Maujelal Prasad</div>
                <div><span className="font-semibold">Nationality:</span> Nepalese</div>
                <div><span className="font-semibold">Gender:</span> Male</div>
                <div><span className="font-semibold">Passport Number:</span> PA1117180</div>
                <div><span className="font-semibold">Date of Birth:</span> 15/04/2002</div>
                <div><span className="font-semibold">Employer:</span> Joyessur Agricultural Company Ltd</div>
                <div><span className="font-semibold">Post Held:</span> Sugar Cane Field Labourers</div>
                <div><span className="font-semibold">Validity:</span> From 12/09/2025 To 11/09/2026</div>
              </div>
            </div>


            <div className="px-4 pb-8 font-serif">
              <h3 className="font-semibold mb-2">Conditions</h3>
              <ol className="list-decimal ml-5 space-y-1 text-sm text-slate-700">
                <li>This permit is valid for the period indicated above.</li>
                <li>This permit is personal to the holder and is not transferable.</li>
                <li>This permit shall be kept by the holder and produced to any authorised person on demand or within three days after demand at such Police Station as may be specified by the authorised person at the time of the demand.</li>
                <li>The Minister for Employment may, at any time, vary or cancel this permit.</li>
                <li>In the event of any change of circumstances affecting the accuracy of particulars submitted at the time of applying for this permit, the holder shall, within fifteen days, notify particulars of such change to the Minister for Employment.</li>
              </ol>
            </div>
          </div>
    </div>
        </div>
        <div>
          <Footer />
        </div>
    </div>
    </>
  )
}

export default App

