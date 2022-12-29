import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

const Signup = () => {
    return (
        <div className='bg-gradient-to-r from-gray-900 to-gray-800 h-screen w-screen relative overflow-hidden flex flex-col justify-center items-center'>
            <div className='w-40-r h-40-r bg-gradient-to-r from-cyan-500 to-blue-600 animate-upDown rounded-full absolute left-2/3 -top-56'></div>
            <div className='w-35-r h-35-r bg-gradient-to-r from-[#A91079] to-[#570A57] rounded-full absolute top-2/3 md:top-96 -left-72 md:-left-9 animate-downUp'></div>
            <div className='container h-96 md:w-35-r w-80 bg-white bg-opacity-10 relative z-2 rounded-2xl shadow-2xl border border-r-0 border-b-0 border-l-gray-500 border-t-gray-500
            backdrop-filter backdrop-blur-sm'>

                <form className='h-full flex flex-col justify-evenly items-center'>
                    <div className='font-poppins text-white text-5xl uppercase'>SignUp</div>
                    <input type="text" placeholder='Username' className='bg-transparent text-white border border-l-0 border-r-0 border-t-0 
                    focus:outline-none border-cyan-500' />
                    <input type="password" placeholder='Password' className='bg-transparent text-white border border-l-0 border-r-0 border-t-0 
                    focus:outline-none border-cyan-500'/>
                    <input type="password" placeholder='Confirm Password' className='bg-transparent text-white border border-l-0 border-r-0 border-t-0 
                    focus:outline-none border-cyan-500'/>
                    <a href="#_" className="rounded-md px-5 py-2.5 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-cyan-600 text-cyan-600">
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-cyan-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative text-cyan-600 transition duration-300 group-hover:text-white ease uppercase">SignUP</span>
                    </a>
                    <p className='text-white text-sm'>Already Have Account? <Link to='/' className='text-cyan-400 italic'>LOGIN</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Signup
