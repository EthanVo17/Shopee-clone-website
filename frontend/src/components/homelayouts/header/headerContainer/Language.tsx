import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const LanguageList = [{ name: 'Tiếng Việt' }, { name: 'English' }];

const Language: React.FC = () => {
    const [showLanguages, setShowLanguages] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const currentLanguage = LanguageList[currentIndex];
    return (
        <div
            id="language-selector-btn"
            className="flex items-center gap-1 hover:text-white transition-colors"
        >
            <button
                onMouseEnter={() => setShowLanguages(true)}
                onMouseLeave={() => setShowLanguages(false)}
            >
                {currentLanguage.name}
            </button>
            {showLanguages && (
                <>
                    <ul className="bg-white w-[143px] top-[40px] ">
                        {LanguageList.map((language) => (
                            <li>
                                <button className="">{language.name}</button>
                            </li>
                        ))}
                    </ul>

                    <FontAwesomeIcon
                        icon={faChevronDown}
                        style={{ width: '10px', height: '10px' }}
                    />
                </>
            )}
        </div>
    );
};

export default Language;
