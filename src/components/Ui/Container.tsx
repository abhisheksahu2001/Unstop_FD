import React from 'react';
import classNames from 'classnames';

// Define the props interface for the Container component
interface IContainerProps {
    children: React.ReactNode;
    className: string;
}

// Container component receives the props and renders a section with dynamic classNames
export const Container = ({ children, className }: IContainerProps) => {
    return (
        <section className={classNames(className)}>{children}</section>
    );
}