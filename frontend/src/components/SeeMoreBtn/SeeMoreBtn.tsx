import React from 'react';
import Link from 'next/link';

const SeeMoreBtn: React.FC = () => {
    // const [login, setLogin] = React.useState(false);
    const login = false;

    return login ? (
        <div className="flex justify-center">
            <a
                href="#"
                id="see-more-btn"
                className="flex items-center justify-center h-[40px] min-w-[390px] rounded-sm border transition-colors"
                style={{
                    fontSize: '14px',
                    color: '#ee4d2d',
                    borderColor: '#ee4d2d',
                    background: 'white',
                }}
            >
                Xem thêm
            </a>
        </div>
    ) : (
        <div className="flex justify-center mt-8">
            <Link
                href="/login"
                id="see-more-btn"
                className="flex items-center justify-center h-[40px] min-w-[390px] rounded-sm border transition-colors"
                style={{
                    fontSize: '14px',
                    color: '#ee4d2d',
                    borderColor: '#ee4d2d',
                    background: 'white',
                }}
            >
                Đăng nhập để xem thêm
            </Link>
        </div>
    );
};

export default SeeMoreBtn;
