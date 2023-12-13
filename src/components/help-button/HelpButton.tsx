import React, { MouseEventHandler } from 'react';
import { ClickableLogo } from 'components';
import logo from 'assets/images/help-button.png';

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