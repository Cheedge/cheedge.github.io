// import React, { useEffect, useState } from 'react';
// import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

// // Example visitor data - Replace with actual API call
// const trackVisitorCount = async () => {
//     return {
//         totalVisitors: 100,
//         visitorsByCountry: {
//             US: 50, // 50 visitors from the US
//             IN: 20, // 20 visitors from India
//             DE: 30, // 30 visitors from Germany
//         },
//     };
// };

// const Visitors = () => {
//     const [visitorStats, setVisitorStats] = useState(null);

//     useEffect(() => {
//         const fetchStats = async () => {
//             const stats = await trackVisitorCount();
//             setVisitorStats(stats);
//         };
//         fetchStats();
//     }, []);

//     // Function to get color based on visitor count
//     const getColor = (visitorCount) => {
//         if (visitorCount > 30) {
//             return '#FF5722'; // High traffic (red)
//         } else if (visitorCount > 10) {
//             return '#FFC107'; // Medium traffic (yellow)
//         } else {
//             return '#4CAF50'; // Low traffic (green)
//         }
//     };

//     return (
//         <div className="space-y-4">
//             <div>
//                 <p>$ visitor-count --total</p>
//                 <p className="pl-4">
//                     {visitorStats?.totalVisitors || 'Loading...'}
//                 </p>
//             </div>

//             <div>
//                 <p>$ visitor-map --render</p>
//                 <div className="mt-4 h-[400px] bg-zinc-800 rounded-lg p-4">
//                     <ComposableMap projectionConfig={{ scale: 150 }}>
//                         <Geographies geography="/src/assets/world-countries.json">
//                             {({ geographies }) =>
//                                 geographies.map((geo) => {
//                                     console.log(geo); // Log the entire geo object to inspect its structure

//                                     const countryCode = geo.properties.iso_a2; // This is where the code should be
//                                     const visitorCount =
//                                         visitorStats?.visitorsByCountry[
//                                             countryCode
//                                         ] || 0;

//                                     return (
//                                         <Geography
//                                             key={geo.rsmKey}
//                                             geography={geo}
//                                             style={{
//                                                 default: {
//                                                     fill: getColor(
//                                                         visitorCount
//                                                     ),
//                                                     outline: 'none',
//                                                 },
//                                                 hover: {
//                                                     fill: '#F44336', // Highlight on hover
//                                                     outline: 'none',
//                                                 },
//                                                 pressed: {
//                                                     fill: '#E91E63',
//                                                     outline: 'none',
//                                                 },
//                                             }}
//                                         />
//                                     );
//                                 })
//                             }
//                         </Geographies>
//                     </ComposableMap>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Visitors;
