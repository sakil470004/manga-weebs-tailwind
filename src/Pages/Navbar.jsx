import React, { useState } from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from './../assets/logo.png'
import { useNavigate } from 'react-router';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const navigate = useNavigate();
  const handleClick = () => setNav(!nav)

  const handleClose = () => setNav(!nav)

  return (
    <div className='w-full h-[80px] z-30  bg-gradient-to-r from-[#17A30B] to-[#1A6B13]  drop-shadow-lg text-zinc-200'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <div className='w-[232px] mr-8 '><img src={logo} alt='logo' onClick={() => navigate('/')} /></div>
          <ul className='hidden md:flex md:gap-8 font-bold'>
            <li><Link to="home" smooth={true} duration={500} onClick={() => navigate('/')}>Home</Link></li>
            <li><Link to="about" smooth={true} offset={-200} duration={500}>Latest Manga</Link></li>
            <li><Link to="support" smooth={true} offset={-50} duration={500}>New Manga</Link></li>
            <li><Link to="platforms" smooth={true} offset={-100} duration={500}>Tending</Link></li>
            <li><Link to="pricing" smooth={true} offset={-50} duration={500}>SCANLATION</Link></li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className=' text-black border-2 rounded-lg border-zinc-200
    hover:bg-transparent hover:text-zinc-200 hover:border-black px-6 py-2  mr-4'>
            Sign In
          </button>
          <button className='hover:text-black border-2 rounded-lg hover:border-zinc-200
    hover:bg-transparent text-zinc-200 border-black px-6 py-2  mr-4'>Sign Up</button>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
          {!nav ? <Bars3Icon className='w-5' /> : <XMarkIcon className='w-5' />}

        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-gradient-to-r from-[#17A30B] to-[#1A6B13] w-full px-8 '}>
        <li className='border-b-2 border-black w-full p-4 text-zinc-100 font-bold'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
        <li className='border-b-2 border-black w-full p-4 text-zinc-100 font-bold'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>Latest Manga</Link></li>
        <li className='border-b-2 border-black w-full p-4 text-zinc-100 font-bold'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>New Manga</Link></li>
        <li className='border-b-2 border-black w-full p-4 text-zinc-100 font-bold'><Link onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>Tending</Link></li>
        <li className='border-b-2 border-black w-full p-4 text-zinc-100 font-bold'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>SCANLATION</Link></li>

        <div className='flex flex-col my-4'>
          <button className='text-white border bg-black border-zinc-200
    hover:bg-transparent hover:text-black rounded-md bg-transparent  px-8 py-3 mb-4'>Sign In</button>
          <button className='text-white border bg-black border-zinc-200
    hover:bg-transparent hover:text-black rounded-md bg-transparent  px-8 py-3 '>Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
