import classNames from 'classnames';
import React from 'react'

interface IScore {
    className?: string;
    title: string;
    score: string;
    offSetScore: string;
    sign: string;

}

const Score = ({ title, score, sign, offSetScore, className }: IScore) => {
    return (
        <span className={classNames(' text-primaryText  ', className)} >
            <text className=' flex items-center text-xl font-bold   ' >{score}
                <p className={classNames(
                    sign === 'positive' && (' text-AccentGreen '),
                    sign === 'negative' && (' text-AccentRed '),
                    sign === 'neutral' && (' text-primaryText '),
                    'text-xs font-font-inter font-bold px-2 '
                )} >{offSetScore}</p> </text>
            <h2 className='capitalize  text-xs font-font-inter font-bold ' >{title}</h2>
        </span>
    )
}

export default Score