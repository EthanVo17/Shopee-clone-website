import React from 'react';

const SubSlider: React.FC = () => {
    return (
        <div
            className="flex flex-col gap-2"
            style={{ width: '180px', flexShrink: 0 }}
        >
            {/* Freeship Xtra */}
            <div
                className="flex-1 rounded-sm p-4 flex flex-col items-center justify-center cursor-pointer overflow-hidden relative"
                style={{
                    background:
                        'linear-gradient(135deg, #ff9f00 0%, #ff5900 100%)',
                    transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.92')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
                <div className="absolute right-[-8px] bottom-[-8px] text-6xl opacity-20">
                    🚚
                </div>
                <span className="text-base font-bold text-white relative z-10 text-center">
                    Freeship Xtra
                </span>
                <span className="text-xs mt-1 text-white/90 relative z-10 text-center">
                    Giảm đến 300K phí ship
                </span>
                <span
                    className="mt-2 text-xs font-semibold px-2 py-1 rounded-sm self-center relative z-10"
                    style={{
                        background: 'rgba(255,255,255,0.25)',
                        color: 'white',
                    }}
                >
                    Áp dụng ngay
                </span>
            </div>

            {/* Hàng Quốc Tế */}
            <div
                className="flex-1 rounded-sm p-4 flex flex-col items-center justify-center cursor-pointer overflow-hidden relative"
                style={{
                    background:
                        'linear-gradient(135deg, #00bfa5 0%, #00838f 100%)',
                    transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.92')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
                <div className="absolute right-[-8px] bottom-[-8px] text-6xl opacity-20">
                    ✈️
                </div>
                <span className="text-base font-bold text-white relative z-10 text-center">
                    Hàng Quốc Tế
                </span>
                <span className="text-xs mt-1 text-white/90 relative z-10 text-center">
                    Deal sốc đồng giá 1K
                </span>
                <span
                    className="mt-2 text-xs font-semibold px-2 py-1 rounded-sm self-center relative z-10"
                    style={{
                        background: 'rgba(255,255,255,0.25)',
                        color: 'white',
                    }}
                >
                    Khám phá
                </span>
            </div>
        </div>
    );
};

export default SubSlider;
