import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function processEmailedReport(csvFilePath) {
    try {
        const reportContent = fs.readFileSync(csvFilePath, 'utf8');

        // Split the file into sections
        const sections = reportContent.split('#');

        // Find the country section (Corrected logic)
        const countrySection = sections.find((section) => {
            const lines = section.trim().split('\n');
            return lines.some((line) => line.includes('Country,Active users'));
        });

        if (!countrySection) {
            throw new Error('Country data section not found in report');
        }

        // Get just the data lines (Corrected logic)
        const countryLines = countrySection
            .split('\n')
            .filter(
                (line) =>
                    line.trim() &&
                    !line.startsWith('Start date:') &&
                    !line.startsWith('End date:') &&
                    line.includes('Country,Active users') === false &&
                    line.includes(',')
            );

        // Parse country data
        const stats = {
            timestamp: new Date().toISOString(),
            totalVisitors: 0,
            visitorsByCountry: {},
        };

        countryLines.forEach((line) => {
            const [country, visitors] = line.trim().split(',');
            if (country && visitors) {
                const visitorCount = parseInt(visitors, 10);
                if (!isNaN(visitorCount)) {
                    stats.visitorsByCountry[country] = visitorCount;
                    stats.totalVisitors += visitorCount;
                }
            }
        });

        // Write output (same as before)
        const outputPath = path.join(
            __dirname,
            '..',
            'assets',
            'visitor-stats.json'
        );
        const assetsDir = path.dirname(outputPath);
        if (!fs.existsSync(assetsDir)) {
            fs.mkdirSync(assetsDir, { recursive: true });
        }
        fs.writeFileSync(outputPath, JSON.stringify(stats, null, 2));

        console.log('Successfully processed visitor stats:');
        console.log(JSON.stringify(stats, null, 2));
        console.log('Output written to:', outputPath);
    } catch (error) {
        console.error('Error processing report:', error);
        process.exit(1);
    }
}

// Get command line argument
const csvPath = process.argv[2];
if (!csvPath) {
    console.error('Please provide the path to the CSV file');
    process.exit(1);
}

// run: node src/utils/processData.js src/assets/data-export.csv
// file will stored in src/assets/visitor-stats.json
processEmailedReport(csvPath);
