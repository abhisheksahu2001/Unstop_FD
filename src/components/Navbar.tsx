import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';
import { BiMenuAltLeft } from "react-icons/bi";

interface INavbarProps {
    children?: React.ReactNode;
}

const Navbar = ({ children }: INavbarProps) => {
    // Access the global context for managing the state
    const { currentRoute, setOpenMobileMenu, sideBarButtonRef } = useContext(GlobalContext);

    return (
        <div className='fixed z-10 top-0 bg-secondaryBackground w-full border-b border-b-primaryBorder'>
            <span className='md:px-5 flex flex-col md:flex-row'>
                {/* Left side: Menu button and current route */}
                <div className='flex items-center gap-4 mx-2 px-2 py-5'>
                    <button ref={sideBarButtonRef} onClick={() => setOpenMobileMenu(true)}>
                        {/* Menu button for mobile view */}
                        <BiMenuAltLeft size={40} className='md:hidden cursor-pointer bg-primaryBackground text-primaryText rounded-full' />
                    </button>
                    {/* Display the current route */}
                    <h1 className='font-semibold font-font-inter md:text-xl text-primaryText border-r-2 border-primaryBorder md:min-w-[150px]'>
                        {currentRoute}
                    </h1>
                </div>
                {/* Right side: Additional children components */}
                {children}
            </span>
        </div>
    );
}

export default Navbar;