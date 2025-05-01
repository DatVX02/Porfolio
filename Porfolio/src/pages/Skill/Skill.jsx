import React from "react";
import Programming_Languages from "../../components/Skills/Programming_Languages";
import Frameworks from "../../components/Frameworks/Frameworks";
import Design_Diagram from "../../components/Design&Diagram/Design_Diagram";
import Database from "../../components/Database/Database";
import API from "../../components/API/API";
import Diagram from "../../components/Diagram/Diagram";
// import "./Skill.css";

const Skill = () => {
    return (
        <div className="bg-gradient-to-br from-blue-100 to-gray-200  py-12">
            {/* <div className="text-center uppercase font-bold text-4xl md:text-5xl text-gray-800 tracking-wide">
                <h1 className="relative inline-block mb-20">
                    Skills
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
                </h1>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                <div >
                    <Programming_Languages />
                </div>
                <div>
                    <Frameworks />
                </div>
                <div>
                    <Design_Diagram />
                </div>
                <div>
                    <Database />
                </div>
                <div>
                    <API />
                </div>
                <div>
                    <Diagram />
                </div>
            </div>
        </div>
    );
};

export default Skill;