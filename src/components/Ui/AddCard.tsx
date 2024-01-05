import React, { MouseEventHandler } from 'react';
import { IconType } from 'react-icons';

// Define the props interface for the AddCard component
interface AddCardProps {
    Icon: IconType;
    iconSize?: number | string;
    title: string;
    subTitle: string;
    handleClick: MouseEventHandler<HTMLButtonElement>;
}

// AddCard component receives the props and renders a button with specified content and styling
const AddCard = ({ Icon, iconSize, title, subTitle, handleClick }: AddCardProps) => {
    return (
        <button
            className='font-font-inter font-medium flex items-center  xl:gap-8 gap-5 p-2 xl:p-4 
            flex-col  max-w-[450px] min-w-[400px] md:min-w-[350px] min-h-[150px] bg-primaryBackground  border border-dashed  border-primaryBorder
            rounded-xl'
            onClick={handleClick} // Attach the provided click handler
        >
            {/* Render the provided Icon with optional size */}
            <Icon size={iconSize ?? 60} className='rounded-full bg-secondaryBackground p-4 text-AccentBlue' />

            {/* Render the title with specified text size and color */}
            <h2 className='text-lg md:text-xl text-primaryText'>{title}</h2>

            {/* Render the subTitle with specified text size, color, and font weight */}
            <p className='text-xs md:text-sm text-primaryText font-semibold'>{subTitle}</p>
        </button>
    );
}

export default AddCard;