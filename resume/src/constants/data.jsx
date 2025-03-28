import linuxLogo from '../assets/linux_color_logo.svg';
// import azureLogo from '../assets/azure-svgrepo-com.svg';
import azureLogo from '../assets/azure-v2-svgrepo-com.svg';
import awsIcon from '../assets/aws-svgrepo-com.svg';
import embeddingIcon from '../assets/embedding.svg';
import cIcon from '../assets/C_Programming_Language.svg';
// import dockerIcon from '../assets/docker_icon.svg';
import transIcon from '../assets/translate_icon.svg';
import ckaIcon from '../assets/kubernetes-cka-color.svg';

export const certificates = [
    {
        title: 'CKA',
        issuer: 'Linux Foundation',
        date: 'January 2025',
        link: 'https://www.credly.com/badges/be14845a-c39e-4651-ae26-de46fdd3929a',
        image: ckaIcon,
    },
    {
        title: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
        date: 'June 2024',
        link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/8b6ab53361534bc39301461ebb2d8843',
        image: awsIcon,
    },
    {
        title: 'LPIC-1 (101-500v & 102-500v)',
        issuer: 'Linux Professinal Institute',
        date: 'May 2024',
        link: 'https://cs.lpi.org/caf/Xamman/certification/verify/LPI000610497/cez685d3g5',
        image: linuxLogo,
    },
    {
        title: 'Microsoft certificated: Azure Fundamentals',
        issuer: 'Microsoft',
        date: 'April 2024',
        link: 'https://learn.microsoft.com/api/credentials/share/en-us/CheedgeLee-9369/8D2F8B6B168B001?sharingId=11586E971D564CEC',
        image: azureLogo,
    },
    {
        title: 'Embedded System (Level 3)',
        issuer: 'National Education Examinations Authority',
        date: 'September 2014',
        link: 'http://chaxun.neea.edu.cn/',
        image: embeddingIcon,
    },
    {
        title: 'C',
        issuer: 'National Education Examinations Authority',
        date: 'September 2014',
        link: 'http://chaxun.neea.edu.cn/',
        image: cIcon,
    },
    {
        title: 'National Accreditation Examinations for Translators and Interpreters (NAETI)',
        issuer: 'National Education Examinations Authority',
        date: 'May 2014',
        link: 'http://chaxun.neea.edu.cn/',
        image: transIcon,
    },
];

export const papers = [
    {
        title: 'Ultrafast optical control over spin and momentum in solids',
        journal: 'Appl. Phys. Lett. 120, 032403 (2022)',
        link: 'https://doi.org/10.1063/5.0076198',
        arxivId: '2012.03247',
        orcid: '0000-0003-4689-2190',
        year: 2022,
    },
    {
        title: 'Ab initio study of ultrafast charge dynamics in graphene',
        journal: 'Phys. Rev. B 103, L081102',
        link: 'https://doi.org/10.1103/PhysRevB.103.L081102',
        arxivId: '2012.00435',
        orcid: '0000-0003-4689-2190',
        year: 2021,
    },
    {
        title: 'Element Specificity of Transient Extreme Ultraviolet Magnetic Dichroism',
        journal: 'Phys. Rev. Lett. 124, 077203',
        link: 'https://doi.org/10.1103/PhysRevLett.124.077203',
        arxivId: '1909.00199',
        orcid: '0000-0003-4689-2190',
        year: 2020,
    },
    {
        title: 'Electron-phonon coupling and superconductivity in LiB1+xC1-x',
        journal: 'Europhysics Letters, 122 47001',
        link: 'https://iopscience.iop.org/article/10.1209/0295-5075/122/47001',
        arxivId: '1801.07119',
        orcid: '0000-0003-4689-2190',
        year: 2018,
    },
    {
        title: 'Prediction of phonon-mediated superconductivity in borophene',
        journal: 'Phys. Rev. B 95, 024505',
        link: 'https://doi.org/10.1103/PhysRevB.95.024505',
        arxivId: '1602.02930',
        orcid: '0000-0003-4689-2190',
        year: 2017,
    },
];

export const personalLinks = {
    website: 'https://cheedge.leeindeutschland.de/',
    github: 'https://github.com/cheedge',
    linkedin: 'https://linkedin.com/in/yourusername',
    leetcode: 'https://leetcode.com/yourusername',
    orcid: 'https://orcid.org/0000-0000-0000-0000',
};

export const projects = [
    {
        title: 'Leben In Deutschland',
        description:
            'A test and exerise website to prepare LiD Prüfung or Einbürgerungstest',
        link: 'https://xn--einbrgerungstest-mzb.leeindeutschland.de/',
        technologies: [
            'AWS_S3',
            'AWS_Lambda',
            'AWS_CloudFront',
            'AWS_API_Gateway',
            'GitHub_Action',
            'React',
            'C#',
            'SQLite',
        ],
    },
    {
        title: 'L.Q.Z.',
        description: 'Personal Website',
        link: 'https://cheedge.leeindeutschland.de/',
        technologies: [
            'AWS_S3',
            'AWS_CloudFront',
            'GitHub_Action',
            'Google_Analyst',
            'AWS_dynamodb',
            'React',
            'tailwindcss',
            'vite',
        ],
    },
    {
        title: 'N2-Survey (Dev Team)',
        description: 'Survey Data Visulization tool',
        link: 'https://github.com/N2-Survey',
        technologies: [
            'Python',
            'Matplotlib',
            'Pandas',
            'seaborn',
            'Numpy',
            'SciPy',
            'Scrapy',
        ],
    },
];

export const experience = [
    {
        company: 'FNZ (Munich)',
        position: 'Analyst Developer',
        period: '2022-2024',
        description: 'Leading frontend development team',
    },
    {
        company: 'Max Born Institute',
        position: 'Phd Student/Reseacher',
        period: '2019-2022',
        description: 'elk group',
    },
    {
        company: 'Max-Planck-Institut für Mikrostrukturphysik',
        position: 'Phd Student',
        period: '2018-2019',
        description: 'td-dft',
    },
];
