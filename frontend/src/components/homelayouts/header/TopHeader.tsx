import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBoxOpen,
    faDownload,
    faBell,
    faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

{
    /* ─── Top Bar ─── */
}

const TopHeader: React.FC = () => {
    return (
        <div
            style={{
                background: 'linear-gradient(to right, #f53d2d, #ee4d2d)',
            }}
        >
            <div
                className="shopee-container-flex flex items-center justify-between px-4"
                style={{
                    height: '34px',
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.85)',
                }}
            >
                {/* Left: Social + Seller + Download */}
                <div className="flex items-center gap-4">
                    <span className="hidden sm:inline text-white/70">
                        Kết nối
                    </span>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                        aria-label="Facebook Shopee"
                    >
                        <FontAwesomeIcon
                            icon={faFacebook}
                            style={{ width: '14px', height: '14px' }}
                        />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                        aria-label="Instagram Shopee"
                    >
                        <FontAwesomeIcon
                            icon={faInstagram}
                            style={{ width: '14px', height: '14px' }}
                        />
                    </a>

                    <span className="text-white/30 hidden sm:inline">|</span>

                    <Link
                        href="#"
                        id="sell-on-shopee-link"
                        className="hidden sm:flex items-center gap-1 hover:text-white transition-colors"
                    >
                        <FontAwesomeIcon
                            icon={faBoxOpen}
                            style={{ width: '13px', height: '13px' }}
                        />
                        <span>Kênh người bán</span>
                    </Link>

                    <span className="text-white/30 hidden sm:inline">|</span>

                    <Link
                        href="#"
                        id="download-app-link"
                        className="hidden sm:flex items-center gap-1 hover:text-white transition-colors"
                    >
                        <FontAwesomeIcon
                            icon={faDownload}
                            style={{ width: '13px', height: '13px' }}
                        />
                        <span>Tải ứng dụng</span>
                    </Link>
                </div>

                {/* Right: Notification + Auth */}
                <div className="flex items-center gap-4">
                    {/* Notification */}
                    <div className="relative group">
                        <button
                            id="notification-btn"
                            type="button"
                            className="flex items-center gap-1 hover:text-white transition-colors"
                            aria-label="Thông báo"
                        >
                            <FontAwesomeIcon
                                icon={faBell}
                                style={{ width: '14px', height: '14px' }}
                            />
                            <span className="hidden sm:inline">Thông Báo</span>
                        </button>
                    </div>

                    <span className="text-white/30">|</span>

                    {/* Language */}
                    <button
                        type="button"
                        id="language-selector-btn"
                        className="flex items-center gap-1 hover:text-white transition-colors"
                    >
                        <span>Tiếng Việt</span>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            style={{ width: '10px', height: '10px' }}
                        />
                    </button>

                    <span className="text-white/30">|</span>

                    {/* Auth */}
                    <Link
                        href="/register"
                        id="register-link"
                        className="hover:text-white transition-colors"
                    >
                        Đăng ký
                    </Link>

                    <span className="text-white/30">|</span>

                    <Link
                        href="/login"
                        id="login-link"
                        className="hover:text-white transition-colors font-medium"
                    >
                        Đăng nhập
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
