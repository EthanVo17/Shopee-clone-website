'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const TrendingKeywords = [
    'Áo thun',
    'Giày sneaker',
    'Laptop',
    'Điện thoại',
    'Tai nghe',
    'Balo',
    'Đầm',
    'Sạc dự phòng',
];

interface SearchBarProps {
    initialValue?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ initialValue = '' }) => {
    const router = useRouter();
    const [value, setValue] = React.useState(initialValue);

    const handleSubmit = React.useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();
            const trimmed = value.trim();
            if (!trimmed) return;
            router.push(`/?keyword=${encodeURIComponent(trimmed)}`);
        },
        [value, router]
    );

    const handleClick = (kw: string) => {
        setValue(kw);
        router.push(`/?keyword=${encodeURIComponent(kw)}`);
    };

    return (
        <div className="w-[840px]">
            <form
                className="flex items-center bg-white overflow-hidden"
                style={{ height: '40px' }}
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    id="search-input"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Tìm kiếm sản phẩm, thương hiệu,..."
                    className="flex-1 px-4 text-sm text-gray-800 outline-none placeholder:text-gray-400 bg-transparent h-full"
                    autoComplete="off"
                />
                <button
                    id="search-submit-btn"
                    type="submit"
                    className="flex h-full w-[60px] items-center justify-center bg-[#ee4d2d] text-white hover:bg-[#d73211] transition-colors flex-shrink-0 cursor-pointer"
                    aria-label="Tìm kiếm"
                >
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="h-4 w-4"
                    />
                </button>
            </form>

            {/* Trending keywords */}
            <div className="mt-4 flex flex-wrap gap-2">
                {TrendingKeywords.map((kw) => (
                    <button
                        className="text-[12px] text-white/80 hover:text-white transition-colors cursor-pointer truncate max-w-[120px]"
                        key={kw}
                        type="button"
                        onClick={() => handleClick(kw)}
                    >
                        {kw}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
