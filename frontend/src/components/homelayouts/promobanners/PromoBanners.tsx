'use client';

import React from 'react';

import { promoItems } from './PromoItems';

const PromoBanners: React.FC = () => {
    return (
        <div
            className="grid gap-2"
            style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
        >
            {promoItems.map((item) => (
                <div
                    key={item.title}
                    className="rounded-sm p-4 flex flex-col items-center justify-center cursor-pointer overflow-hidden relative"
                    style={{
                        background: item.bg,
                        minHeight: '100px',
                    }}
                    onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLDivElement).style.opacity =
                            '0.88')
                    }
                    onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLDivElement).style.opacity =
                            '1')
                    }
                >
                    <div className="absolute right-2 bottom-1 text-5xl opacity-20">
                        {item.emoji}
                    </div>
                    <span
                        className="text-xs font-bold px-1.5 py-0.5 rounded self-center mb-2 text-center"
                        style={{
                            background: 'rgba(255,255,255,0.25)',
                            color: 'white',
                            letterSpacing: '0.04em',
                        }}
                    >
                        {item.tag}
                    </span>
                    <span
                        className="font-bold text-white relative z-10 text-center"
                        style={{ fontSize: '15px' }}
                    >
                        {item.title}
                    </span>
                    <span
                        className="text-white/80 relative z-10 mt-0.5 text-center"
                        style={{ fontSize: '12px' }}
                    >
                        {item.desc}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default PromoBanners;
