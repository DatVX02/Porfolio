import React from "react";
import Header from "../pages/Header/Header";
import Introduce from "../pages/Introduce/Introduce";
import Skill from "../pages/Skill/Skill";
// import Experience from "../pages/Experience/Experience";
import Educate from "../pages/Educate/Educate";
import Projects from "../pages/Projects/Projects";
import Footer from "../pages/Footer/Footer";

const LayoutPortfolio = () => {
    return (
        <>
            <Header />
            <Introduce />
            <Skill />
            <Educate />
            <Projects />
            <Footer/>

        </>
    )

}
export default LayoutPortfolio;