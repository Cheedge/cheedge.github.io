import React, { useState } from 'react';
import { FolderTree, ChevronRight, ChevronDown } from 'lucide-react';
import { logEvent } from '../utils/Analytics';
import { TerminalContainer, TerminalText } from './TerminalContainer';

const TreeNav = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const sections = [
        { id: 'about', name: 'about' },
        { id: 'experience', name: 'experience' },
        { id: 'projects', name: 'projects' },
        { id: 'certificates', name: 'certificates' },
        { id: 'publications', name: 'publications' },
    ];

    const handleClick = (sectionId) => {
        logEvent('Navigation', 'tree-click', sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
        logEvent(
            'Navigation',
            'tree-toggle',
            isCollapsed ? 'expand' : 'collapse'
        );
    };

    return (
        <TerminalContainer>
            <TerminalText>
                <button
                    className="flex items-center gap-2 mb-2 w-full hover:text-green-300 transition-colors focus:outline-none"
                    onClick={toggleCollapse}
                >
                    {isCollapsed ? (
                        <ChevronRight size={18} />
                    ) : (
                        <ChevronDown size={18} />
                    )}
                    <FolderTree size={18} />
                    <span className="text-yellow-500 mr-1">$</span>
                    <span className="text-lime-500">tree</span>
                </button>
                <div
                    className={`transition-all duration-300 ${
                        isCollapsed ? 'h-0 overflow-hidden' : ''
                    }`}
                >
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => handleClick(section.id)}
                            className="w-full text-left hover:text-green-300 transition-colors pl-6 py-1 block focus:outline-none"
                        >
                            ├── {section.name}
                        </button>
                    ))}
                </div>
            </TerminalText>
        </TerminalContainer>
    );
};

export default TreeNav;
