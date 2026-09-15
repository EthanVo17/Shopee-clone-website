import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';

const Seller: React.FC = () => {
    return (
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
    );
};

export default Seller;
