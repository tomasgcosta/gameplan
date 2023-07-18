import React from 'react'
import { useLocation } from 'react-router-dom';
import logo from '../../assets/ijji.png'

const Footer = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    if (!isHomePage) {
        return null
    }

    return (
        <div className='flex justify-center px-6 py-4 lg:px-[15.5rem] lg:py-[2rem]'>
        <div className='flex flex-row text-white'>
            <div className='pr-4'>
                <p>ijji was a free multiplayer game portal website. Games hosted at ijji ranged from traditional shooters and MMORPGs to more accessible casual games, all of which were free to download and play, and with the majority featuring competitive multiplayer gameplay. The ijji website opened on July 7, 2006. The American-based game portal has published some well known worldwide titles that include Alliance of Valiant Arms, GunZ, and Soldier Front.
                <br />
                On January 5, 2012, NHN Corporation sold 100% stake of ijji to Aeria Games who began to host ijji's core games (GunZ, Soldier Front, and Alliance of Valiant Arms). 
                <br />
                As of July 22, 2012, all ijji services were taken down. On July 23, 2012, account transfers were open for users to transfer existing account data to Aeria Games.
                </p>
                <p className='pt-4'>
                    Source: <a className='text-[#ED5611] hover:text-[#FCCA2E] transition-all duration-300 ease-out' href="https://en.wikipedia.org/wiki/Ijji">Ijji on Wikipedia</a>
                </p>
            </div>
            <div className=''>
                <img src={logo} className='h-[6rem] min-w-[8rem]'/>
                <p>Logo by <a className='text-[#ED5611] hover:text-[#FCCA2E] transition-all duration-300 ease-out' href="https://dribbble.com/ralsya">Jihyun Jung</a></p>
            </div>
        </div>
        </div>
    )
}

export default Footer