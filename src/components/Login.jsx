import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Signup from './Signup'

const Login = () => {
    return (
        <div className='bg-gradient-to-r from-gray-900 to-gray-800 h-screen w-screen relative overflow-hidden flex flex-col justify-center items-center'>
            <div className='w-40-r h-40-r bg-gradient-to-r from-cyan-500 to-blue-600 animate-upDown rounded-full absolute left-2/3 -top-56'></div>
            <div className='w-35-r h-35-r bg-gradient-to-r from-[#A91079] to-[#570A57] rounded-full absolute top-2/3 md:top-96 -left-72 md:-left-9 animate-downUp'></div>
            {/* w-35-r h-35-r bg-gradient-to-r from-[#A91079] to-[#570A57] rounded-3xl rotate-45 absolute top-3/4 md:top-2/3 -left-72 md:-left-9 */}
            <div className='container h-96 md:w-35-r w-80 bg-white bg-opacity-10 relative z-2 rounded-2xl shadow-2xl border border-r-0 border-b-0 border-l-gray-500 border-t-gray-500
            backdrop-filter backdrop-blur-sm'>

                <form className='h-full flex flex-col justify-evenly items-center'>
                    <div className='font-poppins text-white text-4xl uppercase'>login form</div>
                    <input type="text" placeholder='Username' className='bg-transparent text-white border border-l-0 border-r-0 border-t-0 
                    focus:outline-none border-cyan-500' />
                    <div className='flex flex-col'>
                        <input type="password" placeholder='Password' className='bg-transparent text-white border border-l-0 border-r-0 border-t-0 
                    focus:outline-none border-cyan-500'/>
                        <a href="#" className='text-cyan-400'>Forgot Password?</a>
                    </div>
                    <a href="#_" className="rounded-md px-5 py-2.5 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-cyan-600 text-cyan-600">
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-cyan-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative text-cyan-600 transition duration-300 group-hover:text-white ease">LOGIN</span>
                    </a>
                    <p className='text-white text-sm'>New Here? <Link to='/signup' className='text-cyan-400 uppercase italic'>SignUp</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login