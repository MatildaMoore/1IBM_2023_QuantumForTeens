import React from 'react';
import styles from './ClickableButton.module.scss';

export interface ClickableButtonProps {
    className?: string;
    dest: string;
    text: string;
}

export const ClickableButton: React.FC<ClickableButtonProps> = ({ className, dest, text }) => {
    return (
        <a href={dest}>
            <button className={styles.button}>{text}</button>
        </a>
    );
};