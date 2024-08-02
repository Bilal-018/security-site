import React from 'react'
import { FaPhone, FaLocationDot, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa6";
import { TbMailOpenedFilled } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/CM-logo.png'
import OffCanvasMenu from './OffCanvasMenu';

const Header = () => {
    const links = [
        { to: "/", text: "Home" },
        { to: "/about", text: "About Us" },
        { to: "/services", text: "Services" },
    ];

    return (
        <header>
            <div className='py-3 bg-black max-md:hidden'>
                <div className='max-w-[1140px] max-xl:px-6 mx-auto flex justify-between items-center'>
                    <div className='text-white flex gap-x-9'>
                        <div className='flex gap-x-2'>
                            <FaPhone className='text-logoRed text-xl mt-1' />
                            <span className='font-semibold'>1300185723</span>
                        </div>
                        <div className='flex gap-x-2'>
                            <FaLocationDot className='text-logoRed text-xl mt-1' />
                            <span className='font-semibold'>QueensLand AU</span>
                        </div>
                        <div className='flex gap-x-2'>
                            <TbMailOpenedFilled className='text-logoRed text-xl mt-1' />
                            <span className='font-semibold'>admin@mail.com.au</span>
                        </div>
                    </div>
                    <div className='text-white flex text-xl gap-x-3'>
                        <a href='/' className='cursor-pointer transition-colors duration-700 ease-in-out hover:text-logoRed'><FaFacebookF /></a>
                        <a href='/' className='cursor-pointer transition-colors duration-700 ease-in-out hover:text-logoRed'><FaTwitter /></a>
                        <a href='/' className='cursor-pointer transition-colors duration-700 ease-in-out hover:text-logoRed'><FaYoutube /></a>
                    </div>
                </div>
            </div>
            <div className='py-3'>
                <div className='max-w-[1140px] max-xl:px-6 mx-auto flex items-center justify-between'>
                    <div>
                        <img className='w-11 h-11' src={logo} alt="mainLogo" />
                    </div>
                    <div className='max-md:hidden'>
                        <ul className='flex gap-x-20 font-semibold'>
                            {links.map((link, index) => (
                                <li key={index}>
                                    <NavLink to={link.to} className={({ isActive }) => (isActive ? "text-logoRed" : "hover:text-logoRed border-b border-b-logoRed hover:border-b-black")}>
                                        {link.text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className='bg-black text-white font-semibold px-8 py-3 transition-colors duration-500 ease-in-out hover:bg-logoRed hover:text-black max-md:hidden'>Contact Us</button>
                    <OffCanvasMenu />
                </div>
            </div>
        </header>
    )
}

export default Header