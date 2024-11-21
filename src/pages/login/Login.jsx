import {React,useContext} from 'react'
import {Link}from "react-router-dom"
import { AuthContext } from '../../componets/context/userContext'

export const Login = () => {
  const {checkLogin}=useContext(AuthContext)
  function handleLogin(){
    checkLogin();
  }
  return (
    <div className='w-full h-screen flex items-center justify-center bg-slate-400'>
        <div className="cart  rounded-md flex z-50">

            <div className="left bg-login-img bg-no-repeat bg-cover   flex-col  text-cente text-white p-6 hidden md:flex w-[350px] rounded-lg">
                <h1 className='text-6xl font-bold uppercase '>Hello world.</h1>
                <p className='text-lg font-sans font-semibold mt-8'>welcome to social media on this we can find new frind no only this but also we can do a lot of hobby and business.</p>

                <h3 className='font-semibold text-xl mt-12'>If you don`t have account</h3>

              <div>
                    <Link to="/register">
                        <button className='py-2 px-5 rounded-lg bg-slate-300 focus:outline-none active:scale-90 text-gray-600 hover:opacity-75 text-lg font-bold mt-5'>Register</button>
                    </Link>
              </div>
            </div>
            <div className="right  bg-slate-200 pt-16 p-6 w-[350px] rounded-lg">
                <h1 className='font-bold text-3xl mt-10 ml-6 font-serif'>Log in</h1>

                <form action="">
                    {/* user name */}
                    <input type="text" name="" id="" className='rounded-md bg-transparent focus:outline-none border-none shadow-xl px-2 py-2 placeholder:text-gray-400 w-full mt-10' placeholder='Username' />

                    {/* password */}
                    <input type="password" name="" id="" className='rounded-md bg-transparent focus:outline-none border-none shadow-xl px-2 py-2 placeholder:text-gray-400 w-full mt-5' placeholder='password' />

                <div>
                  <Link to="/">
              <button className='py-2 px-12 rounded-lg bg-slate-300 focus:outline-none active:scale-90 text-gray-600 mt-8 hover:opacity-75 text-lg font-bold mb-16 font-serif' onClick={handleLogin}>Login</button>
              </Link>
              </div>
                </form>
            </div>
        </div>
    </div>
  )
}
 