import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className='bg-gray-800'>
            {/* Left */}

            <div className='flex items-center text-white font-semibold text-[1.5rem]'>
                <img src={logo} className='h-20 w-20' />
           <p>Gameplan</p>
           </div>

           {/* Middle */}

        </div>
    )
}

export default Navbar