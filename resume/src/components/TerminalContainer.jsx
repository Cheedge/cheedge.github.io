// src/components/TerminalContainer.jsx
import React from 'react';

export const TerminalContainer = ({ children }) => {
    return (
        <div className="rounded-lg p-6 bg-[#fdf6e3] dark:bg-[#002b36] terminal-container shadow-lg p-6 mb-5">
            <div className="flex flex-row items-center gap-3">{children}</div>
        </div>
    );
};

export const TerminalText = ({ children }) => {
    return (
        <div className="flex-1">
            <div className="font-mono text-[#657b83] dark:text-[#839496]">
                {children}
            </div>
        </div>
    );
};

const terminalTextStyle = {
    fontFamily: '"Fira Code", monospace', // Use Fira Code or a fallback monospace font
    fontSize: '1.2rem', // Adjust as needed
};

export const CommandText = ({ cmd, file, suffix, param1, param2 }) => {
    return (
        <h2
            className="text-xl font-mono, mb-6 flex items-center"
            // style={terminalTextStyle}
        >
            <span className="text-yellow-500 mr-3">$</span>
            <span className="text-lime-500">{cmd}</span>{' '}
            <span className="text-red-300 ml-3">{param1}</span>
            {file && (
                <>
                    <span className="text-blue-500 ml-3">{file}</span>{' '}
                    {/* Added ml-1 for space */}
                    {suffix && (
                        <>
                            <span className="text-grey">.</span>{' '}
                            {/* Dot is now black */}
                            <span className="text-purple-500">{suffix}</span>
                        </>
                    )}
                </>
            )}
            <span className="text-sky-500 ml-3">{param2}</span>
        </h2>
    );
};
