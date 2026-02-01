import React from 'react'

function SearchPermit() {
  return (
    <div className="max-w-6xl h-[450px] md:h-full overflow-y-auto mx-auto px-3 py-6">
          <div className="border border-slate-100 w-md md:w-xl lg:w-5xl mx-auto rounded-md overflow-hidden">
            <div className="border-b bg-slate-50 border-slate-300 px-4 py-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="font-medium text-sm text-center sm:text-md">Ministry of Labour and Industrial Relations</h2>
              <div className="md:flex lg:gap-[440px] mb-2 mt-2">
                <p className="font-medium">Permit Number: MOL-WP-2025-19311</p>
                <p className="text-sm py-1 font-semibold">Status: <span className="text-green-700">Active</span> </p>
              </div>
            </div>

            <div className="px-2 mt-2 pb-6">
              <div className="flex gap-x-6">
                {/* 📄 Details — BELOW image on mobile, LEFT on desktop */}
                <div className=" md:text-left font-serif grid gap-y-2 text-sm">
                  <div className="flex flex-col justify-center">
                    <div><span className="font-semibold">Surname:</span> YADAV</div>
                    <div><span className="font-semibold">First Name:</span> Maujelal Prasad</div>
                    <div><span className="font-semibold">Nationality:</span> Nepalese</div>
                  </div>
                </div>
                  {/* 🖼 Image — TOP on mobile, RIGHT on desktop */}
                <div className=" w-32 h-32 bg-slate-200 rounded-lg flex items-center justify-center text-xs text-slate-500 md:mx-0">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="identity"
                    className="w-full h-full object-cover"
                    />
                </div>
              </div>
              <div className="mt-2 font-serif">
                <div className="font-medium text-sm"><span className="font-semibold">Name of Employer:</span> Joyessur Agricultural Company Ltd</div>
                <div className="font-medium text-sm"><span className="font-semibold">Post Held:</span> Sugar Cane Field Labourers</div>
              </div>
              <div className="flex md:gap-3 mt-2">
                <div className="text-sm font-serif">
                  <div><span className="font-semibold">Passport Number:</span> PA1117180</div>
                  <div><span className="font-semibold">Gender:</span> Male</div>
                </div>
                <div className="text-sm font-serif">
                  <div><span className="font-semibold">Date of Birth:</span> 15/04/2002</div>
                  <div><span className="font-semibold">Validity:</span> From 12/09/2025 <span className="font-semibold">To</span> 11/09/2026</div>
                </div>
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
  )
}

export default SearchPermit