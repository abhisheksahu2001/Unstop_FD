import classNames from 'classnames';
import React from 'react';
import { IconType } from 'react-icons';

// Define the props interface for the IconBadge component
interface IIconBadgeProps {
    backgroundColor: string;
    color: string;
    Icon: IconType;
    size?: number;
}

// IconBadge component receives the props and renders a styled badge with an icon
const IconBadge = ({ backgroundColor, color, Icon, size }: IIconBadgeProps) => {
    return (
        <div
            style={{ backgroundColor: backgroundColor, color: color }}
            className={classNames('w-min rounded-lg flex items-center justify-center p-2')}
        >
            {/* Render the provided Icon with optional size */}
            {typeof Icon === 'function' && (
                <Icon size={size ? size : 20} />
            )}
        </div>
    );
}

export default IconBadge;