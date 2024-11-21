import React, { useContext } from 'react'
import { OutLet } from '../../componets/outlet/OutLet'
import { AuthContext } from '../../componets/context/userContext'
import { Navigate } from 'react-router-dom'

export const Home = () => {
  const {currentUser} =useContext(AuthContext);
  return (
    <div>
      
      {currentUser ? <Navigate to="/" /> : <Navigate to="/login" />}

   <div className=' bg-gray-100 dark:bg-gray-700 dark:text-gray-50' >
       <OutLet />
      </div>
    </div>
  )
}
