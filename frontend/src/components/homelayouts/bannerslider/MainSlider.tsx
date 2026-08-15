import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { banners } from './banners';

const MainSlider: React.FC = () => {
    const [current, setCurrent] = React.useState(0);
    const [isAnimating, setIsAnimating] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);

    const goTo = React.useCallback(
        (index: number) => {
            if (isAnimating) return;
            setIsAnimating(true);
            setCurrent((index + banners.length) % banners.length);
            setTimeout(() => setIsAnimating(false), 400);
        },
        [isAnimating]
    );

    const prev = React.useCallback(() => goTo(current - 1), [current, goTo]);
    const next = React.useCallback(() => goTo(current + 1), [current, goTo]);

    React.useEffect(() => {
        if (isHovered) return;
        const timer = setInterval(next, 4000);
        return () => clearInterval(timer);
    }, [next, isHovered]);

    const banner = banners[current];

    return (
        <div
            id="banner-slider"
            className="relative flex-1 overflow-hidden rounded-sm cursor-pointer"
            style={{ minWidth: 0 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Slide Content */}
            <div
                className="h-full w-full flex items-center justify-center relative"
                style={{
                    background: banner.bg,
                    transition: 'background 0.4s ease',
                }}
            >
                {/* Decorative circles */}
                <div
                    className="absolute top-[-20px] right-[-20px] rounded-full opacity-10"
                    style={{
                        width: '200px',
                        height: '200px',
                        background: 'white',
                    }}
                />
                <div
                    className="absolute bottom-[-40px] left-[-40px] rounded-full opacity-10"
                    style={{
                        width: '250px',
                        height: '250px',
                        background: 'white',
                    }}
                />

                {/* Tag badge */}
                <div className="absolute top-4 left-4">
                    <span
                        className="text-xs font-bold px-2 py-1 rounded-sm"
                        style={{
                            background: 'rgba(255,255,255,0.25)',
                            color: 'white',
                            letterSpacing: '0.05em',
                        }}
                    >
                        {banner.tag}
                    </span>
                </div>

                {/* Main content */}
                <div className="text-center text-white px-8 relative z-10">
                    <div className="text-6xl mb-3">{banner.emoji}</div>
                    <h1 className="text-3xl font-bold mb-2 leading-tight">
                        {banner.title}
                    </h1>
                    <p className="text-base opacity-90">{banner.subtitle}</p>
                    <button
                        type="button"
                        className="mt-4 px-6 py-2 rounded-sm text-sm font-semibold"
                        style={{ background: 'white', color: '#ee4d2d' }}
                    >
                        Mua ngay
                    </button>
                </div>
            </div>

            {/* Prev Button */}
            <button
                type="button"
                onClick={prev}
                aria-label="Banner trước"
                className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center text-white transition-all duration-300"
                style={{
                    width: '32px',
                    height: '56px',
                    background: 'rgba(0,0,0,0.18)',
                    opacity: isHovered ? 1 : 0,
                    borderRadius: '0 2px 2px 0',
                }}
            >
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    style={{ width: '16px', height: '16px' }}
                />
            </button>

            {/* Next Button */}
            <button
                type="button"
                onClick={next}
                aria-label="Banner tiếp theo"
                className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center text-white transition-all duration-300"
                style={{
                    width: '32px',
                    height: '56px',
                    background: 'rgba(0,0,0,0.18)',
                    opacity: isHovered ? 1 : 0,
                    borderRadius: '2px 0 0 2px',
                }}
            >
                <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ width: '16px', height: '16px' }}
                />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {banners.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => goTo(index)}
                        aria-label={`Banner ${index + 1}`}
                        className="rounded-full border border-white/30 transition-all duration-300"
                        style={{
                            width: index === current ? '20px' : '8px',
                            height: '8px',
                            background:
                                index === current
                                    ? 'white'
                                    : 'rgba(255,255,255,0.5)',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default MainSlider;
