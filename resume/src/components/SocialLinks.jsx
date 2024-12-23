import { GithubIcon, Linkedin, Code2 } from 'lucide-react';

const SocialLinks = () => {
    return (
        <div className="flex justify-center gap-4">
            <a
                href="https://github.com/cheedge"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
                <GithubIcon className="h-5 w-5" />
            </a>
            <a
                href="https://www.linkedin.com/in/cheedge-lee-19333016b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
                <Linkedin className="h-5 w-5" />
            </a>
            <a
                href="https://cheedge.leeindeutschland.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
                <Code2 className="h-5 w-5" />
            </a>
        </div>
    );
};

export default SocialLinks;
