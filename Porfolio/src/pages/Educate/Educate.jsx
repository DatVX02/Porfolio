import React from "react";
import logo_fptu from "../../assets/2021-FPTU-Eng.png";
const Educate = () => {

    return (
        <div className="bg-gradient-to-br from-blue-100 to-gray-200  py-12" id="education">
            <div className="text-center uppercase font-bold text-4xl md:text-5xl text-gray-800 tracking-wide">
                <h1 className="relative inline-block mb-20">
                    Education
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
                </h1>
            </div>

            <div>
                    <img src={logo_fptu} alt="FPT" />
            </div>

            <div>
                
            </div>
        </div>
    )
}
export default Educate;