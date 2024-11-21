import React, {  useState } from 'react'
import jcor from './../../../images/jcor.jpg'
import {FontAwesomeIcon}from "@fortawesome/react-fontawesome"
import {faEllipsisH,faHeart,faShareNodes,faComment}from "@fortawesome/free-solid-svg-icons"
import { Comme } from '../../comments/Comme'
import { Link } from 'react-router-dom'
export const Posts = (props) => {
  const like=true;
  const [showComment, setShowComment]=useState(false);


  function handleComments(){
    setShowComment((prv)=>{
      return !prv;
    })
  }
  

 
  return (
    
    <div>

    <div className='bg-white dark:bg-gray-800 dark:text-white mt-6  w-full p-2 flex flex-col justify-center space-x-4 space-y-6  rounded-t-lg'>
      {/* get from data img*/}
      <div className='flex justify-between items-center space-x-3'>
          <div className='flex justify-start items-center space-x-3'>
        <Link to="profile/1"> <img src={props.profile} alt="profilePicture" className='h-10 w-10 rounded-full'/></Link> 
          <div className='flex flex-col space-y-1 items-center '>
          <h1 className='text-sm capitalize font-mono'>{props.Name}</h1>
          <p className='text-xs'>2 mins ago</p>
        </div>
          </div>
          <div className="icon cursor-pointer"><FontAwesomeIcon icon={faEllipsisH}/></div>
        </div>
      <div className='rounded-lg'>
        <img src={jcor} alt=""  className=' rounded-lg md:h-[500px] h-[350px] w-[98%]  object-cover shadow-lg '/>
        <div className="flex space-x-6 my-5 ml-4">
          <div className='cursor-pointer'>
         {like? <i className='text-red-600'><FontAwesomeIcon icon={faHeart}/></i>: <i><FontAwesomeIcon icon={faHeart}/></i>}
         <span className='mx-3'>8 Like</span>
          </div>
          <div onClick={handleComments} className='cursor-pointer'>
            <i><FontAwesomeIcon icon={faComment}/></i>
            <span className='mx-3'>9 Comments</span>
          </div>
         <div className='cursor-pointer'>
          <i><FontAwesomeIcon icon={faShareNodes}/></i>
          <span className='mx-3'>Sharing</span>
         </div>
          
        </div>
      </div>
    </div>

     {
    showComment?<div className='bg-white dark:bg-gray-800 dark:text-white  w-full rounded-b-lg'>
        <Comme />
      </div>:null
      }

      <div className='bg-white dark:bg-gray-800 dark:text-white mt-6  w-full p-6 flex flex-col justify-center space-x-4 space-y-6  rounded-lg mb-6'>
      <div className='flex justify-between items-center space-x-3'>
          <div className='flex justify-start items-center space-x-3'>
            <Link to="/profile/1">
          <img src={props.profile} alt="profilePicture" className='h-10 w-10 rounded-full'/>
          </Link>
          <div className='flex flex-col space-y-1 items-center '>
          <h1 className='text-sm capitalize font-mono'>{props.Name}</h1>
          <p className='text-xs'>2 mins ago</p>
        </div>
          </div>
          <div className="icon cursor-pointer"><FontAwesomeIcon icon={faEllipsisH}/></div>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius laboriosam atque provident, earum dolore molestias saepe doloribus, recusandae sint natus delectus deserunt nulla dolores autem expedita quibusdam facere quod. Voluptas!</p>
        <div className="flex space-x-6 my-5 ml-4">
          <div className='cursor-pointer'>
         {like? <i className='text-red-600'><FontAwesomeIcon icon={faHeart}/></i>: <i><FontAwesomeIcon icon={faHeart}/></i>}
         <span className='mx-3'>4 Like</span>
          </div>
          <div className='cursor-pointer'>
            <i><FontAwesomeIcon icon={faComment}/></i>
            <span className='mx-3'>2 Comments</span>
          </div>
         <div className='cursor-pointer'>
          <i><FontAwesomeIcon icon={faShareNodes}/></i>
          <span className='mx-3'>Sharing</span>
         </div>
          
        </div>
      </div>

 

    </div>
  )
}
