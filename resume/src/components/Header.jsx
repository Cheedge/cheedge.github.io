import React from 'react';
import TreeNav from './TreeNav';
import {
    CommandText,
    TerminalContainer,
    TerminalText,
} from './TerminalContainer';
// import linuxLogo from '../assets/linux_color_logo.svg';
// import { SocialLinks } from './SocialLinks';
import SocialIconsInHeader from './SocialIconsInHeader.jsx';

const Header = () => {
    return (
        <div id="about" className="mb-8">
            <h1 className="text-4xl font-mono font-bold mb-8">
                <span className="text-emerald-600 dark:text-emerald-400">
                    {'<'}
                </span>
                <span className="dark:text-gray-100">Cheedge Lee </span>
                <span className="text-emerald-600 dark:text-emerald-400">
                    {'/>'}
                </span>
            </h1>

            <TreeNav />
            {/* Terminal background container */}
            <TerminalContainer>
                <TerminalText>
                    <CommandText cmd="whoami" />
                    <p className="pl-4 mb-6">Developer</p>
                    <CommandText cmd="cat" file="/etc/hosts" />
                    <SocialIconsInHeader />
                </TerminalText>
                {/* 
                <div className="w-32 h-32 flex-shrink-0">
                    <img
                        src={linuxLogo}
                        alt="Profile Avatar"
                        className="rounded-lg object-cover w-full h-full"
                    />
                </div> */}
            </TerminalContainer>
        </div>
    );
};

export default Header;
