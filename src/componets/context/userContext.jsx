import {createContext, React, useEffect, useState} from 'react'
import profile from './../../images/nnn.jpg'
export const AuthContext=createContext();


export const UserContextProvider = (props) => {

    const [currentUser,setCurrentUser]=useState(JSON.parse(localStorage.getItem("user"))||null)

    function checkLogin(){
        // to do
        setCurrentUser({id:1, name:"ahamd" ,picture:profile})
    }
    
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser))   
    },[currentUser])
  return (
    <AuthContext.Provider value={{currentUser,checkLogin}}>
        {props.children}
    </AuthContext.Provider>
  )
}
