import React, { MouseEventHandler } from 'react';
import { ClickableLogo } from '../clickable-logo/ClickableLogo';
import logo from '../../assets/help-button.png';

interface HelpLogoProps {
    className?: string;
    onClick: MouseEventHandler<HTMLDivElement>;
}

const HelpButton: React.FC<HelpLogoProps> = ({ className, onClick }) => {
    return (
        <ClickableLogo
            className={className}
            onClick={onClick}
            logoSrc={logo}
        />
    );
};

export default HelpButton;