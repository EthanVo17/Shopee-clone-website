import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Notification: React.FC = () => {
    return (
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
    );
};

export default Notification;
