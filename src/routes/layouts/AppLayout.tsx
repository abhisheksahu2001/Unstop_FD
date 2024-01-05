import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from '../../components/Ui/Container'
import SideBar from '../../components/SideBar'
import { GlobalContext } from '../../context/globalContext'
import classNames from 'classnames'

const AppLayout = () => {

    const { MobileToggle, setOpenMobileMenu } = useContext(GlobalContext)
    useEffect(() => {
        const closeMenu = () => setOpenMobileMenu(false);
        window.addEventListener('orientationchange', closeMenu);
        window.addEventListener('resize', closeMenu);
        return () => {
            window.removeEventListener('orientationchange', closeMenu);
            window.removeEventListener('resize', closeMenu);
        };
    }, [setOpenMobileMenu])


    return (
        <Container className={classNames('flex lg:gap-4 bg-primaryBackground  ',
            MobileToggle ? 'w-[400px]    ' : 'w-full'
        )}  >
            <SideBar />
            <Outlet />
        </Container>
    )
}

export default AppLayout