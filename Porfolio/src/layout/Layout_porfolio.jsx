import React from "react";
import Header from "../pages/Header/Header";
import Introduce from "../pages/Introduce/Introduce";
import Skill from "../pages/Skill/Skill";
import Experience from "../pages/Experience/Experience";

const LayoutPortfolio = () => {
    return (
        <>
            <Header />
            <Introduce/>
            <Skill/>
            <Experience/>
        </>
    )

}
export default LayoutPortfolio;