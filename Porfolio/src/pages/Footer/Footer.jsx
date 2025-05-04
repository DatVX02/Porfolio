import { MailOutlined } from "@ant-design/icons";
import React from "react";


const Footer = () => {
    return (
        <div>
            <div className="bg-gradient-to-br from-blue-100 to-gray-200 py-12 flex" id="contact">
                <div className="w-full text-center">
                    <h1 className="text-2xl md:text-4xl text-gray-800 font-bold mb-4">Contact me via</h1>
                    <div className="flex items-center justify-center">
                        <div>
                            <a href="mailto:vxdat13@gmail.com" className="text-blue-500 hover:text-blue-700 transition duration-300 ">
                                <img src="https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454734_960_720.png" alt="mail" className="w-12 h-12 " />
                            </a>
                        </div>

                        <div className="">
                            <a href="tel:0338974114" className="">
                                <img src="https://images.vexels.com/media/users/3/205069/isolated/preview/f207045d96c258fed664305f0ac2c5bd-telephone-handset-blue-icon.png?w=360" alt="phone" className="w-12 h-12" />
                        </a>
                        </div>

                        <div className="">
                            <a href="https://www.facebook.com/voxuandat132" type="_blank" className="">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="phone" className="w-12 h-12" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )


}
export default Footer;