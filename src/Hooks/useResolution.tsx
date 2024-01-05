import React, { useEffect, useState } from 'react';

const useResolution = () => {
    // Initial state with window.innerWidth and window.innerHeight
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    // Initial breakpoint state
    const [breakpoint, setBreakpoint] = useState('lg');

    // Function to update screen size and breakpoint based on the width
    const updateScreenSizeAndBreakpoint = () => {
        const width = window.innerWidth;

        // Update the screenSize state with the current width and height
        setScreenSize({ width, height: window.innerHeight });

        // Update the breakpoint based on the width
        if (width <= 640) {
            setBreakpoint('sm');
        } else if (width <= 768) {
            setBreakpoint('md');
        } else if (width <= 1024) {
            setBreakpoint('lg');
        } else if (width <= 1280) {
            setBreakpoint('xl');
        } else {
            setBreakpoint('2xl');
        }
    };

    useEffect(() => {
        // Initial call to updateScreenSizeAndBreakpoint
        updateScreenSizeAndBreakpoint();

        // Event listener for window resize to update the sizes and breakpoint
        window.addEventListener('resize', updateScreenSizeAndBreakpoint);

        // Cleanup: Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', updateScreenSizeAndBreakpoint);
        };
    }, []); // Empty dependency array ensures that the effect runs only once during component mount

    return { breakpoint };
};

export default useResolution;