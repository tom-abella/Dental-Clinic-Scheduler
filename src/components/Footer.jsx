import React from "react"
import logo from "../assets/logo.jpg"
import {FaFacebookSquare, FaMobileAlt } from "react-icons/fa";
import {BsFillTelephoneFill } from "react-icons/bs";

export default function Footer(){

    return(
        <div className="h-96 bg-darkBlue text-blue-300 flex items-center justify-center">
             <ul className="flex flex-col gap-3 px-10 md:px-20 w-full justify-center text-center">
                <li className="flex items-center gap-10 justify-center">
                    <a href="https://ddc-admin.vercel.app" target={"_blank"}>
                        <img src={logo} alt="logo" className="w-20" />
                    </a>
                    <p className="text-2xl lg:text-4xl">A.A. Dones Dental Clinic</p>
                    </li>
                <li className="uppercase font-semibold text-center">
                We Take your Smile to Heart
                </li>
                <li className="flex items-center gap-4 justify-center">
                <a href="https://www.facebook.com/AADONES1992" target={"_blank"}><FaFacebookSquare size={35}/> </a>
                <a href="https://www.facebook.com/AADONES1992" target={"_blank"}><p>A.A. DONES Dental Clinic</p></a>
                </li>
                <li className="flex items-center gap-3 justify-center">
                    <BsFillTelephoneFill size={35}/>
                    <p>
                        (046) 437 - 8007 / 437 - 8022
                    </p>
                </li>
                <li className="flex items-center gap-2 justify-center">
                    <FaMobileAlt size={35}/>
                    <p>
                        Smart: 09194342293
                    </p>
                    <FaMobileAlt size={35}/>
                    <p>
                        Globe: 09532199638
                    </p>
                </li>
                <li className="border-t-2 flex justify-center">
                        <p>
                            © 2023 AA DDC. Design by TLNA.
                        </p>
                    </li>
             </ul>
        </div>
    )

}