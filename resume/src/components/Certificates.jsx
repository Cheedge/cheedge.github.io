import { certificates } from '../constants/data';
// import { papers } from '../constants/data';
import {
    CommandText,
    TerminalContainer,
    TerminalText,
} from './TerminalContainer';
const Certificates = () => {
    return (
        <div id="certificates">
            <TerminalContainer>
                <TerminalText>
                    <CommandText cmd="ls" file="./certificates/" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {certificates.map((cert, index) => (
                            <a
                                key={index}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors p-4"
                            >
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-16 h-16 rounded-full"
                                    />
                                    <div>
                                        <h3 className="font-medium">
                                            {cert.title}
                                        </h3>
                                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                            {cert.issuer} • {cert.date}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </TerminalText>
            </TerminalContainer>
        </div>
    );
};

export default Certificates;
