import classNames from 'classnames';
import React from 'react'
import { IconType } from 'react-icons';

interface IIconBadge {
    backgroundColor: string;
    color: string;
    Icon: IconType;
    size?: number;
}

const IconBadge = ({ backgroundColor, color, Icon, size }: IIconBadge) => {
    return (
        <div style={{ backgroundColor: backgroundColor, color: color }} className={classNames(' w-min rounded-lg flex items-center justify-center p-2  ')}>
            {typeof Icon === 'function' && (
                <Icon size={size ? size : 20} />
            )}
        </div>
    )
}

export default IconBadge