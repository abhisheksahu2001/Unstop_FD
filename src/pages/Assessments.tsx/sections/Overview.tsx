import React from 'react';
import IconBadge from '../../../components/Ui/IconBadge';
import Score from '../../../components/Ui/Score';
import { BsHddStack } from 'react-icons/bs';
import { IoMdLink } from 'react-icons/io';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { AiOutlineGlobal } from 'react-icons/ai';
import classNames from 'classnames';

const config = [
    {
        title: 'Total Assessment',
        icon: BsHddStack,
        color: '#6548EE',
        backgroundColor: '#EBE8FD',
        value: 34,
        hidden: false,
        mobileView: true,

    },
    {
        title: 'Total Purpose',
        icon: IoMdLink,
        color: '#0073E6',
        backgroundColor: '#DDEDFF',
        value: 34,
        hidden: false,
        mobileView: true,
    },
    {
        title: 'Candidates',
        icon: MdOutlinePeopleAlt,
        color: '#6548EE',
        backgroundColor: '#EBE8FD',
        scores: [
            { title: 'Total Candidate', offSetScore: '+89', score: '11,145', sign: "positive" },
            { title: 'Who Attempted', offSetScore: '+89', score: '114', sign: "positive" },
        ],
        mobileView: false,

    },
    {
        title: 'Candidates Source',
        icon: AiOutlineGlobal,
        color: '#E9407A',
        backgroundColor: '#FCE8EF',
        scores: [
            { title: 'E-mail', offSetScore: '+89', score: '11,000', sign: "positive" },
            { title: 'Social Share', offSetScore: '+89', score: '145', sign: "positive" },
            { title: 'Unique Link', offSetScore: '+89', score: '145', sign: "positive" },
        ],
        mobileView: false,
    },
];

const AddBorderInMobileView = (idx: number, title: string) => {
    if (idx > 0 && idx < config.length - 1 && idx % 2 == 0) {
        return 'border-y border-y-primary-border lg:border-y-0 '
    } else if (idx > 0 && idx < config.length - 1 && idx % 2 !== 0) {
        return 'border-t border-t-primary-border lg:border-t-0 '
    } else {
        return ''
    }
}

interface IOverview {
    resolution: string
    showOverView: boolean
}

const Overview = ({ resolution, showOverView }: IOverview) => {

    const mergeItem = config.filter((item) => item.mobileView == true)



    return (
        <section className={classNames(' flex items-center justify-center w-full  lg:block lg:w-max h-[400px] lg:h-auto   lg:top-0  duration-200', showOverView ? "opacity-100 relative top-20   " : " lg:opacity-100  opacity-0 ")}>
            <h2 className='text-xl font-semibold text-primaryText my-4  hidden lg:block'>
                Assessments Overview
            </h2>
            <div className='border rounded-xl m-1 border-primaryBorder lg:divide-x lg:flex-row flex-col divide-primaryBorder flex '>
                {(resolution == 'sm' || resolution == 'md') && (<div className={classNames('flex flex-1 divide-x divide-primaryBorder lg:hidden  ')}>
                    {mergeItem && (
                        mergeItem.map((item, index) => (
                            <div
                                key={index}
                                className={classNames('flex-1')}

                            >
                                <span
                                    className={`flex flex-col  p-4 gap-4 flex-1 ${item.title === 'Total Purpose' && 'lg:border-r-transparent'
                                        }`}
                                >
                                    <h2 className='text-sm font-semibold text-primaryText font-font-inter w-max'>{item.title}</h2>
                                    <div className={classNames('flex gap-4 items-center  ', !item.scores && ('mt-2'))} >

                                        <IconBadge Icon={item.icon} color={item.color} backgroundColor={item.backgroundColor} />

                                        <span className='flex gap-4 items-center py-1 '>
                                            <p className='font-extrabold text-primaryText font-font-inter text-xl'>{item.value}</p>
                                        </span>
                                    </div>
                                </span>
                            </div>
                        ))

                    )}
                </div>)
                }
                {config.map((item, index) => (

                    <div
                        key={index}
                        className={classNames("flex  ", item.title === 'Total Purpose' && ' hidden lg:block  lg:order-3',
                            AddBorderInMobileView(index, item.title),
                            (resolution === 'sm' || resolution === 'lg' || resolution === 'md') && item.mobileView && ('hidden')

                        )

                        }

                    >
                        <span
                            className={`flex flex-col  p-4 gap-4 flex-1 ${item.title === 'Total Purpose' && 'lg:border-r-transparent'
                                }`}
                        >
                            <h2 className='text-sm font-semibold text-primaryText font-font-inter w-max'>{item.title}</h2>
                            <div className={classNames('flex gap-4 items-center  ', !item.scores && ('mt-2'))} >

                                <IconBadge Icon={item.icon} color={item.color} backgroundColor={item.backgroundColor} />
                                {item.scores ? (
                                    item.scores.map((score, scoreIndex) => (
                                        <span key={scoreIndex} className='flex gap-4 items-center py-1'>
                                            <Score
                                                className={`px-2 ${scoreIndex < item.scores.length - 1 ? 'border-r w-max border-primaryBorder' : 'w-max'
                                                    }`}
                                                sign={score.sign}
                                                title={score.title}
                                                offSetScore={score.offSetScore}
                                                score={score.score}
                                            />
                                        </span>
                                    ))
                                ) : (
                                    <span className='flex gap-4 items-center py-1 '>
                                        <p className='font-extrabold text-primaryText font-font-inter text-xl'>{item.value}</p>
                                    </span>
                                )}
                            </div>
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Overview;