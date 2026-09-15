import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Seller from './Seller';

const ConnectSocial: React.FC = () => {
    const user = false;

    return (
        <>
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

            {user && (
                <>
                    <span className="text-white/30 hidden sm:inline">|</span>

                    <Seller />
                </>
            )}
        </>
    );
};

export default ConnectSocial;
