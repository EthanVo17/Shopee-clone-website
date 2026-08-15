import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import SearchBar from '../../searchbar/SearchBar';

const MainHeader: React.FC = () => {
    const totalItems = 0;
    return (
        <div style={{ backgroundColor: '#ee4d2d' }}>
            <div className="shopee-container-flex flex items-center gap-6 px-4 py-3">
                {/* Logo */}
                <Link
                    href="/"
                    id="shopee-logo-link"
                    className="flex-shrink-0"
                    aria-label="Shopee"
                >
                    <svg
                        width="162"
                        height="50"
                        viewBox="0 0 162 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Shopee Logo"
                    >
                        {/* Shopee bag icon */}
                        <g transform="translate(0, 3)">
                            <rect
                                x="2"
                                y="14"
                                width="34"
                                height="26"
                                rx="3"
                                fill="white"
                            />
                            <path
                                d="M5 14 Q5 6 19 6 Q33 6 33 14"
                                stroke="white"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                            />
                            <circle cx="12" cy="14" r="2.5" fill="#ee4d2d" />
                            <circle cx="26" cy="14" r="2.5" fill="#ee4d2d" />
                            <ellipse
                                cx="19"
                                cy="24"
                                rx="5"
                                ry="6"
                                fill="#ee4d2d"
                            />
                            <text
                                x="42"
                                y="33"
                                fontSize="26"
                                fontWeight="bold"
                                fill="white"
                                fontFamily="Arial, sans-serif"
                                letterSpacing="-0.5"
                            >
                                shopee
                            </text>
                        </g>
                    </svg>
                </Link>

                {/* Search Bar */}
                <div className="w-[840px]">
                    <SearchBar />
                </div>

                {/* Cart */}
                <Link
                    href="/cart"
                    id="cart-icon-link"
                    className="relative flex-shrink-0 ml-[16px] text-white hover:text-white/80 transition-colors"
                    aria-label={`Giỏ hàng (${totalItems} sản phẩm)`}
                >
                    <FontAwesomeIcon
                        icon={faCartShopping}
                        style={{ width: '28px', height: '28px' }}
                    />
                    {totalItems > 0 && (
                        <span
                            className="absolute mr-[12px] -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold"
                            style={{ color: '#ee4d2d' }}
                        >
                            {totalItems > 99 ? '99+' : totalItems}
                        </span>
                    )}
                </Link>
            </div>
        </div>
    );
};

export default MainHeader;
