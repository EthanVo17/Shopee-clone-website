'use client';

import React from 'react';

const promoItems = [
    { emoji: '🏆', title: 'Shopee Mall', desc: 'Hàng chính hãng', bg: 'linear-gradient(135deg, #ee4d2d, #f78b76)', tag: 'CHÍNH HÃNG' },
    { emoji: '🎁', title: 'Voucher Shopee', desc: 'Hoàn tiền cực lớn', bg: 'linear-gradient(135deg, #f69a28, #ee4d2d)', tag: 'VOUCHER' },
    { emoji: '🌏', title: 'Hàng Quốc Tế', desc: 'Nhập khẩu chính ngạch', bg: 'linear-gradient(135deg, #00bcd4, #0097a7)', tag: 'QUỐC TẾ' },
    { emoji: '💳', title: 'ShopeePay', desc: 'Hoàn tiền đến 10%', bg: 'linear-gradient(135deg, #7b1fa2, #512da8)', tag: 'SHOPEEPAY' },
];

const PromoBanners: React.FC = () => {
    return (
        <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {promoItems.map((item) => (
                <div
                    key={item.title}
                    className="rounded-sm p-4 flex flex-col cursor-pointer overflow-hidden relative"
                    style={{
                        background: item.bg,
                        minHeight: '100px',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = '0.88')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = '1')}
                >
                    <div className="absolute right-2 bottom-1 text-5xl opacity-20">{item.emoji}</div>
                    <span
                        className="text-xs font-bold px-1.5 py-0.5 rounded self-start mb-2"
                        style={{ background: 'rgba(255,255,255,0.25)', color: 'white', letterSpacing: '0.04em' }}
                    >
                        {item.tag}
                    </span>
                    <span className="font-bold text-white relative z-10" style={{ fontSize: '15px' }}>
                        {item.title}
                    </span>
                    <span className="text-white/80 relative z-10 mt-0.5" style={{ fontSize: '12px' }}>
                        {item.desc}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default PromoBanners;
