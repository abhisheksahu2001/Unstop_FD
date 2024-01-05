import React, { createContext, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

// Define the shape of the context data using TypeScript interfaces
interface GlobalContextProps {
    OpenMobileMenu: boolean;
    setOpenMobileMenu: (value: boolean) => void;
    currentRoute: string;
    setCurrentRoute: (value: string) => void;
    MobileToggle: boolean;
    setMobileToggle: (value: boolean) => void;
    ShowDetails: boolean;
    setShowDetails: (value: boolean) => void;
    ShowAddAssessmentModal: boolean;
    setAddAssessmentModal: React.Dispatch<React.SetStateAction<boolean>>;
    sideBarButtonRef: React.MutableRefObject<HTMLButtonElement | null>;
}
// Create the context with initial values
const GlobalContext = createContext<GlobalContextProps>({
    ShowAddAssessmentModal: false,
    setAddAssessmentModal: () => { },
    sideBarButtonRef: null,
    OpenMobileMenu: false,
    setOpenMobileMenu: () => { },
    currentRoute: '',
    setCurrentRoute: () => { },
    MobileToggle: false,
    setMobileToggle: () => { },
    ShowDetails: false,
    setShowDetails: () => { },
});
// Create a wrapper component that provides the context to its children
const ContextWrapper = ({ children }) => {
    // State variables for different pieces of global state
    const sideBarButtonRef = useRef(null);
    const [OpenMobileMenu, setOpenMobileMenu] = useState(false);
    const [MobileToggle, setMobileToggle] = useState(false);
    const [ShowDetails, setShowDetails] = useState(false);
    const [ShowAddAssessmentModal, setAddAssessmentModal] = useState(false);
    const [currentRoute, setCurrentRoute] = useState('')
    // Memoize the context value to avoid unnecessary re-renders
    const contextValue = useMemo(
        () => ({
            OpenMobileMenu,
            setOpenMobileMenu,
            ShowAddAssessmentModal,
            setAddAssessmentModal,
            currentRoute,
            setCurrentRoute,
            MobileToggle,
            setMobileToggle,
            ShowDetails,
            setShowDetails,
            sideBarButtonRef,
        }),
        // List of dependencies that trigger a recalculation of the context value
        [MobileToggle, currentRoute, ShowAddAssessmentModal,
            setAddAssessmentModal, sideBarButtonRef, OpenMobileMenu, setOpenMobileMenu, setCurrentRoute, setMobileToggle, ShowDetails, setShowDetails]
    );
    // Provide the context value to its children
    return (
        <GlobalContext.Provider value={contextValue} >
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, ContextWrapper };