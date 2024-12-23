// src/assets/layouts/ResumePage.jsx
import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navabar';
import { initGA, logPageView, trackVisitorCount } from './utils/Analytics';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import SocialLinks from './components/SocialLinks';
import Header from './components/Header';

const ResumePage = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [visitorCount, setVisitorCount] = useState(null);

    useEffect(() => {
        // Initialize Google Analytics
        initGA();
        logPageView();

        // Track visitor count
        const updateVisitorCount = async () => {
            const stats = await trackVisitorCount();
            setVisitorCount(stats.totalVisitors);

            // Update the visitor count display
            const visitorElement = document.getElementById('visitor-count');
            if (visitorElement) {
                visitorElement.textContent = `Total Visitors: ${stats.totalVisitors}`;
            }
        };

        updateVisitorCount();
    }, []);

    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className="min-h-screen bg-amber-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <main className="container mx-auto px-4 py-8">
                    <Header />
                    <Experience />
                    <Projects />
                    <Certificates />
                    <Publications />
                    <SocialLinks />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default ResumePage;
