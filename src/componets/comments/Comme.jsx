import  { useContext } from 'react'
import { AuthContext } from '../context/userContext'
import { commentData } from './commentData'
import { Commes } from './Commes'

export const Comme = () => {
  const {currentUser}=useContext(AuthContext)
  return (
    <div className=''>
      <div className="getComment md:ml-8 ml-3 flex space-x-4 items-center p-2">
          <img src={currentUser?.picture} alt="thisphoto" className='w-8 h-8 rounded-full'/>
          <input type="text" className='bg-transparent my-3 border dark:border-gray-400 placeholder:font-mono rounded-lg border-gray-200 px-3 focus:outline-none py-1 w-[76%] ' placeholder='Enter comment'/>
          <button className='bg-blue-400 px-2 py-1 rounded-lg hover:bg-blue-200 hover:text-black'>Send</button>
      </div>
        <div>
            {commentData.map((comment)=>{
                return <Commes desc={comment.desc} name={comment.name} profile={comment.profilePicture} key={comment.id} />
            })}
        </div>
    </div>
  )
}
