import React, { MouseEventHandler } from 'react';
import { IconType } from 'react-icons';
import IconBadge from './IconBadge';
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdLink } from 'react-icons/io';
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import classNames from 'classnames';

// Define the props interface for the Card component
interface ICardProps {
    MainIcon: IconType;
    title: string;
    subTitle: string;
    date: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    Duration: string;
    Question: string;
    BadgeArray?: string[] | string;
    resolution: string;
}

// Card component receives the props and renders a styled card with dynamic content
const Card = ({
    MainIcon,
    title,
    subTitle,
    date,
    handleClick,
    Duration,
    Question,
    BadgeArray,
    resolution
}: ICardProps) => {
    // Color options for badge background
    const color = ['AccentBlue', 'AccentGreen', 'AccentRed'];

    return (
        <section className='font-font-inter font-medium justify-center max-w-[450px] min-w-[400px] md:min-w-[450px] min-h-[150px] flex flex-col xl:gap-5 gap-3 p-2 xl:p-4 border text-primaryText border-primaryBorder hover:bg-primaryBackground rounded-xl'>
            {/* Top section with main content and menu icon */}
            <div className='flex w-full justify-between gap-4 items-start'>
                {/* Left side with main content */}
                <div className='flex gap-2 md:flex-col'>
                    <IconBadge Icon={MainIcon} size={30} color='#6548EE' backgroundColor='#EBE8FD' />
                    <span className='flex flex-col font-semibold'>
                        <p className='md:text-lg lg:text-xl'>{title}</p>
                        <span className='flex items-center'>
                            <p className='border-r border-r-primaryBorder pr-2'>{subTitle}</p>
                            <span className='flex items-center'>
                                <IconBadge Icon={resolution === 'sm' || resolution === 'md' ? GoClock : FaRegCalendarAlt} size={14} color='#1C4980' backgroundColor='#fff' />
                                <time className="font-medium text-sm text-secondaryText">{date}</time>
                            </span>
                        </span>
                    </span>
                </div>
                {/* Right side with menu icon */}
                <IconBadge Icon={BsThreeDotsVertical} color='#1C4980' backgroundColor='#fff' />
            </div>

            {/* Bottom section with additional information */}
            <div className='border-dashed flex justify-between items-center border-t pt-2 border-primaryBorder'>
                <div className='flex gap-3 xl:gap-4 font-font-inter text-sm lg:text-lg'>
                    {/* Duration information */}
                    <span>
                        <p className='font-bold'>{Duration}</p>
                        <p className='font-semibold'>Duration</p>
                    </span>
                    {/* Question information */}
                    <span>
                        <p className='font-bold'>{Question}</p>
                        <p className='font-semibold'>Questions</p>
                    </span>
                </div>
                <div className='flex'>
                    {/* Share button with link icon */}
                    <button className='px-2 py-1 border-primaryText border rounded-full flex items-center gap-2' type='button'>
                        <IoMdLink className='-rotate-45' />
                        <p>Share</p>
                    </button>
                    {/* Display BadgeArray as badges */}
                    {typeof BadgeArray === 'string' ? (
                        <p className='md:w-8 md:h-8 w-7 h-7 text-sm md:text-md p-1 mx-1 bg-AccentRed rounded-full text-secondaryBackground text-center border border-primaryBorder'>
                            {BadgeArray}
                        </p>
                    ) : Array.isArray(BadgeArray) && BadgeArray.length > 0 ? (
                        <div className='flex w-min items-center translate-x-[10px]'>
                            {/* Display up to three badges */}
                            {BadgeArray.slice(0, 3).map((badge, index) => (
                                <p
                                    style={{ transform: `translateX(${-(index * 15)}px)` }}
                                    key={index}
                                    className={classNames('md:w-8 md:h-8 w-7 h-7 text-sm md:text-md p-1 rounded-full text-secondaryBackground text-center border border-primaryBorder',
                                        // Dynamically set badge background color based on index
                                        index % BadgeArray.length === 0 && ('bg-AccentRed'),
                                        index % BadgeArray.length === 1 && ('bg-AccentGreen'),
                                        index % BadgeArray.length === 2 && ('bg-AccentBlue'),
                                    )}
                                >
                                    {badge}
                                </p>
                            ))}
                            {/* Display a "+X" badge if there are more than three badges */}
                            {BadgeArray.length > 3 && (
                                <p className='-translate-x-[25px] text-primaryText text-center'>
                                    +{BadgeArray.length - 3}
                                </p>
                            )}
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
    );
}

export default Card;