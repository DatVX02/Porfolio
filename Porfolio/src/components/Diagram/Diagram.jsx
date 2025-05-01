import React, { useState } from "react";
import { Button, Modal, Progress } from "antd";
import Logo_programing from "../../assets/Diagram.avif";
const Diagram = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    }
    return (
        <div >
            <div>
                <img src={Logo_programing} alt="Programming Languages" onClick={showModal} className="w-96 h-60 md:w-50 md:h-50 md:rounded-full md:object-cover cursor-pointer transform hover:scale-110 active:scale-95 hover:animate-spin" />
            </div>
            <Modal title="Diagram" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <div >
                    <div className="flex">
                        <ul className="w-1/2">
                            <li className="text-center font-bold text-xl">Visual Diagram</li>
                            <Progress percent={70} type="circle"
                                strokeColor="#facc15"
                                trailColor="#e5e7eb"
                                width={140}
                                style={{ marginLeft: "50px", marginTop: "20px" }}
                            />
                        </ul>

                        <ul className="w-1/2">
                            <li className="text-center font-bold text-xl">StarUML</li>
                            <Progress percent={70} type="circle"
                                strokeColor="#facc15"
                                trailColor="#e5e7eb"
                                width={140}
                                style={{ marginLeft: "50px", marginTop: "20px" }}
                            />
                        </ul>
                    </div>
                    <div className="mt-10">
                        <ul className="w-1/2">
                            <li className="text-center font-bold text-xl">DrawIO</li>
                            <Progress percent={70} type="circle"
                                strokeColor="#facc15"
                                trailColor="#e5e7eb"
                                width={140}
                                style={{ marginLeft: "50px", marginTop: "20px" }}
                            />
                        </ul>
                    </div>



                </div>
            </Modal>
        </div>


    )

}

export default Diagram;