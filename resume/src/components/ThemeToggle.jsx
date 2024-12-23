// src/assets/components/ThemeToggle.jsx
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { logEvent } from '../utils/Analytics';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
    const handleToggle = () => {
        logEvent('Theme', 'toggle', darkMode ? 'light' : 'dark');
        setDarkMode(!darkMode);
    };

    return (
        <button
            onClick={handleToggle}
            className="p-2 rounded-lg hover:bg-yellow-200 dark:bg-sky-950"
            aria-label={
                darkMode ? 'Switch to light mode' : 'Switch to dark mode'
            }
        >
            {darkMode ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon className="h-5 w-5" />
            )}
        </button>
    );
};

export default ThemeToggle;
