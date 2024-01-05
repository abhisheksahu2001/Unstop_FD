import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '../../components/Ui/Container';
import SideBar from '../../components/SideBar';
import { GlobalContext } from '../../context/globalContext';
import classNames from 'classnames';

const AppLayout = () => {
    const { MobileToggle, setOpenMobileMenu } = useContext(GlobalContext);

    // Close the mobile menu on orientation change or window resize
    useEffect(() => {
        const closeMenu = () => setOpenMobileMenu(false);
        window.addEventListener('orientationchange', closeMenu);
        window.addEventListener('resize', closeMenu);

        // Cleanup event listeners when the component unmounts
        return () => {
            window.removeEventListener('orientationchange', closeMenu);
            window.removeEventListener('resize', closeMenu);
        };
    }, [setOpenMobileMenu]);

    return (
        // Container is a custom component, possibly providing styling
        <Container
            className={classNames('flex lg:gap-4 bg-primaryBackground',
                // Adjust the width based on MobileToggle state
                MobileToggle ? 'w-[400px]' : 'w-full'
            )}
        >
            {/* SideBar component responsible for navigation */}
            <SideBar />
            {/* Outlet is a placeholder where child routes will be rendered */}
            <Outlet />
        </Container>
    );
};

export default AppLayout;