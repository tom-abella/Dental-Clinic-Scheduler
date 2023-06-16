import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { useState, React,useEffect } from 'react';

//firebase connection
import {collection, addDoc} from 'firebase/firestore'
import {db} from "../config/Firebase"

export default function Contact(){



const moviesCollectionRef = collection(db, "user")
//WRITING DATA ----------------------------------------------------
const [newName, setNewName] = useState()
const [newEmail, setNewEmail] = useState()
const [newContact, setNewContact] = useState()
const [newDate, setNewDate] = useState()
const [newTime, setNewTime] = useState()


const onSubmitMovie = async()=>{
    try{
    await addDoc(moviesCollectionRef, {
        name: newName,
        email: newEmail,
        contact: newContact,
        time: newTime,
        date: newDate
    })
    alert(" ✅ Booking Successful!")
    setNewName("")
    setNewEmail("")
    setNewContact("")
    setNewEmail("")
    
    }catch(err){
        alert(" ❌ Booking Failed!")
        window.location.reload();
        console.error(err)
}
}
    const handleSubmit = (event) =>{
        event.preventDefault()
        onSubmitMovie()
        
        
    }
    return(
        


        <div className="h-full min-h-screen flex justify-center items-center pb-10 lg:pb-0" id="contact">
            <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-evenly w-full gap-10 lg:gap-20">
                <div className="flex w-80 md:w-128 border-2 border-darkBlue p-10 rounded-xl order-2 lg:order-1 bg-blue-300">
                    
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full" id="form">
                        <p className="uppercase text-center font-semibold">Booking Form</p>
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="name" className="rounded-lg p-1 px-2" value={newName} placeholder='Enter your Name ...' onChange={(e)=>setNewName(e.target.value)}/>
                        <label htmlFor="email">Email: </label>
                        <input 
                            type="email" 
                            id="email" 
                            className="rounded-lg p-1 px-2" 
                            placeholder='Enter your Email ...' 
                            value={newEmail}
                            onChange={(e)=> setNewEmail(e.target.value)}/>
                        <label htmlFor="contact" >Contact Number: </label>
                        <PhoneInput
                            placeholder="Enter Phone Number ..."
                            value={newContact}
                            onChange={setNewContact} 
                            className="rounded-lg p-1 px-2"/>
                        <label htmlFor="date">Date: </label>
                        <input type="date" 
                            id="date" 
                            value={newDate}
                            onChange={(e)=>setNewDate(e.target.value)}
                            className="rounded-lg p-1 px-2"/>
                        <label htmlFor="time">Time: </label>
                        <input type="time" 
                            id="time" 
                            value={newTime}
                            onChange={(e)=>setNewTime(e.target.value)}
                            className="rounded-lg p-1 px-2"/>

                        <div className="w-full flex justify-center">
                        <button className="w-48 p-2 mt-2 rounded-lg bg-darkBlue text-blue-300 hover:text-darkBlue hover:bg-blue-200 cursor-pointer" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                
                {/* right */}
                <div className="flex justify-center items-center W-FULL order-1 lg:order-2">
                <iframe src="https://maps.google.com/maps?q=A.A.%20Dones%20Dental%20Clinic,%20Umboy,%20Tanza%20Cavite&amp;t=k&amp;z=20&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameBorder="0"  className="h-96 md:h-128 md:w-128 rounded-xl"></iframe>
                </div>
            </div>
               
        </div>
    )
}
