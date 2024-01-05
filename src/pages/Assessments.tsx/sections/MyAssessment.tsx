import React, { useContext, useEffect, useState } from 'react'
import AddCard from '../../../components/Ui/AddCard'
import Card from '../../../components/Ui/Card'
import { FaPlus } from "react-icons/fa6";
import { VscBriefcase } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { RiBarChartFill } from "react-icons/ri";
import classNames from 'classnames';
import { GlobalContext } from '../../../context/globalContext';


interface IMyAssessment {
    resolution: string;
    showOverView: React.Dispatch<React.SetStateAction<boolean>>;
    overViewIsOpen: boolean
};

const CardData = {
    AddCard: {
        title: 'New Assessment',
        subTitle: 'From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!',
        handleClick: () => console.log('Add card clicked'),
        Icon: FaPlus,
    },
    Card: [{
        title: 'Math Assessment',
        subTitle: 'Job',
        Duration: '00',
        Question: '00',
        BadgeArray: ['LP', 'PL', 'Gl', 'AL', 'Kl'],
    },
    {
        title: 'Math Assessment',
        subTitle: 'Job',
        Duration: '00',
        Question: '00',
        BadgeArray: 'LP',
    }, {
        title: 'Math Assessment',
        subTitle: 'Job',
        Duration: '00',
        Question: '00',
        BadgeArray: ['LP', 'PL', 'Gl', 'AL', 'Kl'],
    }, {
        title: 'Math Assessment',
        subTitle: 'Job',
        Duration: '00',
        Question: '00',
        BadgeArray: ['LP', 'PL'],
    }, {
        title: 'Math Assessment',
        subTitle: 'Job',
        Duration: '00',
        Question: '00',
        BadgeArray: 'Kl',
    }, {
        title: 'Math Assessment',
        subTitle: 'Job',
        Duration: '00',
        Question: '00',
        BadgeArray: ['LP', 'PL', 'Gl', 'AL', 'Kl'],
    }, {
        title: 'Math Assessment',
        subTitle: 'Job',
        Duration: '00',
        Question: '00',
        BadgeArray: ['LP', 'PL', 'Gl', 'AL', 'Kl', 'LP', 'PL', 'Gl', 'AL', 'Kl', 'LP', 'PL', 'Gl', 'AL', 'Kl', 'LP', 'PL', 'Gl', 'AL', 'Kl'],
    },
    ]
}


const MyAssessment = ({ resolution, showOverView, overViewIsOpen }: IMyAssessment) => {
    const { setAddAssessmentModal } = useContext(GlobalContext);
    const [dateFormat, setDateFormat] = useState('20 Apr 2023');

    useEffect(() => {
        const date = new Date('20 Apr 2023');

        // Format date based on resolution
        if (resolution === 'md' || resolution === 'sm') {
            const formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${(date.getFullYear() % 100).toString()}`;
            setDateFormat(formattedDate);
        } else {
            const formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear().toString()}`
            setDateFormat(formattedDate);
        }
    }, [resolution]);

    return (
        <section className={classNames('md:w-3/4 lg:w-full xl:pt-0 relative lg:top-0 min-w-[400px]', overViewIsOpen ? 'top-16' : 'top-12')}>
            <div className='flex lg:block items-center justify-between'>
                <h1 className='text-xl font-semibold text-primaryText my-4'>My Assessment</h1>
                <nav className="lg:hidden [&>button]:m-2 px-2 text-primaryText">
                    <button type='button'><IoIosSearch size={15} /></button>
                    <button type='button'><FaFilter size={15} /></button>
                    <button
                        type='button'
                        onClick={() => showOverView((prev) => !prev)}
                        className={classNames('p-1', overViewIsOpen ? "bg-AccentBlueBackground border border-AccentBlue rounded-full" : 'border border-transparent')}
                    >
                        <RiBarChartFill size={15} />
                    </button>
                </nav>
            </div>
            <section className='flex justify-center lg:justify-normal items-center lg:items-start lg:flex-row gap-4 flex-wrap flex-col'>

                {/* AddCard component */}
                <AddCard
                    title={CardData.AddCard.title}
                    handleClick={() => setAddAssessmentModal(true)}
                    subTitle={CardData.AddCard.subTitle}
                    Icon={CardData.AddCard.Icon}
                />

                {/* Rendering Card components */}
                {CardData.Card && CardData.Card.map((item, idx) => (
                    <Card
                        key={idx}
                        title={item.title}
                        subTitle={item.subTitle}
                        Duration={item.Duration}
                        Question={item.Question}
                        date={dateFormat}
                        MainIcon={VscBriefcase}
                        resolution={resolution}
                        BadgeArray={item.BadgeArray}
                    />
                ))}
            </section>
        </section>
    );
}

export default MyAssessment;