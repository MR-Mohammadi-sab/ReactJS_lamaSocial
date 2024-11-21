import {FontAwesomeIcon}from "@fortawesome/react-fontawesome"
import {faHome ,faSearch,faMoon,faSun,faEnvelope,faUser,faBell,faBorderAll}from "@fortawesome/free-solid-svg-icons"
import {useEffect, useState,useContext} from "react"
import {Link} from 'react-router-dom'
import { AuthContext } from "../context/userContext"


export const NavBar = () => {
  const [dark,setDark]=useState(false)
  const {currentUser}=useContext(AuthContext)

  
function darkMode(){
  setDark((prv)=>{
    if(prv===false){
      document.documentElement.classList.add("dark")
      localStorage.setItem("color-theme","dark")
      setDark(true)
    }else{
      setDark(false)
      document.documentElement.classList.remove("dark")
      localStorage.setItem("color-theme","light")
    }
  })
}
useEffect(()=>{
  if(localStorage.getItem("color-theme")){
    if(localStorage.getItem("color-theme")==="dark"){
      document.documentElement.classList.add("dark")
      setDark(true)
    }else{
      document.documentElement.classList.remove("dark")
      setDark(false)
    }
  }else{
    document.documentElement.classList.remove("dark")
  }
},[dark])
  return (
    <div className='fixed top-0 z-50 right-0 left-0 h-16 overflow-hidden border-b border-gray-200 dark:bg-gray-800 dark:text-gray-50 bg-white'>

      <div className="flex mx-auto justify-between space-x-8 items-center p-4 bg-white dark:bg-gray-800 dark:text-gray-50 shadow">
      <div className="left flex items-center space-x-4 dark:bg-gray-800 dark:text-white">
        <Link to="/">
      <h1 className="text-purple-800 dark:text-purple-400 text-xl  font-bold cursor-pointer">lamaSocial</h1></Link>
      <i className="cursor-pointer"><FontAwesomeIcon icon={faHome}/></i>
      <button className="cursor-pointer focus:outline-none" onClick={darkMode}><FontAwesomeIcon icon={dark?faSun:faMoon}/></button>
      <i className="cursor-pointer hidden sm:block"><FontAwesomeIcon icon={faBorderAll}/></i>
      <div className="md:border rounded-lg flex space-x-1 justify-center items-center ">
        <i className="pl-1 text-xs cursor-pointer md:cursor-default"><FontAwesomeIcon icon={faSearch} /></i>
        <input type="text" placeholder="Search" className="border-none focus:outline-none px-2 w-64 bg-transparent hidden md:block" />
      </div>
      </div>

    <div className="right flex items-center space-x-6 dark:bg-gray-800 dark:text-white">
    <i className=""><FontAwesomeIcon icon={faUser} /></i>
    <i className=""><FontAwesomeIcon icon={faEnvelope} /></i>
    <i className=""><FontAwesomeIcon icon={faBell} /></i>
    <div className="flex space-x-2 items-center justify-center">
    <div className="border rounded-full h-6 w-6 flex items-center justify-center overflow-hidden">
      <img src={currentUser?.picture} alt="jcor"  className="rounded-full"/></div>
      
    <h1 className="text-sm capitalize font-mono">{currentUser?.name}</h1>
    </div>
    </div>
      </div>
    </div>
  )
} 
