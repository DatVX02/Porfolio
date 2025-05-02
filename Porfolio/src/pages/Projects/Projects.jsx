import React from "react";

const projectsData = [
    {
        id: 1,
        name: "Resell Event Ticket",
        Link_github: "",
        Description: "Develop UI for website about buying, selling, exchanging event tickets.",
        Postion: "Front-end Developer",
        Technology: "Reactjs",
        Image: "https://images-om.imgix.net/DYudMTpG8ZvFm/event-entrace-ticket-mockup-poster.jpg?auto=format&fit=max&q=90&w=1500&s=523bc24a982394f7d7448223a062d9b6",
        Type: "Classroom project"
    },
    {
        id: 2,
        name: "Human_Multi_tracking",
        Link_github: "",
        Description: "Develop UI for portfolio website.",
        Postion: "Front-end Developers and Software Testing",
        Technology: "Reactjs",
        Image: "https://media.discordapp.net/attachments/1225984317671346287/1321101745945968692/logo.png?ex=681614e1&is=6814c361&hm=42c0d4279fe9997168ff8a1196829da6528b0c91d8db231053ab81b653ac4bb5&=&format=webp&quality=lossless&width=922&height=922",
        Type: "Graduation project"
    },
    {
        id: 3,
        name: "Second-hand Sports Equipment Trading System",
        Link_github: "",
        Description: "",
        Postion: "Software testing support",
        Technology: "Manual Testing",
        Image: "https://twosportshop.vercel.app/assets/images/Logo.png",
        Type: "Graduation project"
    },
    {
        id: 4,
        name: "Skincare Booking System",
        Link_github: "https://swp-391-skincare-booking-system.vercel.app",
        Description: "Develop backend for skincare booking system.",
        Postion: "Support Frontend and Backend Developers",
        Technology: "Nodejs",
        Image: "https://swp-391-skincare-booking-system.vercel.app/assets/logo7-CfdqdJ8v.png"
    }
];

const Projects = () => {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-gray-100 py-16" id="projects">
            <div className="text-center uppercase font-bold text-4xl md:text-5xl text-gray-800 tracking-wide mb-16">
                <h1 className="relative inline-block">
                    Projects
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
                </h1>
            </div>

            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <div className="relative h-full w-full group">
                                {project.Image ? (
                                    <img
                                        src={project.Image}
                                        alt={project.name}
                                        className="w-200 h-80 duration-300 group-hover:blur-sm"
                                        onError={(e) => {
                                            e.target.src = "https://via.placeholder.com/400x200?text=No+Image";
                                        }}
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center transition-all duration-300 group-hover:blur-sm">
                                        <span className="text-gray-500 text-sm">No Image Available</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-white bg-opacity-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                                    <h3 className="text-xl font-semibold text-black mb-2">{project.name}</h3>
                                    <div className="space-y-2">
                                        <p className="text-black text-sm">
                                            <span className="font-medium">Position:</span> {project.Postion}
                                        </p>
                                        <p className="text-black text-sm">
                                            <span className="font-medium">Technology:</span> {project.Technology}
                                        </p>
                                        {/* <p className="text-black text-sm">
                                            <span className="font-medium">Type:</span> {project.Type}
                                        </p> */}
                                    </div>
                                    {project.Link_github && (
                                        <a
                                            href={project.Link_github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                                        >
                                            View on GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;