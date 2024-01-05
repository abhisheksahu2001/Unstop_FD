import React, { useContext, useEffect, useRef, useState } from 'react';
import { MdDashboard } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { BsEject, BsWindowStack } from "react-icons/bs";
import classNames from 'classnames';
import { GlobalContext } from '../context/globalContext';
import { useNavigate } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import useResolution from '../Hooks/useResolution';

const SideBar = () => {
    // Access the global context for managing the state
    const navigate = useNavigate();
    const { breakpoint } = useResolution();
    const { setCurrentRoute, currentRoute, OpenMobileMenu, setOpenMobileMenu, sideBarButtonRef } = useContext(GlobalContext);

    // Refs for handling clicks outside the sidebar
    const sideBarParentRef = useRef<HTMLDivElement | null>(null);
    const sideBarChildRef = useRef<HTMLDivElement | null>(null);
    const sideBarCloseButtonRef = useRef<HTMLButtonElement | null>(null);

    // Navigation links with icons and roles
    const navLinks = [
        { id: "grbtrb-543bb-4t35", name: "Dashboard", role: 'user', icon: MdDashboard },
        { id: "tbtrtf-583bb-4t35", name: "Assessment", role: 'user', icon: SlNote },
        { id: "dfyrnf-583bb-4t35", name: "My Library", role: 'user', icon: BsWindowStack },
        { id: "tewgth-583bb-4t35", name: "Round Status", role: 'admin', icon: BsWindowStack },
    ];

    const [sideBarHeight, setSideBarHeight] = useState(100);

    // Function to handle route navigation
    const handleRouteing = (route: string) => {
        navigate(route);
        setCurrentRoute(route);
    };

    useEffect(() => {
        setSideBarHeight(Math.round(window.innerHeight / 16));
    }, [breakpoint]);

    useEffect(() => {
        // Function to close sidebar on a click outside
        const closeOnAwayClick = (event: MouseEvent) => {
            if (
                sideBarParentRef.current &&
                sideBarChildRef.current &&
                sideBarCloseButtonRef.current
            ) {
                if (
                    sideBarParentRef.current.contains(event.target as Node) &&
                    !sideBarChildRef.current.contains(event.target as Node) &&
                    !sideBarCloseButtonRef.current.contains(event.target as Node) &&
                    !sideBarButtonRef.current?.contains(event.target as Node)
                ) {
                    setOpenMobileMenu(false);
                }
            }
        };

        window.addEventListener('click', closeOnAwayClick);
        return () => {
            window.removeEventListener('click', closeOnAwayClick);
        };
    }, [sideBarParentRef, sideBarChildRef]);

    return (
        <div ref={sideBarParentRef} style={{ height: (breakpoint === 'sm' || breakpoint === 'md') && `${sideBarHeight}rem` }} className={classNames('duration-200 z-20 fixed md:h-screen ', OpenMobileMenu && ('bg-[rgba(0,0,0,0.5)] w-full '))}>
            <div ref={sideBarChildRef} style={{ height: (breakpoint === 'sm' || breakpoint === 'md') && `${sideBarHeight}rem` }} className={classNames('md:translate-x-0 bg-secondaryBackground md:pt-5 duration-300 lg:h-[inherit] p-5 ',
                'fixed w-[70%] pt-10 md:w-auto z-50 lg:relative ',
                OpenMobileMenu ? 'translate-x-0' : '-translate-x-[100%]'
            )}>
                {/* Mobile view: Menu title and close button */}
                <div className='flex md:hidden item-center justify-between px-2'>
                    <h3 className='font-font-inter font-semibold text-primaryText'>Menu</h3>
                    <button ref={sideBarCloseButtonRef} onClick={() => setOpenMobileMenu(false)}>
                        <IoMdClose type='button' className='cursor-pointer' />
                    </button>
                </div>
                <div className={classNames('flex flex-col justify-center gap-4 p-5 md:p-0 md:items-center')}>
                    {/* Sidebar navigation links */}
                    {navLinks && navLinks.map((link) => (
                        <li key={link.id} className={classNames('list-none w-full')}>
                            {link.role === 'user' ? (
                                // User role link
                                <button type='button' className={classNames('flex md:flex-col w-full px-4 min-w-[100px] items-center gap-2',
                                    'hover:bg-AccentBlueBackground hover:text-AccentBlue',
                                    'p-3 rounded-md border capitalize text-sm duration-150 hover:border-AccentBlue',
                                    currentRoute === link.name ? "text-AccentBlue border-AccentBlue bg-AccentBlueBackground" : "text-primaryText border-transparent",
                                )} onClick={() => handleRouteing(link.name)}>
                                    <link.icon size={20} />
                                    <h3 className='font-semibold'>{link.name}</h3>
                                </button>
                            ) : (
                                // Admin role link
                                <>
                                    <p className='mt-2 mb-4 border border-dashed border-primaryBorder' />
                                    <button type='button' className={classNames('flex md:flex-col-reverse w-full justify-between min-w-[100px] items-center gap-2',
                                        'hover:bg-AccentBlueBackground hover:text-AccentBlue',
                                        'p-3 rounded-md border capitalize text-sm duration-150 hover:border-AccentBlue',
                                        currentRoute === link.name ? "text-AccentBlue border-AccentBlue bg-AccentBlueBackground" : "text-primaryText border-transparent",
                                    )} onClick={() => handleRouteing(link.name)}>
                                        {/* Admin role link with additional role badge */}
                                        <span className={classNames('flex items-center flex-row gap-2 md:flex-col')}>
                                            <link.icon size={20} />
                                            <h3 className='font-semibold'>{link.name}</h3>
                                        </span>
                                        <p className='rounded-full px-2 font-semibold text-xs my-2 bg-AccentRedBackground text-AccentRed border border-AccentRed'>{link.role}</p>
                                    </button>
                                </>
                            )}
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SideBar;