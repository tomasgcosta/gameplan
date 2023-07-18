import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FiMenu } from 'react-icons/fi';
import { HiDownload } from 'react-icons/hi';
import Login from './Login';

const Navbar = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const loginRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (loginRef.current && !loginRef.current.contains(e.target)) {
        setOpenLogin(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="bg-gradient-to-b from-[#6a696b] to-[#262527]">
      <div className="mx-[3rem] flex items-center max-w-[80vw] relative">

        {/* Logo */}
        <div className="flex items-center justify-center lg:justify-start py-4 px-4 lg:py-6 lg:px-8 w-full lg:w-auto">
          <div className="lg:hidden left-[0.05px] absolute text-white" onClick={toggleMenu}>
            <FiMenu className="text-[30px]" />
          </div>
          <Link to="/">
            <div className="flex items-center">
              <img src={logo} className="w-12 h-12 mr-2" alt="Logo" />
            </div>
          </Link>
        </div>

        {/* Menu para Mobile */}
        {showMenu && (
          <div className="lg:hidden absolute top-16 right-0 bg-[#6a696b] w-full text-white py-2">
            <ul className="font-semibold text-[#c5c3c0] flex flex-col gap-2">
              <li className=' hover:text-white duration-100 ease-out'>
              <Link to="/games" className="hover:text-white duration-100 ease-out">
                Games
              </Link>
              </li>
              <li className=' hover:text-white duration-100 ease-out'>
              <Link to="/contact" className="hover:text-white duration-100 ease-out">
                Contact Me
              </Link>
              </li>
              <li>
                <button
                  className=" hover:text-white duration-100 ease-out"
                  onClick={() => setOpenLogin((prev) => !prev)}
                >
                  Login
                </button>
                {openLogin && <Login />}
              </li>
              <li>
                <p className=" hover:text-white duration-100 ease-out">
                  Language
                </p>
              </li>
            </ul>
          </div>
        )}

        {/* Category Names */}
        <div className="hidden lg:flex pl-10">
          <ul className="font-semibold text-[#c5c3c0] text-[13px] flex gap-6">
            <li>
              <Link to="/games" className="hover:text-white duration-100 ease-out">
                Games
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white duration-100 ease-out">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>

        {/* Download/Login/Language */}
        <div className="absolute text-white -right-10 top-0 text-[12px] lg:flex items-center mt-2 hidden">
          <div className="flex items-center bg-[#ED5611] px-2 py-1 rounded-[0.2rem]">
            <HiDownload className="mr-2" />
            <p className=" ">Download ijji Reactor</p>
          </div>
          <div className="ml-4 px-2 py-[2px] rounded-[0.5rem] group duration-100 ease-out" ref={loginRef}>
            <button
              className="text-[#808080] font-semibold hover:text-white duration-100 ease-out"
              onClick={() => setOpenLogin((prev) => !prev)}
            >
              Login
            </button>
            {openLogin && <Login />}
          </div>

          <div className="h-[15px] w-[1px] bg-[#808080] mx-2"></div>

          <div className="pl-2 flex items-center">
            <p className="text-[#808080] font-semibold hover:text-white duration-100 ease-out">
              Language
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
