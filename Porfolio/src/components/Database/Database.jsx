import React, { useState } from "react";
import { Button, Modal, Progress } from "antd";
import Logo_Database from "../../assets/Database.webp";
const Database = () => {
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
                    src={Logo_Database}
                    alt="Database"
                    onClick={showModal}
                    className="w-96 h-60 md:w-50 md:h-50 md:rounded-full md:object-cover cursor-pointer transform hover:scale-110 active:scale-95 hover:animate-spin"
                />
            </div>
            <Modal title="Database" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <div className="flex">
                    <ul className="w-1/3 ml-10">
                        <li className="text-center font-bold text-xl ">MongoDB</li>
                        <Progress percent={70}
                            type="circle"
                            strokeColor="#facc15"
                            trailColor="#e5e7eb"
                            width={140}
                            style={{ marginTop: "52px" }} />
                    </ul>
                    <ul className="w-3/4">
                        <li className="text-center font-bold  text-xl">Microsoft SQL Server Management </li>
                        <Progress percent={75} type="circle"
                            strokeColor="#facc15"
                            trailColor="#e5e7eb"
                            width={140}
                            style={{ marginLeft: "80px", marginTop: "20px" }} />
                    </ul>



                </div>
            </Modal>
        </div>


    )

}

export default Database;