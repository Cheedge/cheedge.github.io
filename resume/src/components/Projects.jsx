import { projects } from '../constants/data';
import {
    CommandText,
    TerminalContainer,
    TerminalText,
} from './TerminalContainer';

const Projects = () => {
    return (
        <div id="projects">
            <TerminalContainer>
                <TerminalText>
                    <CommandText cmd="ls" file="~/projects/personal/" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6"
                            >
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                                >
                                    <h3 className="text-lg font-semibold mb-2">
                                        {project.title}
                                    </h3>
                                </a>
                                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-sm text-cyan-600 dark:text-cyan-400"
                                        >
                                            #{tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </TerminalText>
            </TerminalContainer>
        </div>
    );
};

export default Projects;
