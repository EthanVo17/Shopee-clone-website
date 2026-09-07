import React from 'react';
import Link from 'next/link';

const Login: React.FC = () => {
    return (
        <Link
            href="/register"
            id="register-link"
            className="hover:text-white transition-colors"
        >
            Đăng ký
        </Link>
    );
};

export default Login;
