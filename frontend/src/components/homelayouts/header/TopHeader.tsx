import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBoxOpen,
    faDownload,
    faBell,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Login from './headerContainer/Login';
import Register from './headerContainer/Register';
import Language from './headerContainer/Language';
import Notification from './headerContainer/Notification';
import ConnectSocial from './headerContainer/ConnectSocial';

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
                <ConnectSocial />

                {/* Right: Notification + Auth */}
                <div className="flex items-center gap-4">
                    {/* Notification */}
                    <Notification />

                    <span className="text-white/30">|</span>

                    {/* Language */}
                    <Language />

                    <span className="text-white/30">|</span>

                    {/* Auth */}
                    <Login />

                    <span className="text-white/30">|</span>

                    <Register />
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
