import React, { MouseEventHandler } from 'react';
import classNames from 'classnames';
import styles from './ClickableLogo.module.scss';

export interface ClickableLogoProps {
    className?: string;
    onClick: MouseEventHandler<HTMLDivElement>;
    logoSrc: string;
}

export const ClickableLogo: React.FC<ClickableLogoProps> = ({ className, onClick, logoSrc }) => {
    return (
        <div className={classNames(styles.root, className)} onClick={onClick}>
            <img src={logoSrc} className={styles.logo} />
        </div>
    );
};