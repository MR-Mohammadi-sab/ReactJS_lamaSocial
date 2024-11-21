import React from 'react'
import {Link} from 'react-router-dom'
export const Sigin = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-orange-500'>
    <div className="cart  rounded-md flex ">
    <div className="left  bg-orange-400 pt-16 p-6 w-[350px] rounded-lg">
            <h1 className='font-bold text-5xl mt-10 ml-6 font-serif'>Register</h1>

            <form action="">
                {/* user name */}
                <input type="text" name="" id="" className='rounded-md bg-transparent focus:outline-none border-none shadow-xl px-2 py-2 placeholder:text-gray-50 w-full mt-10' placeholder='Username' />
                
                {/* email */}
                <input type="email" name="" id="" className='rounded-md bg-transparent focus:outline-none border-none shadow-xl px-2 py-2 placeholder:text-gray-50 w-full mt-5' placeholder='email@exmpal.com' />

                
                {/* password */}
                <input type="password" name="" id="" className='rounded-md bg-transparent focus:outline-none border-none shadow-xl px-2 py-2 placeholder:text-gray-50 w-full mt-5' placeholder='password' />

                
                {/*repeat password */}
                <input type="password" name="" id="" className='rounded-md bg-transparent focus:outline-none border-none shadow-xl px-2 py-2 placeholder:text-gray-50 w-full mt-5' placeholder='Repeat password' />


            <div>
          <button className='py-2 px-12 rounded-lg bg-orange-300 focus:outline-none active:scale-90 text-gray-800 mt-8 hover:opacity-75 text-lg font-bold mb-8 font-serif'>Register</button>
          </div>
            </form>
        </div>
        <div className="right bg-register-img bg-no-repeat bg-cover   flex-col  text-cente p-6 hidden md:flex w-[350px] rounded-lgs">
            <h1 className='text-6xl font-bold uppercase font-serif '>Lama Social</h1>
            <p className='text-lg font-sans font-semibold mt-8'>welcome to social media on this we can find new frind no only this but also we can do a lot of hobby and business.</p>

            <h3 className='font-semibold text-xl mt-12'>Do you have account</h3>

          <div>
            <Link to="/login">
                <button className='py-2 px-12 rounded-lg bg-orange-300 focus:outline-none active:scale-90 text-gray-800 hover:opacity-75 text-lg font-bold mt-5'>Log in</button></Link>
          </div>
        </div>

    </div>
</div>
  )
}
