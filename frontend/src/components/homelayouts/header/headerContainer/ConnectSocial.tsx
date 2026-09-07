import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBoxOpen, faDownload } from '@fortawesome/free-solid-svg-icons';

const ConnectSocial: React.FC = () => {
    const user = false;

    return (
        <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-white/70">Kết nối</span>
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

            {user && (
                <>
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
                </>
            )}

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
    );
};

export default ConnectSocial;
