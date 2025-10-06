import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <div className="flex items-center justify-center px-6 py-4 shadow-md fixed top-0 bg-white w-full z-10">
            {/* <div>
                <Link to="/">
                    <img src={Logo} alt="Logo" className="w-18 h-18 rounded-full" />
                </Link>
            </div> */}

            <div className="hidden md:flex gap-8 justify-center items-center font-medium md:h-10">
                <ul className="flex gap-10 items-center font-medium mr-10">
                    <li >
                        <button onClick={() => scrollToSection("about")} className="cursor-pointer">About me</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("projects")} className="cursor-pointer">Projects</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("education")} className="cursor-pointer">Education</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("experience")} className="cursor-pointer">Experience</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("skills")} className="cursor-pointer">Skills</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("contact")} className="cursor-pointer">Contact</button>
                    </li>
                </ul>
            </div>

            <div className="md:hidden">
                <button onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-26 left-0 right-0 bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden z-10 ">
                    <button onClick={() => scrollToSection("about")}>About</button>
                    <button onClick={() => scrollToSection("projects")}>Projects</button>
                    <button onClick={() => scrollToSection("experience")}>Experience</button>
                    <button onClick={() => scrollToSection("skills")}>Skills</button>
                    <button onClick={() => scrollToSection("contact")}>Contact</button>
                </div>
            )}
        </div>
    );
};

export default Header;