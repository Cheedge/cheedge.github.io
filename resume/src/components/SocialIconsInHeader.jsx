import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import codeIcon from '../assets/code_icon.svg';
import orcidLogo from '../assets/orcid.svg';
import leetcodeIcon from '../assets/leetcode.svg';

const SocialIconsInHeader = () => {
    return (
        <div className="flex gap-4">
            <a
                href="https://github.com/cheedge"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
                <img
                    src={githubIcon}
                    alt="GitHub Profile"
                    className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16" // Responsive sizing
                />
            </a>
            <a
                href="https://www.linkedin.com/in/cheedge-lee-19333016b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
                <img
                    src={linkedinIcon}
                    alt="LinkedIn Profile"
                    className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16" // Responsive sizing
                />
            </a>
            <a
                href="https://orcid.org/0000-0003-4689-2190"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Flag_map_of_Germany.svg"
                    alt="German Flag"
                    className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16" // Responsive sizing
                />
            </a>
            <a
                href="https://cheedge.leeindeutschland.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
                <img
                    src={codeIcon}
                    alt="code Profile"
                    className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16" // Responsive sizing
                />
            </a>
            <a
                href="https://orcid.org/0000-0003-4689-2190"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
                <img
                    src={orcidLogo}
                    alt="ORCID Profile"
                    className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16" // Responsive sizing
                />
            </a>
            <a
                href="https://leetcode.com/u/cheedgelee/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
                <img
                    src={leetcodeIcon}
                    alt="leetcode Profile"
                    className="h-8 w-8 sm:h-10 sm:w-10 lg:h-16 lg:w-16" // Responsive sizing
                />
            </a>
        </div>
    );
};

export default SocialIconsInHeader;
