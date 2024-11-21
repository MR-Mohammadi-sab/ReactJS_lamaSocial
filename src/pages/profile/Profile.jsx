import React, { useContext } from 'react'
import img1 from './../../images/lion.jpg'
import img2 from './../../images/KID.jpg'
import {FontAwesomeIcon}from "@fortawesome/react-fontawesome"
import {faEllipsisV,faLocation,faGlobe,faEnvelope}from "@fortawesome/free-solid-svg-icons"
import {faFacebook,faInstagram,faTwitter,faLinkedin, } from '@fortawesome/free-brands-svg-icons'
import { AuthContext } from '../../componets/context/userContext'
import { Post } from '../../componets/outlet/posts/post'

export const Profile = () => {
  const {currentUser} =useContext(AuthContext)
  return (
    <div className='lg:ml-[18%] flex flex-col overflow-hidden justify-center items-center lg:mr-[30%] lg:max-w-[51%]   ml-[32%] mr-3'>
      {/* bhaind profile */}
 
      <div  className='flex w-full  mt-7 rounded-md'>
      <img src={img1} alt="bahind_img" className='h-64 w-full object-cover rounded-md' />
      </div>
      {/* profile picture */}
      <div className='h-56 w-full relative shadow bg-gray-100 dark:bg-gray-800 dark:text-gray-50 mt-6 rounded-md p-8'>
        {/* profile img */}
        <div className='absolute -top-24 md:left-[40%] left-[32%] z-30'>
      <img src={img2} alt="bahind_img" className='rounded-full w-36 h-36 object-cover'/>
      <h1 className='capitalize text-center mt-2 font-mono'>{currentUser.name}</h1></div>
      {/* icons */}
      <div className='flex justify-between items-center mt-7'>
      {/* brands icons left*/}
      <div className='flex space-x-3'>
      <i className='text-2xl'><FontAwesomeIcon icon={faFacebook}/></i>
      <i className='text-2xl'><FontAwesomeIcon icon={faInstagram}/></i>
      <i className='text-2xl hidden md:block'><FontAwesomeIcon icon={faTwitter}/></i>
      <i className='text-2xl hidden md:block'><FontAwesomeIcon icon={faLinkedin}/></i>
      </div>
    {/* fa icons center */}
    <div className='flex flex-col  space-y-4 md:mr-16 ml-5 md:ml-0'>
      <div className='flex space-x-12 mt-8 '>
        <i className='text-2xl'><FontAwesomeIcon icon={faLocation}/></i>
        <i className='text-2xl'><FontAwesomeIcon icon={faGlobe}/></i>
      </div>
      <button className="p-1 rounded-lg bg-blue-600 border border-blue-600 hover:bg-white text-white hover:text-black text-xs">Follow</button>
    </div>
    {/* right */}
    <div className='flex space-x-3'>
    <i className='text-2xl'><FontAwesomeIcon icon={faEnvelope}/></i>
      <i className='text-2xl'><FontAwesomeIcon icon={faEllipsisV}/></i>
    </div>

      </div>
      </div>
      <Post />

    </div>
  )
}
