import React, { useState } from "react";
import { Button, Modal, Progress } from "antd";
import Logo_programing from "../../assets/Framework.jpg";
const Frameworks = () => {
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
                <img src={Logo_programing} alt="Framework" onClick={showModal} className="cursor-pointer transform hover:scale-110 active:scale-95 hover:animate-spin" />
            </div>
            <Modal title="Frameworks" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className="flex">
                    <ul>
                        <li>Reactjs</li>
                        <Progress percent={70} type="circle" style={{ width: "50%" }} />
                    </ul>


                </div>
            </Modal>
        </div>


    )

}

export default Frameworks;