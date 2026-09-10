import React from 'react';

const LanguageList = [
    { name: 'Tiếng Việt', key: 'vi' },
    { name: 'English', key: 'en' },
];

const Language: React.FC = () => {
    const [showLanguages, setShowLanguages] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const currentLanguage = LanguageList[currentIndex];
    const handleSelectLanguage = (index: number) => {
        setCurrentIndex(index);
        setShowLanguages(false);
    };

    return (
        <div
            id="language-selector"
            className="relative inline-block"
            onMouseEnter={() => setShowLanguages(true)}
            onMouseLeave={() => setShowLanguages(false)}
        >
            <button
                type="button"
                className="flex items-center gap-1 transition-colors hover:text-white"
            >
                {currentLanguage.name}
            </button>
            <ul
                className={`
                    absolute right-0 top-full z-10 mt-2 w-52 h-[60px]
                    border border-gray-200 bg-white p-2 shadow-lg
                    transition-all duration-200 ease-out
                    ${
                        showLanguages
                            ? 'visible translate-y-0 opacity-100'
                            : 'invisible -translate-y-2 opacity-0'
                    }
                `}
            >
                {LanguageList.map((language, index) => (
                    <li key={language.key} className="w-52 h-[30px] m-[6px]">
                        <button
                            type="button"
                            onClick={() => handleSelectLanguage(index)}
                            className={`
                                w-full h-full rounded-md text-left indent-[10px] text-sm
                                transition-colors hover:text-orange-500
                                ${
                                    index === currentIndex
                                        ? 'font-semibold text-orange-600'
                                        : 'text-gray-700'
                                }
                            `}
                        >
                            {language.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Language;
