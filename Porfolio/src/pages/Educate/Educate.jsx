import React from "react";
import logo_fptu from "../../assets/2021-FPTU-Eng.png";
import logo_amazing from "../../assets/logo-color.png";
// import logo_nina from "../../assets/nina.webp";
const Educate = () => {

    return (
        <div className="bg-gradient-to-br from-blue-100 to-gray-200 py-12 flex" id="education">
            <div className="w-1/2">
                <div className="text-center uppercase font-bold text-4xl md:text-5xl text-gray-800 tracking-wide">
                    <h1 className="relative inline-block mb-20">
                        Education
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    <img src={logo_fptu} alt="FPT" className="w-[50%]" />
                    
                </div>
                
            </div>

            <div className="w-1/2">
                <div className="text-center uppercase font-bold text-4xl md:text-5xl text-gray-800 tracking-wide" id="experience">
                    <h1 className="relative inline-block mb-20">
                        Experience
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
                    </h1>
                </div>


                <div>

                    {/* <div className="group relative bg-gradient-to-br from-white via-white to-gray-50 border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 w-[80%] ml-24">
                        <div className="flex items-center space-x-4">
                            <img
                                src={logo_nina}
                                alt="Nina Logo"
                                className="w-16 h-16 rounded-xl object-contain bg-white border"
                            />
                            <div>
                                <p className="text-sm text-gray-500">June 2023 – August 2023</p>
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">Website Consulting Intern</h3>
                            </div>
                        </div>

                    </div> */}


                    <div className="group relative bg-gradient-to-br from-white via-white to-gray-50 border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-30 w-[80%] mt-4 ml-24">
                        <div className="flex items-center space-x-4">
                            <img
                                src={logo_amazing}
                                alt="Amazing Logo"
                                className="w-16 h-16 rounded-xl object-contain bg-white border"
                            />
                            <div>
                                <p className="text-sm text-gray-500">April 2024 – August 2024</p>
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">Front-end Developer Intern</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Educate;