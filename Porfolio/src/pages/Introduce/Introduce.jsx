import React, { useState, useEffect } from "react";
import { GithubOutlined } from "@ant-design/icons";
import ProfileImage from "../../assets/avatar.jpg";

const Introduce = () => {
    const data = [
        {
            id: 1,
            name: "Software Testing",
        },
        {
            id: 2,
            name: "Website Developer",
        },
    ];

    const [currentItemId, setCurrentItemId] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentItemId((prevId) => {
                const nextId = prevId >= data.length ? 1 : prevId + 1;
                return nextId;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [data.length]);



    const currentItem = data.find((item) => item.id === currentItemId) || data[0];

    return (
        <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 px-4">
            <div className="flex flex-col md:flex-row max-w-6xl w-full gap-8 py-12">
                <div className="md:w-1/2 flex flex-col justify-center space-y-6 px-4">

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                        Hi, I’m VO XUAN DAT is
                        a{" "}
                        <span
                            className="text-blue-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-colors duration-300 animation duration-500"
                            key={currentItemId}
                        >
                            {currentItem.name}
                        </span>
                    </h1>

                    <div className="flex gap-4 mt-4">
                        <a
                            href="https://github.com/DatVX02?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-14 h-14 bg-blue-500 shadow-lg shadow-blue-500/50 text-white rounded-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                        >
                            <GithubOutlined className="text-xl" />
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1TxRYGtRpddwx4rLoSzHTJe0N7sEdWUos/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-32 h-14 bg-blue-500 shadow-lg shadow-blue-500/50 text-white rounded-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 text-sm font-medium"
                        >
                            Portfolio
                        </a>
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center relative">
                    <img
                        src={ProfileImage}
                        alt="VO XUAN DAT"
                        className="w-96 h-96 md:w-96 md:h-96 sm:ml-40 rounded-full object-cover mr-[10px] ml-[12px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Introduce;