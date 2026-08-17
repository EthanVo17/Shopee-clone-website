import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { useCountdown, getEndTime } from '../../../hooks/useCountdown';

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

const FlashSaleHeader: React.FC = () => {
    const [mounted, setMounted] = React.useState(false);
    const endTime = React.useMemo(() => getEndTime(), []);
    const { h, m, s } = useCountdown(endTime);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
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

                <span style={{ color: '#bdbdbd', fontSize: '14px' }}>|</span>

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
    );
};

export default FlashSaleHeader;
