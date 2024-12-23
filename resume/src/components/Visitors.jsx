import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import worldMap from '../assets/world-countries.json';
import visitorStats from '../assets/visitor-stats.json';
import { CommandText } from './TerminalContainer';

const fetchVisitorStats = async () => {
    try {
        return {
            totalVisitors: visitorStats.totalVisitors,
            visitorsByCountry: visitorStats.visitorsByCountry,
        };
    } catch (error) {
        console.error('Error fetching stats:', error);
        return {
            totalVisitors: 0,
            visitorsByCountry: {},
        };
    }
};

const Visitors = () => {
    const [visitorStats, setVisitorStats] = useState(null);
    const [tooltipContent, setTooltipContent] = useState('');
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const fetchStats = async () => {
            const stats = await fetchVisitorStats();
            setVisitorStats(stats);
        };
        fetchStats();
    }, []);

    const getColor = (visitorCount) => {
        if (visitorCount > 30) {
            return '#FF5722';
        } else if (visitorCount > 10) {
            return '#ffa500';
        } else if (visitorCount >= 1) {
            return '#Fafa00';
        } else {
            return '#e8e8e8';
        }
    };

    const handleMouseMove = (e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        setTooltipPosition({
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top,
        });
    };

    return (
        <div className="space-y-4">
            <div>
                <CommandText cmd="visitor-map" suffix="--render" />
                <div
                    className="mt-3 h-[300px] bg-zinc-800 rounded-lg p-2 relative"
                    onMouseMove={handleMouseMove}
                >
                    <ComposableMap
                        projectionConfig={{ scale: 170 }}
                        className="w-full h-full"
                    >
                        <Geographies geography={worldMap}>
                            {({ geographies }) =>
                                geographies.map((geo) => {
                                    const countryCode = geo.properties.iso_a2;
                                    const visitorCount =
                                        visitorStats?.visitorsByCountry[
                                            countryCode
                                        ] || 0;

                                    return (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            onMouseEnter={() => {
                                                setTooltipContent(
                                                    `${visitorCount}`
                                                );
                                            }}
                                            onMouseLeave={() => {
                                                setTooltipContent('');
                                            }}
                                            style={{
                                                default: {
                                                    fill: getColor(
                                                        visitorCount
                                                    ),
                                                    outline: 'none',
                                                },
                                                hover: {
                                                    fill: '#F44336',
                                                    outline: 'none',
                                                },
                                                pressed: {
                                                    fill: '#E91E63',
                                                    outline: 'none',
                                                },
                                            }}
                                        />
                                    );
                                })
                            }
                        </Geographies>
                    </ComposableMap>

                    {tooltipContent && (
                        <div
                            className="absolute bg-black text-white px-2 py-1 rounded text-sm pointer-events-none"
                            style={{
                                left: `${tooltipPosition.x + 10}px`,
                                top: `${tooltipPosition.y - 10}px`,
                            }}
                        >
                            {tooltipContent}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Visitors;
