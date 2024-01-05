import classNames from 'classnames';
import React from 'react';

// Define the props interface for the Score component
interface IScoreProps {
    className?: string;
    title: string;
    score: string;
    offSetScore: string;
    sign: string;
}

// Score component receives the props and renders a styled score display
const Score = ({ title, score, sign, offSetScore, className }: IScoreProps) => {
    return (
        <span className={classNames('text-primaryText', className)}>
            {/* Main score display with offset */}
            <text className='flex items-center text-xl font-bold'>
                {score}
                {/* Offset score with dynamic styling based on the sign */}
                <p className={classNames(
                    sign === 'positive' && ('text-AccentGreen'),
                    sign === 'negative' && ('text-AccentRed'),
                    sign === 'neutral' && ('text-primaryText'),
                    'text-xs font-font-inter font-bold px-2'
                )}>{offSetScore}</p>
            </text>
            {/* Title of the score */}
            <h2 className='capitalize text-xs font-font-inter font-bold'>{title}</h2>
        </span>
    );
}

export default Score;