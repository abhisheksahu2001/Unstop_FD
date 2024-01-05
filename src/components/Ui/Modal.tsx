import classNames from 'classnames';
import React, { useEffect } from 'react';
import { IoMdClose } from "react-icons/io";

// Define the props interface for the Modal component
interface IModalProps {
    children: React.ReactNode;
    handleClose: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    showModal?: boolean;
}

// Modal component receives the props and renders a modal dialog
const Modal = ({ children, handleClose, title, showModal }: IModalProps) => {
    return (
        <div
            className={classNames(
                'overflow-hidden text-primaryText duration-500 justify-center items-center flex overflow-x-hidden',
                'fixed inset-0 z-50 outline-none focus:outline-none bg-[rgba(0,0,0,0.5)] transition-opacity',
                showModal ? 'opacity-100' : 'opacity-0 invisible pointer-events-none'
            )}
        >
            <div className={classNames(
                'relative duration-500 md:h-4/5 overflow-hidden w-full md:w-4/6 lg:w-3/6',
                'xl:w-2/5 xl:my-6 mx-auto lg:h-full',
                showModal ? 'translate-y-[10%]' : 'translate-y-full'
            )}>
                <div
                    className={classNames(
                        'translate h-full lg:h-auto md:h-auto',
                        'border-0 rounded-lg shadow-lg relative flex flex-col w-full',
                        'bg-secondaryBackground outline-none focus:outline-none',
                    )}
                >
                    {/* Header section with title and close button */}
                    <div className='flex items-center justify-between py-4 xl:py-2 px-4 border-b border-b-primaryBorder'>
                        <div className="2xl:text-xl font-semibold">
                            {title}
                        </div>
                        <button
                            type="button"
                            onClick={() => handleClose(false)}
                        >
                            <IoMdClose size={25} />
                        </button>
                    </div>
                    {/* Content section */}
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;