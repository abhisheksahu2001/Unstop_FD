import React, { useState } from 'react';
import Overview from './sections/Overview';
import MyAssessment from './sections/MyAssessment';
import useResolution from '../../Hooks/useResolution';
import classNames from 'classnames';

const Assessment = () => {
    // Get the current breakpoint using the useResolution hook
    const { breakpoint } = useResolution();

    // State to manage the visibility of the Overview section in mobile view
    const [showOverViewInMobile, setShowOverViewInMobile] = useState(false);

    return (
        <div className={classNames('md:ml-28 lg:pl-8 lg:ml-0 duration-200 p-2 my-3 w-full md:relative lg:top-10',
            showOverViewInMobile ? 'translate-y-[0]' : '-translate-y-[20%] md:-translate-y-[18%] lg:translate-y-0')}>
            {/* Overview section */}
            <Overview resolution={breakpoint} showOverView={showOverViewInMobile} />

            {/* MyAssessment section */}
            <MyAssessment resolution={breakpoint} overViewIsOpen={showOverViewInMobile} showOverView={setShowOverViewInMobile} />
        </div>
    );
}

export default Assessment;