import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ darkMode, setDarkMode }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-yellow-200 dark:bg-sky-950 shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div
                        className="font-mono text-lg truncate relative z-10 cursor-pointer"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="flex items-center space-x-1">
                            <span className="text-green-500">[</span>
                            <span className="dark:text-gray-100 font-bold inline-flex items-center space-x-1">
                                <span>Li</span>
                                <span
                                    className={`transition-all duration-300 overflow-hidden inline-flex ${
                                        isHovered
                                            ? 'w-16 opacity-100'
                                            : 'w-0 opacity-0'
                                    }`} // w-16 can change the length of charactors show
                                >
                                    Qi&nbsp;Zhi
                                </span>
                            </span>
                            <span className="text-green-500">]</span>
                        </div>
                    </div>
                    <ThemeToggle
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
