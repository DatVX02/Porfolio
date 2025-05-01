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
            <div className="text-center uppercase font-bold text-4xl md:text-5xl text-gray-800 tracking-wide">
                <h1 className="relative inline-block mb-20">
                    Skills
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
                </h1>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                <div >
                    <Programming_Languages />
                    <h1 className="text-center font-bold mt-4">Programming Languages</h1>
                </div>
                <div>
                    <Frameworks />
                    <h1 className="text-center font-bold mt-4">Frameworks</h1>
                </div>
                <div>
                    <Design_Diagram />
                    <h1 className="text-center font-bold mt-4">Design</h1>
                </div>
                <div>
                    <Database />
                    <h1 className="text-center font-bold mt-4">Database</h1>
                </div>
                <div>
                    <API />
                    <h1 className="text-center font-bold mt-4">API Testing tool</h1>
                </div>
                <div>
                    <Diagram />
                    <h1 className="text-center font-bold mt-4">Diagram</h1>
                </div>
            </div>
        </div>
    );
};

export default Skill;