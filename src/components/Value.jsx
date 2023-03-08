import React from "react"
import hero from "../assets/hero.jpg"
export default function Value(){

    return(
        <div className="flex justify-center items-center flex-col h-full min-h-screen py-10" id="services">
            <div className="flex flex-col lg:flex-row lg:gap-20 " >
                <div className="w-80 lg:w-128 lg:h-128 flex items-center justify-center pb-0">
                    <img src={hero} alt="" />
                </div>
                <div className="flex w-80 lg:w-128 xl:w-130 lg:h-96">
                    <ul className="flex flex-col  justify-center items-center gap-5 lg:pt-20">
                        <li className=" font-bold text-3xl mt-10 capitalize lg:mt-0 text-darkBlue">
                            We value the quality
                            of our Dental Works
                        </li>
                        <li className="">
                        Whether you live in <span className=" text-darkBlue font-semibold">Cavite</span>  or in neighboring towns and cities, you can trust the dentists at the A.A. Dones Dental Clinic to ensure your comfort and provide you with excellent services. You have nothing to worry about. Our team of dentists have undergone intensive trainings and experience to provide the best dental treatment.
                        </li>
                        <li className="">
                        We can help you improve your self-confidence and regain your perfect smile with superb choices such as<span className=" text-darkBlue font-semibold"> dental veneers, zirconia crowns, dental implants, dental bridges, braces and other great services to choose from.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}