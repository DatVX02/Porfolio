import React, { useState } from "react";
import { Button, Modal, Progress } from "antd";
import Testing_tool from "../../assets/Testing_tool.png";
const API = () => {
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
                <img
                    src={Testing_tool}
                    alt="Testing_tool"
                    onClick={showModal}
                    className="cursor-pointer transform hover:scale-110 active:scale-95 hover:animate-spin"
                />
            </div>
            <Modal title="API Testing tool" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className="flex">
                    <ul>
                        <li>Postman</li>
                        <Progress percent={90} type="circle" style={{ width: "50%" }} />
                    </ul>



                </div>
            </Modal>
        </div>


    )

}

export default API;