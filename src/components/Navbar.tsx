import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { GlobalContext } from '../context/globalContext';
import { FaMobileAlt } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";

interface INavbar {
    children?: React.ReactNode;
}

const Navbar = ({ children }: INavbar) => {
    const { currentRoute, setOpenMobileMenu, sideBarButtonRef } = useContext(GlobalContext)

    return (
        <div className=' fixed z-10  top-0  bg-secondaryBackground w-full border-b border-b-primaryBorder ' >
            <span className='md:px-5  flex flex-col md:flex-row   ' >
                <div className='flex items-center gap-4  mx-2  px-2 py-5 ' >
                    <button ref={sideBarButtonRef} onClick={() => setOpenMobileMenu(true)}>
                        <BiMenuAltLeft size={40} className='md:hidden cursor-pointer bg-primaryBackground  text-primaryText rounded-full    ' />
                    </button>
                    <h1 className='font-semibold font-font-inter md:text-xl text-primaryText  border-r-2  border-primaryBorder md:min-w-[150px] ' >
                        {currentRoute}
                    </h1>
                </div>
                {children}

            </span>
        </div>
    )
}

export default Navbar