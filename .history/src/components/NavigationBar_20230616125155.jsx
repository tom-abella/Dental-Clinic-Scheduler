import React from "react"
import logo from "../assets/logo.jpg"
import { FaHome} from "react-icons/fa";
import { MdHomeRepairService,MdPermDeviceInformation} from "react-icons/md";
import { AiOutlineSchedule} from "react-icons/ai";
import {Link} from 'react-scroll'
export default function NavigationBar(){

    return(
        <nav className=" flex items-center justify-center md:justify-between px-4 sm:px-20 h-16 w-full  z-20 bg-darkBlue" 
        >
            <div className="w-14 hidden md:flex">
                <img src={logo} alt="logo"/>
            </div>
            <ul className="hidden md:flex gap-16 uppercase text-blue-300 font-bold fixed">
                <Link to ="home"spy={true} smooth={true} duration={500}><li className="cursor-pointer hover:text-blue-100 p-2">home</li></Link>
                <Link to ="about"spy={true} smooth={true} duration={500}><li className="cursor-pointer hover:text-blue-100 p-2">about</li></Link>
                <Link to ="services"spy={true} smooth={true} duration={500}><li className="cursor-pointer hover:text-blue-100  p-2">services</li></Link>
                <Link to ="contact"spy={true} smooth={true} duration={500}><li className="cursor-pointer hover:text-blue-300 hover:bg-darkBlue hidden md:flex border-2 p-2 rounded-full px-1 lg:px-4 bg-blue-300 text-darkBlue">book now!</li></Link>
            </ul>
            <ul className="flex  md:hidden gap-5 uppercase text-blue-300 font-bold">
            <Link to ="home"spy={true} smooth={true} duration={500}>
                <li className="cursor-pointer hover:text-blue-100 p-2 flex flex-col text-xs items-center justify-center">
                <FaHome size={35}/>
                    <p>home</p>
                </li>
            </Link>
            <Link to ="about"spy={true} smooth={true} duration={500}>
                <li className="cursor-pointer hover:text-blue-100 pt-3 flex flex-col text-xs items-center justify-center">
                <MdPermDeviceInformation size={30}/>
                <p>
                    about
                </p>
                </li>
            </Link>
            <Link to ="services"spy={true} smooth={true} duration={500}>
                <li className="cursor-pointer hover:text-blue-100  p-2 flex flex-col text-xs items-center justify-center">
                <MdHomeRepairService size={35}/>
                <p>services</p>
                </li>
            </Link>
            <Link to ="form"spy={true} smooth={true} duration={500}>
                <li className="cursor-pointer hover:text-blue-100 pt-2 flex flex-col text-xs items-center justify-center">
                <AiOutlineSchedule size={35}/>
                <p>
                book now!
                </p>
                </li>
            </Link>
            </ul>
        </nav>
    )
}
