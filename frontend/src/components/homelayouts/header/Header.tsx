'use client';

import TopHeader from './TopHeader';
import MainHeader from './MainHeader';

function Header() {
    return (
        <header
            className="sticky top-0 z-50 w-full"
            style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}
        >
            <TopHeader />

            {/* ─── Main Bar ─── */}
            <MainHeader />
        </header>
    );
}

export default Header;
