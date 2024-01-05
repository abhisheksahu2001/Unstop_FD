import React, { useContext, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';
import { Container } from '../../components/Ui/Container';
import { GlobalContext } from '../../context/globalContext';
import classNames from 'classnames';
import Modal from '../../components/Ui/Modal';
import AddAssessmentModal from '../../pages/Assessments.tsx/Modals/AddAssessmentModal';

export const DashboardLayout = () => {
    const { currentRoute, ShowAddAssessmentModal, setAddAssessmentModal } = useContext(GlobalContext);

    // Child Navbar for Assessment Navbar
    const Assessment = (
        <div className='flex'>
            <button type='button' className='flex-1 border-b-2 md:mx-2 md:px-2 md:py-5 pb-4 font-font-inter font-semibold text-AccentBlue'>
                <li className='list-none'>My Assessments</li>
            </button>
            <button type='button' className='md:hidden flex-1 border-b-2 md:mx-2 md:px-2 md:py-5 pb-4 font-font-inter border-transparent font-semibold text-primaryText'>
                <li className='list-none'>Unstop Assessments</li>
            </button>
        </div>
    );



    return (
        <Container className={classNames('flex flex-col w-full lg:ml-40 rounded-md py-5 bg-secondaryBackground')}>
            {/* Navbar component for rendering navigation bar */}
            <Navbar>
                {/* Render the Assessment buttons only if the current route is 'Assessment' */}
                {currentRoute === 'Assessment' && Assessment}
            </Navbar>
            {/* Outlet is a placeholder where child routes will be rendered */}
            <Outlet />
            {/* Modal for adding a new assessment */}
            <Modal title='Create new assessment' showModal={ShowAddAssessmentModal} handleClose={setAddAssessmentModal}>
                <AddAssessmentModal />
            </Modal>
        </Container>
    );
};