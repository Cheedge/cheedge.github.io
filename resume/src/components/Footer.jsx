// src/assets/components/Footer.jsx
import React from 'react';
import Visitors from './Visitors.jsx';

const Footer = () => {
    return (
        <footer className="bg-yellow-200 dark:bg-zinc-900 py-8 mt-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* <div>
                        <h3 className="font-mono text-lg mb-4">Analytics</h3>
                        <div
                            id="visitor-count"
                            className="text-zinc-600 dark:text-zinc-400"
                        >
                            Loading visitor count...
                        </div>
                    </div> */}
                    <Visitors />
                    <div>
                        <h3 className="font-mono text-lg mb-4">Contact</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            Email: cheedgelee@gmail.com
                        </p>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-700 text-center text-zinc-600 dark:text-zinc-400">
                    <p>
                        © {new Date().getFullYear()} Cheedge Lee. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
