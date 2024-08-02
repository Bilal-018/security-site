import React, { useState } from 'react';
import { FaBars, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/CM-logo.png';
import { FaTimes } from "react-icons/fa";

const OffCanvasMenu = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const handleMenuOpen = () => {
        setOpenMenu(!openMenu);
    }

    const links = [
        { to: "/", text: "Home" },
        { to: "/about", text: "About Us" },
        { to: "/services", text: "Services" },
    ];

    return (
        <div className='md:hidden'>
            <div className='text-xl' onClick={handleMenuOpen}>
                <FaBars />
            </div>
            <div className={`${openMenu ? 'opacity-100 visible' : 'invisible'} absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80`} onClick={handleMenuOpen}>
                <div className={`${openMenu ? 'opacity-100 translate-x-0' : 'translate-x-[calc(100%_+_80px)] opacity-0'} fixed top-0 right-0 w-[400px] max-sm:w-[300px] h-full bg-white border-l-2 border-logoRed transform transition-transform duration-500 ease-in-out z-[99999] overflow-y-scroll overscroll-contain`} onClick={(event) => event.stopPropagation()}>
                    <div className='p-5 h-full flex flex-col justify-between'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <img className='w-11 h-11' src={logo} alt="mainLogo" />
                            </div>
                            <button className='bg-black px-2 py-2 rounded-full text-white text-xl' onClick={handleMenuOpen}>
                                <FaTimes />
                            </button>
                        </div>
                        <ul className='font-semibold flex flex-col items-center gap-y-6'>
                            {links.map((link, index) => (
                                <li key={index}>
                                    <NavLink to={link.to} className={({ isActive }) => (isActive ? "text-logoRed" : "hover:text-logoRed border-b border-b-logoRed")}>
                                        {link.text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <div className='text-black flex text-xl gap-x-6'>
                            <a href='/' className='cursor-pointer transition-colors duration-700 ease-in-out hover:text-logoRed'><FaFacebookF /></a>
                            <a href='/' className='cursor-pointer transition-colors duration-700 ease-in-out hover:text-logoRed'><FaTwitter /></a>
                            <a href='/' className='cursor-pointer transition-colors duration-700 ease-in-out hover:text-logoRed'><FaYoutube /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OffCanvasMenu