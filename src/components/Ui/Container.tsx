import React from 'react'
import classNames from 'classnames';
interface IContainer {
    children: React.ReactNode,
    className: string;
}

export const Container = ({ children, className }: IContainer) => {
    return (
        <section className={classNames(className)} >{children}</section>
    )
}
