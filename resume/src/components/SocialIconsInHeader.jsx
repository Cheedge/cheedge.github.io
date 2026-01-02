import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import codeIcon from '../assets/code_icon.svg';
import orcidLogo from '../assets/orcid.svg';
import leetcodeIcon from '../assets/leetcode.svg';
import devIcon from '../assets/dev_icon.svg';
import blogIcon from '../assets/rss_icon.svg';
import hashnodeIcon from '../assets/hashnode-icon-svgrepo-com.svg';
import flagGermanyIcon from '../assets/Flag_map_of_Germany.svg';
import googlePlayIcon from '../assets/Google_Play_64.png';
import mediumIcon from '../assets/medium.jpeg';

const SocialIconsInHeader = () => {
    return (
        <div className="flex flex-wrap gap-4">
            <a
                href="https://github.com/cheedge"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
                <img
                    src={githubIcon}
                    alt="GitHub Profile"
                    className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16"
                />
            </a>
            <a
                href="https://www.linkedin.com/in/cheedge-lee-19333016b/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
                <img
                    src={linkedinIcon}
                    alt="LinkedIn Profile"
                    className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16"
                />
            </a>
            <a
                href="https://play.google.com/store/apps/developer?id=Cheedge+Studio&hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
                <img
                    src={googlePlayIcon}
                    alt="google play"
                    className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16"
                />
            </a>
            <a
                href="https://xn--einbrgerungstest-mzb.leeindeutschland.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
                <img
                    // src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Flag_map_of_Germany.svg"
                    src={flagGermanyIcon}
                    alt="German Flag"
                    className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16"
                />
            </a>
            <a
                href="https://cheedge.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
                <img
                    src={codeIcon}
                    alt="code Profile"
                    className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16"
                />
            </a>
            <a
                href="https://dev.to/cheedge_lee"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
                <img
                    src={devIcon}
                    alt="code Profile"
                    className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16"
                />
            </a>
            <a
                href="https://notes-renovation.hashnode.dev/?source=top_nav_blog_home"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
                <img
                    src={hashnodeIcon}
                    alt="code Profile"
                    className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16"
                />
            </a>
            <a
                href="https://orcid.org/0000-0003-4689-2190"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800"
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
                className="shrink-0 p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
                <img
                    src={leetcodeIcon}
                    alt="leetcode Profile"
                    className="h-8 w-8 sm:h-10 sm:w-10 lg:h-16 lg:w-16" // Responsive sizing
                />
            </a>
            <a
                href="https://medium.com/@cheedgelee"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
                <img
                    src={mediumIcon}
                    alt="medium Profile"
                    className="h-8 w-8 sm:h-10 sm:w-10 lg:h-16 lg:w-16" // Responsive sizing
                />
            </a>
            <a
                href="https://www.leeindeutschland.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
                <img
                    src={blogIcon}
                    alt="backend portfolio"
                    className="h-8 w-8 sm:h-10 sm:w-10 lg:h-16 lg:w-16" // Responsive sizing
                />
            </a>
        </div>
    );
};

export default SocialIconsInHeader;
