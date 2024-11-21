import React from 'react'
import { DATAS } from './data'
import { EachStroe } from './EachStroe'
import { useContext } from "react"
import { AuthContext } from "../../context/userContext"
export const Stroes = () => {
  const{currentUser}=useContext(AuthContext)
  return (
    <div className='flex justify-center items-center md:w-full md:h-60 mt-7 md:mt-0 gap-1 rounded-lg
     bg-white dark:bg-gray-800 dark:text-white ml-2'>
        <div className=" relative md:h-48 overflow-hidden md:rounded-lg h-[70px] w-[70px] rounded-full md:w-32">
        <img src={currentUser?.picture} alt="profilePicture" className='md:h-48 md:rounded-lg md:w-32' />
        <span className="capitalize font-mono absolute bottom-2 left-3 text-xs shadow-md text-gray-400">{currentUser?.name}</span>
        <span className="absolute md:bottom-8 md:left-1 left-4 bottom-4 text-2xl bg-blue-600 text-white flex items-center justify-center rounded-full p-1 h-6 w-6 text-center pb-2 cursor-pointer">+</span>
        </div>
        <div className='flex justify-center items-center  md:h-48 gap-1'>
        {DATAS.map((data)=>{
            return <EachStroe Name={data.name} profile={data.profilePicture} key={data.id}/> 
        })}
        </div>
       
    </div>
  )
}


