'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { FlashProduct } from '@/src/types/flashsaleproduct.type/flashsaleproduct.type';

const flashProducts: FlashProduct[] = [
    {
        id: 1,
        name: 'Tai Nghe Bluetooth Sony WH-1000XM5',
        emoji: '🎧',
        bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        originalPrice: 8990000,
        salePrice: 3990000,
        discountPct: 56,
        soldPct: 87,
        location: 'Hà Nội',
    },
    {
        id: 2,
        name: 'Điện Thoại Samsung Galaxy A55 5G',
        emoji: '📱',
        bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        originalPrice: 10990000,
        salePrice: 7490000,
        discountPct: 32,
        soldPct: 74,
        location: 'TP. HCM',
    },
    {
        id: 3,
        name: 'Áo Thun Nam Form Rộng Uniqlo',
        emoji: '👕',
        bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        originalPrice: 390000,
        salePrice: 149000,
        discountPct: 62,
        soldPct: 91,
        location: 'TP. HCM',
    },
    {
        id: 4,
        name: 'Nồi Chiên Không Dầu Philips 4.1L',
        emoji: '🍳',
        bg: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        originalPrice: 3200000,
        salePrice: 1890000,
        discountPct: 41,
        soldPct: 63,
        location: 'Đà Nẵng',
    },
    {
        id: 5,
        name: 'Máy Tính Bảng iPad Air M1',
        emoji: '🖥️',
        bg: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        originalPrice: 18990000,
        salePrice: 14990000,
        discountPct: 21,
        soldPct: 48,
        location: 'Hà Nội',
    },
    {
        id: 6,
        name: 'Giày Thể Thao Nike Air Max 270',
        emoji: '👟',
        bg: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        originalPrice: 4200000,
        salePrice: 2190000,
        discountPct: 48,
        soldPct: 79,
        location: 'TP. HCM',
    },
];

function formatPrice(price: number): string {
    return price.toLocaleString('vi-VN') + 'đ';
}

function getEndTime(): Date {
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    return end;
}

function useCountdown(target: Date) {
    const calc = useCallback(() => {
        const diff = target.getTime() - Date.now();
        if (diff <= 0) return { h: 0, m: 0, s: 0 };
        const totalSecs = Math.floor(diff / 1000);
        return {
            h: Math.floor(totalSecs / 3600),
            m: Math.floor((totalSecs % 3600) / 60),
            s: totalSecs % 60,
        };
    }, [target]);

    const [time, setTime] = useState(calc);

    useEffect(() => {
        const id = setInterval(() => setTime(calc()), 1000);
        return () => clearInterval(id);
    }, [calc]);

    return time;
}

function TimeBlock({ value, label }: { value: number; label: string }) {
    const str = String(value).padStart(2, '0');
    return (
        <div className="flex flex-col items-center">
            <span
                className="text-white font-bold leading-none px-1.5 py-0.5 rounded"
                style={{
                    fontSize: '18px',
                    background: '#ee4d2d',
                    minWidth: '28px',
                    textAlign: 'center',
                }}
            >
                {str}
            </span>
            <span
                style={{ fontSize: '10px', color: '#757575', marginTop: '2px' }}
            >
                {label}
            </span>
        </div>
    );
}

function TimeSeparator() {
    return (
        <span
            className="font-bold"
            style={{
                color: '#ee4d2d',
                fontSize: '18px',
                paddingBottom: '14px',
            }}
        >
            :
        </span>
    );
}

const FlashSaleSection: React.FC = () => {
    const endTime = React.useMemo(() => getEndTime(), []);
    const { h, m, s } = useCountdown(endTime);
    const [mounted, setMounted] = React.useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div
            id="flash-sale-section"
            className="bg-white rounded-sm"
            style={{ boxShadow: '0 1px 4px 0 rgba(0,0,0,0.09)' }}
        >
            {/* Header */}
            <div
                className="flex items-center justify-between px-4 py-3"
                style={{ borderBottom: '1px solid #f5f5f5' }}
            >
                <div className="flex items-center gap-3">
                    {/* Flash Sale Title */}
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon
                            icon={faBolt}
                            style={{
                                color: '#ee4d2d',
                                width: '20px',
                                height: '20px',
                            }}
                        />
                        <h2
                            className="font-bold uppercase tracking-wider"
                            style={{
                                fontSize: '18px',
                                color: '#ee4d2d',
                                letterSpacing: '0.05em',
                            }}
                        >
                            Flash Sale
                        </h2>
                    </div>

                    <span style={{ color: '#bdbdbd', fontSize: '14px' }}>
                        |
                    </span>

                    {/* Countdown */}
                    <div className="flex items-end gap-1.5">
                        <span style={{ fontSize: '12px', color: '#757575' }}>
                            Kết thúc trong
                        </span>
                        <div className="flex items-end gap-1">
                            {mounted ? (
                                <>
                                    <TimeBlock value={h} label="GIỜ" />
                                    <TimeSeparator />
                                    <TimeBlock value={m} label="PHÚT" />
                                    <TimeSeparator />
                                    <TimeBlock value={s} label="GIÂY" />
                                </>
                            ) : (
                                /* Placeholder khi SSR để tránh hydration mismatch */
                                <>
                                    <TimeBlock value={0} label="GIỜ" />
                                    <TimeSeparator />
                                    <TimeBlock value={0} label="PHÚT" />
                                    <TimeSeparator />
                                    <TimeBlock value={0} label="GIÂY" />
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <Link
                    href="/flash-sale"
                    id="flash-sale-view-all"
                    className="flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-70"
                    style={{ color: '#ee4d2d' }}
                >
                    Xem tất cả
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ width: '12px', height: '12px' }}
                    />
                </Link>
            </div>

            {/* Products Grid */}
            <div
                className="grid"
                style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}
            >
                {flashProducts.map((product, idx) => (
                    <Link
                        href={`/product/${product.id}`}
                        key={product.id}
                        id={`flash-product-${product.id}`}
                        className="group flex flex-col cursor-pointer transition-all duration-200"
                        style={{
                            borderRight:
                                idx < flashProducts.length - 1
                                    ? '1px solid #f5f5f5'
                                    : 'none',
                            textDecoration: 'none',
                        }}
                    >
                        {/* Product Image Area */}
                        <div
                            className="relative overflow-hidden"
                            style={{
                                aspectRatio: '1',
                                background: product.bg,
                            }}
                        >
                            {/* Discount Badge */}
                            <div
                                className="absolute top-0 left-0 flex flex-col items-center justify-center"
                                style={{
                                    width: '36px',
                                    background: '#ee4d2d',
                                    padding: '3px 0',
                                    borderBottomRightRadius: '4px',
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: '13px',
                                        fontWeight: 700,
                                        color: 'white',
                                        lineHeight: 1,
                                    }}
                                >
                                    {product.discountPct}%
                                </span>
                                <span
                                    style={{
                                        fontSize: '9px',
                                        color: 'rgba(255,255,255,0.9)',
                                        lineHeight: 1,
                                    }}
                                >
                                    GIẢM
                                </span>
                            </div>

                            {/* Product Emoji */}
                            <div className="flex items-center justify-center h-full text-7xl group-hover:scale-105 transition-transform duration-200">
                                {product.emoji}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="p-2 flex flex-col gap-1">
                            <p
                                className="line-clamp-2"
                                style={{
                                    fontSize: '12px',
                                    color: '#333',
                                    lineHeight: '1.4',
                                }}
                            >
                                {product.name}
                            </p>

                            {/* Prices */}
                            <div className="flex items-center gap-1 flex-wrap">
                                <span
                                    className="font-bold"
                                    style={{
                                        fontSize: '14px',
                                        color: '#ee4d2d',
                                    }}
                                >
                                    {formatPrice(product.salePrice)}
                                </span>
                                <span
                                    className="line-through"
                                    style={{
                                        fontSize: '11px',
                                        color: '#9e9e9e',
                                    }}
                                >
                                    {formatPrice(product.originalPrice)}
                                </span>
                            </div>

                            {/* Progress Bar */}
                            <div>
                                <div
                                    className="rounded-full overflow-hidden"
                                    style={{
                                        height: '6px',
                                        background: '#f5f5f5',
                                    }}
                                >
                                    <div
                                        className="h-full rounded-full"
                                        style={{
                                            width: `${product.soldPct}%`,
                                            background:
                                                'linear-gradient(to right, #f69a28, #ee4d2d)',
                                            transition: 'width 0.3s ease',
                                        }}
                                    />
                                </div>
                                <div className="flex items-center justify-between mt-0.5">
                                    <span
                                        style={{
                                            fontSize: '10px',
                                            color: '#ee4d2d',
                                            fontWeight: 500,
                                        }}
                                    >
                                        {product.soldPct > 80
                                            ? 'Sắp hết hàng'
                                            : 'Đang bán'}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '10px',
                                            color: '#757575',
                                        }}
                                    >
                                        {product.soldPct}%
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FlashSaleSection;
