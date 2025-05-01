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
                <img src={Logo_programing} alt="Programming Languages" onClick={showModal} className="cursor-pointer transform hover:scale-110 active:scale-95 hover:animate-spin" />
            </div>
            <Modal title="Diagram" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className="flex">
                    <ul>
                        <li>Visual Diagram</li>
                        <Progress percent={70} type="circle" style={{ width: "50%" }} />
                    </ul>

                    <ul>
                        <li>StarUML</li>
                        <Progress percent={70} type="circle" style={{ width: "50%" }} />
                    </ul>

                    <ul>
                        <li>DrawIO</li>
                        <Progress percent={70} type="circle" style={{ width: "50%" }} />
                    </ul>



                </div>
            </Modal>
        </div>


    )

}

export default Diagram;