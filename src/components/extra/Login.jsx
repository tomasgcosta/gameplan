import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='absolute flex flex-col top-8 right-20 px-4 py-4 text-[#ebe9e6] bg-gradient-to-b from-[#262527] to-[#424142] rounded-t shadow-md z-50'>
            <form>
                <div>
                    <label htmlFor="email" className='text-[#c5c3c0]'>SIGN IN WITH EMAIL</label>
                    <input type="email" name="email" id="" className='drop-shadow-md bg-[#4e4c50] rounded px-2 w-full h-6' />
                </div>

                <div className='pt-1'>
                    <label htmlFor="" className='text-[#c5c3c0]'>PASSWORD</label>
                    <input type="password" name="" id="" className='drop-shadow-md bg-[#4e4c50] rounded px-2 w-full h-6' />
                </div>

                <div className='text-xs flex flex-col pt-1 text-[#c5c3c0]'>
                    Don't have an account? <Link to="/signup" className='text-[#ED5611] hover:text-[#FCCA2E] transition-all duration-300ms ease-out'>Create one now!</Link>
                </div>

                <div className='pt-4 flex justify-center'>
                    <button className='w-16 py-1 px-2 bg-[#ED5611] hover:bg-[#fc6824]'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
