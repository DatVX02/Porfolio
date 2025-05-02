import React, { useState } from "react";

const Skill = () => {
    const items = [
        "All",
        "Frontend",
        "Backend",
        "Database",
        "API Testing Tool",
        "Design",
        "Diagram",
    ];

    const data = [
        {
            id: 1,
            name: "Reactjs",
            type: "Frontend",
            image:
                "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        },
        {
            id: 2,
            name: "JavaScript",
            type: "Frontend",
            image:
                "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
        },
        {
            id: 3,
            name: "Tailwindcss",
            type: "Frontend",
            image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
        },
        {
            id: 4,
            name: "Figma",
            type: "Design",
            image: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
        },
        {
            id: 5,
            name: "MongoDB",
            type: "Database",
            image:
                "https://static-00.iconduck.com/assets.00/mongodb-icon-icon-512x337-sbep0qp1.png",
        },
        {
            id: 6,
            name: "SQL Server Management",
            type: "Database",
            image: "https://i.pinimg.com/736x/32/a0/3a/32a03aee0c76419ec5bde950a62883bc.jpg",
        },
        {
            id: 7,
            name: "Postman",
            type: "API Testing Tool",
            image: "https://www.svgrepo.com/show/354202/postman-icon.svg",
        },
        {
            id: 8,
            name: "Visual Diagram",
            type: "Diagram",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsOD-ao4edQDCzxGae3DiVqf-yfz6OzlgJucNvHpqcQYrDZYmqMbqpk2R1FgVo5NkYm50&usqp=CAU",
        },
        {
            id: 9,
            name: "StarUML",
            type: "Diagram",
            image: "https://avatars.githubusercontent.com/u/7642181?s=280&v=4",
        },
        {
            id: 10,
            name: "DrawIO",
            type: "Diagram",
            image:
                "https://static-00.iconduck.com/assets.00/file-type-drawio-icon-2048x2048-dxjfklgq.png",
        },
        {
            id: 11,
            name: "Nodejs",
            type: "Backend",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Jqy_joxyuPEsHWadt48KNQE0WcRK4j40RQ&s",
        }
    ];

    const [selectedType, setSelectedType] = useState(null);
    const [sortOrder] = useState("asc");

    const handleFilter = (type) => {

        setSelectedType(type === "All" ? null : type);
    };



    let skillsData = selectedType
        ? data.filter((skill) => skill.type === selectedType)
        : data;

    skillsData = [...skillsData].sort((a, b) => {
        return sortOrder === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
    });

    return (
        <div
            className="bg-gradient-to-br from-blue-100 via-blue-50 to-gray-200 py-16 "
            id="skills"
        >

            <div className="text-center uppercase font-extrabold text-4xl md:text-5xl text-gray-900 tracking-wider mb-12">
                <h1 className="relative inline-block">
                    Skills
                    <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transform transition-all duration-300"></span>
                </h1>
            </div>


            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mx-auto max-w-7xl px-4">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer group ${selectedType === item || (item === "All" && selectedType === null)
                            ? "text-blue-600"
                            : "text-gray-700"
                            }`}
                    >
                        <h2
                            className="text-center text-xl md:text-2xl font-bold px-4 py-2 rounded-lg transition-all duration-300 group-hover:text-blue-500 group-hover:scale-105 group-active:scale-95"
                            onClick={() => handleFilter(item)}
                        >
                            {item}
                        </h2>
                        <div
                            className={`h-1 mt-1 rounded-full transition-all duration-300 ${selectedType === item || (item === "All" && selectedType === null)
                                ? "bg-blue-500 w-full"
                                : "bg-transparent group-hover:bg-blue-300 w-0 group-hover:w-full"
                                }`}
                        ></div>
                    </div>
                ))}
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-10 max-w-7xl mx-auto">
                {skillsData.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center border border-gray-100"
                    >
                        {skill.image ? (
                            <img
                                src={skill.image}
                                alt={skill.name}
                                className="w-20 h-20 object-contain mb-4 rounded-md"
                                onError={(e) =>
                                    (e.target.src = "https://via.placeholder.com/80")
                                }
                            />
                        ) : (
                            <span className="text-gray-400 mb-4 text-sm">No image</span>
                        )}
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                            {skill.name}
                        </h3>
                        <p className="text-gray-500 text-sm">{skill.type}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;