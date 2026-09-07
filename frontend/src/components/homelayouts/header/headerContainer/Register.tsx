import React from 'react';
import Link from 'next/link';

const Register: React.FC = () => {
    return (
        <Link
            href="/login"
            id="login-link"
            className="hover:text-white transition-colors font-medium"
        >
            Đăng nhập
        </Link>
    );
};

export default Register;
