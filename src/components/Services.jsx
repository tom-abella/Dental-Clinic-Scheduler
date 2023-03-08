import React from "react";
import { TbFileCertificate } from "react-icons/tb";
import { FaTeeth,FaSyringe } from "react-icons/fa";
import {AiFillSafetyCertificate } from "react-icons/ai";

export default function Services(){
    return(
    <div className="h-full min-h-screen flex flex-col justify-center w-full text-center items-center gap-10 md:gap-15 pt-10 pb-20 md:pb-0" id="about">
            <p className=" font-bold text-4xl mt-20 capitalize md:mt-0">Why A.A. Dones dental clinic?</p>
        <div className="flex flex-wrap justify-center items-center h-full gap-5">
            <div className="flex justify-center items-center text-center border-2 border-blue-300 text-darkBlue w-72 h-60 hover:bg-darkBlue rounded-lg hover:text-blue-300">
                <ul className="px-5">
                    <li className="text-4xl font-bold">25</li>
                    <li className="text-lg font-semibold capitalize">plus years</li>
                    <li>of painless expertise and trusted service.</li>
                </ul>
            </div>
            <div className="flex justify-center items-center text-center border-2 border-blue-300 text-darkBlue w-72 h-60 hover:bg-darkBlue rounded-lg hover:text-blue-300">
                <ul className="flex flex-col items-center px-5">
                    <li className="mb-2">
                    <TbFileCertificate size={40}/>
                    </li>
                    <li className="text-lg font-semibold capitalize">Lisensed Practitioners</li>
                    <li className="text-sm">Advance procedures: Crowns, Implants, Surgery and more.</li>
                </ul>
            </div>
            <div className="flex justify-center items-center text-center border-2 border-blue-300 text-darkBlue w-72 h-60 hover:bg-darkBlue rounded-lg hover:text-blue-300">
                <ul className = "flex flex-col items-center mx-5">
                    <li className="mb-2"><FaTeeth size={40}/></li>
                    <li className="text-lg font-semibold capitalize">cosmetic dentistry</li>
                    <li className="text-sm">Restoration using crown which completely caps or encircles a tooth or implant.</li>
                </ul>
            </div>
            <div className="flex justify-center items-center text-center border-2 border-blue-300 text-darkBlue w-72 h-60 hover:bg-darkBlue rounded-lg hover:text-blue-300">
                <ul className = "flex flex-col items-center mx-5">
                    <li className="mb-2"><FaSyringe size={40}/></li>
                    <li className="text-lg font-semibold capitalize">dental Implants</li>
                    <li className="text-sm">Titanium to be implanted deep into the gums to truly resemble real teeth.</li>
                </ul>
            </div>
            <div className="flex justify-center items-center text-center border-2 border-blue-300 text-darkBlue w-72 h-60 hover:bg-darkBlue rounded-lg hover:text-blue-300">
                <ul className = "flex flex-col items-center mx-5">
                    <li className="mb-2"><AiFillSafetyCertificate size={40}/></li>
                    <li className="text-lg font-semibold capitalize">Covid 19 protocols!</li>
                    <li className="text-sm">Regular disinfection and Staff with full medical PPEs</li>
                </ul>
            </div>
        </div>
    </div>
    )
}