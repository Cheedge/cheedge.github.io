import { BookOpen, Award } from 'lucide-react';
import { papers } from '../constants/data.jsx';
import {
    CommandText,
    TerminalContainer,
    TerminalText,
} from './TerminalContainer';
const Publications = () => {
    return (
        <div id="publications">
            <TerminalContainer>
                <TerminalText>
                    <CommandText cmd="cat" file="publications" suffix="bib" />
                    <div className="flex flex-col">
                        {papers.map((paper, index) => (
                            <div
                                key={index}
                                className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg"
                            >
                                <a
                                    href={`https://arxiv.org/abs/${paper.arxivId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium block mb-1 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    {paper.title} ({paper.year})
                                </a>
                                <div className="flex space-x-4 text-sm text-zinc-600 dark:text-zinc-400">
                                    <a
                                        href={`https://arxiv.org/abs/${paper.arxivId}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center hover:text-blue-600 dark:hover:text-blue-400"
                                    >
                                        <BookOpen className="h-4 w-4 mr-1" />
                                        arXiv
                                    </a>
                                    <a
                                        href={paper.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center hover:text-blue-600 dark:hover:text-blue-400"
                                    >
                                        <Award className="h-4 w-4 mr-1" />
                                        ORCID
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </TerminalText>
            </TerminalContainer>
        </div>
    );
};

export default Publications;
