import React, { useContext, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Assessment from '../pages/Assessments.tsx/Assessment'
import { DashboardLayout } from './layouts/DashboardLayout'
import NotFond from '../pages/NotFond'
import { Dashboard } from '../pages/Dashboard'
import { MyLibrary } from '../pages/MyLibrary'
import { RoundStatus } from '../pages/RoundStatus'
import { GlobalContext } from '../context/globalContext'

const RoutesProvider = () => {
    const location = useLocation();
    const { setCurrentRoute } = useContext(GlobalContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (location.pathname === '/') {
            setCurrentRoute('Dashboard')
            navigate('Dashboard')
        } else {
            const path = location.pathname.substring(1);
            const decodePath = decodeURIComponent(path);
            setCurrentRoute(decodePath);
        }
    }, [location])

    return (
        <Routes>
            <Route path='/' element={<AppLayout />}>
                <Route path='/' element={<DashboardLayout />} >
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='assessment' element={<Assessment />} />
                    <Route path='my library' element={<MyLibrary />} />
                    <Route path='round status' element={<RoundStatus />} />
                </Route>
            </Route>
            <Route path='*' element={<NotFond />} />
        </Routes>
    )
}

export default RoutesProvider