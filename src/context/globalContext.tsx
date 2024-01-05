import React, { createContext, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

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
    sideBarButtonRef: React.MutableRefObject<null | HTMLButtonElement>
}

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

const ContextWrapper = ({ children }) => {
    const sideBarButtonRef = useRef(null);
    const [OpenMobileMenu, setOpenMobileMenu] = useState(false);
    const [MobileToggle, setMobileToggle] = useState(false);
    const [ShowDetails, setShowDetails] = useState(false);
    const [ShowAddAssessmentModal, setAddAssessmentModal] = useState(false);
    const [currentRoute, setCurrentRoute] = useState('')
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
        [MobileToggle, currentRoute, ShowAddAssessmentModal,
            setAddAssessmentModal, sideBarButtonRef, OpenMobileMenu, setOpenMobileMenu, setCurrentRoute, setMobileToggle, ShowDetails, setShowDetails]
    );

    return (
        <GlobalContext.Provider value={contextValue} >
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, ContextWrapper };