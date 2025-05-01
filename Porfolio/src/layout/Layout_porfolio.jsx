import React from "react";
import Header from "../pages/Header/Header";
import Introduce from "../pages/Introduce/Introduce";
import Skill from "../pages/Skill/Skill";
import Experience from "../pages/Experience/Experience";
import Educate from "../pages/Educate/Educate";

const LayoutPortfolio = () => {
    return (
        <>
            <Header />
            <Introduce/>
            <Skill/>
            <Educate/>
            <Experience/>
        </>
    )

}
export default LayoutPortfolio;