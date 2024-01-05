import React, { MouseEventHandler } from 'react'
import { IconType } from 'react-icons'

interface AddCard {
    Icon: IconType;
    iconSize?: number | string;
    title: string;
    subTitle: string;
    handleClick: MouseEventHandler<HTMLButtonElement>;
}

const AddCard = ({ Icon, iconSize, title, subTitle, handleClick }: AddCard) => {
    return (
        <button className='font-font-inter  font-medium flex items-center gap-3 xl:gap-4 justify-center
         flex-col max-w-[450px]  min-w-[350px] min-h-[200px]  bg-primaryBackground p-8 border border-dashed  border-primaryBorder
         rounded-xl
         '
            onClick={handleClick}  >
            <Icon size={iconSize ?? 60} className=' rounded-full bg-secondaryBackground p-4 text-AccentBlue    ' />
            <h2 className='text-lg md:text-xl  text-primaryText ' >{title}</h2>
            <p className=' text-xs md:text-sm  text-primaryText font-semibold   ' >{subTitle}</p>
        </button>
    )
}

export default AddCard