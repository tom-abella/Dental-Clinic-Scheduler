import React from "react"
import cover from "../assets/cover.jpg"
import logo from "../assets/logo.jpg"
import {Link} from 'react-scroll'
export default function Home(){
    return(
        <div>
            <div className="h-screen w-full bg-gradient-to-r from-gray-900 to-gray-700 relative" id="home">
                <img src={cover} alt="" className="w-full h-full object-cover  object-top mix-blend-overlay absolute"/>
                <div className="flex justify-center md:justify-start text-center md:text-start items-center w-full h-full text-blue-100 font-bold text-2xl md:pl-20 pt-20">
                    <ul className="flex flex-col gap-2  items-center md:items-start">
                        <li className="h-32 w-32 md:hidden ">
                            <img src={logo} alt="logo"/>
                        </li>
                        <li className="text-4xl border-b-2">A.A. Dones Dental Clinic</li>
                        <li className="text-base">General Dentisty & Orthodontics</li>
                        <li className="text-base capitalize ">we take your smile to heart</li>
                       <button className=" w-48 py-2 mt-2 rounded-lg  z-10 bg-darkBlue text-blue-300 hover:text-darkBlue hover:bg-blue-300 cursor-pointer"> <Link to ="contact"spy={true} smooth={true} duration={500}>Book Now!</Link></button>
                    </ul>
                </div>
            </div>
        </div>
    )
}