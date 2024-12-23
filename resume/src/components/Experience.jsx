import { experience } from '../constants/data';
import {
    CommandText,
    TerminalContainer,
    TerminalText,
} from './TerminalContainer';
const Experience = () => {
    return (
        <div id="experience">
            <TerminalContainer>
                <TerminalText>
                    <CommandText cmd="tail" file="experience" suffix="log" />
                    <div className="space-y-6">
                        {experience.map((exp, index) => (
                            <div
                                key={index}
                                className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4"
                            >
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        {exp.company}
                                    </h3>
                                    <p className="text-zinc-600 dark:text-zinc-400">
                                        {exp.position}
                                    </p>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-500">
                                        {exp.period}
                                    </p>
                                </div>
                                <div className="ml-4">
                                    {exp.logo && (
                                        <img
                                            src={exp.logo}
                                            alt={`${exp.company} logo`}
                                            className="h-10 w-10 object-contain" // Adjust size as needed
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </TerminalText>
            </TerminalContainer>
        </div>
    );
};

export default Experience;
