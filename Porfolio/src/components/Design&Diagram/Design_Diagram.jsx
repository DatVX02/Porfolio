import React, { useState } from "react";
import { Button, Modal, Progress } from "antd";
import Logo_Design from "../../assets/figma-design-systems.png";
const Design_Diagram = () => {
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
                <img src={Logo_Design} alt="Design" onClick={showModal} className="w-96 h-60 md:w-50 md:h-50 md:rounded-full md:object-cover cursor-pointer transform hover:scale-110 active:scale-95 hover:animate-spin" />
            </div>
            <Modal title="Design" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className="flex">
                    <ul className="w-1/2">
                        <li className="text-center font-bold text-xl">Figma</li>
                        <Progress percent={90} type="circle"
                            strokeColor="#38bdf8"
                            trailColor="#e5e7eb"
                            width={140}
                            style={{ marginLeft: "50px", marginTop: "20px" }}/>
                    </ul>



                </div>
            </Modal>
        </div>


    )

}

export default Design_Diagram;