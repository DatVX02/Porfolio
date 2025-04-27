import React from "react";
import { Progress } from "antd";

const Skill = () => {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-gray-100">
            <div className="text-center uppercase font-bold text-4xl p-10">
                <h1>Skills</h1>
            </div>
            <div className="flex gap-20">
                <div>
                    <h1 className="text-center uppercase font-bold text-xl">Programming Languages</h1>
                    <ul>
                        <li>JavaScript</li>
                        <Progress percent={75} type="line" style={{ width: "50%" }} />
                    </ul>

                    <ul>
                        <li>Tailwind CSS</li>
                        <Progress percent={80} type="line" style={{ width: "50%" }} />
                    </ul>
                </div>
                <div>
                    <h1>Frameworks</h1>
                    <ul>
                        <li>Reactjs</li>
                        <Progress percent={70} type="line" style={{ width: "50%" }} />
                    </ul>
                </div>
                <div>
                    <h1>Design and Diagram</h1>
                    <ul>
                        <li>Figma</li>
                        <Progress percent={90} type="line" style={{ width: "50%" }} />
                    </ul>
                    <ul>
                        <li>Visual Diagram</li>
                        <Progress percent={80} type="line" style={{ width: "50%" }} />
                    </ul>
                </div>
                <div>
                    <h1>Database</h1>
                    <ul>
                        <li>MongoDB</li>
                        <Progress percent={70} type="line" style={{ width: "50%" }} />
                    </ul>
                    <ul>
                        <li>Microsoft SQL Server Management </li>
                        <Progress percent={75} type="line" style={{ width: "50%" }} />
                    </ul>
                </div>
                <div>
                    <h1>Application Programming Interface</h1>
                    <ul>
                        <li>Postman</li>
                        <Progress percent={90} type="line" style={{ width: "50%" }} />
                    </ul>
                </div>
            </div>
        </div>

    )

}

export default Skill;