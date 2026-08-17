'use client';

import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { footerColumns, socialLinks, policies } from './footerColumns';

const Footer: React.FC = () => {
    return (
        <footer
            className="mt-8 border-t"
            style={{ borderColor: '#e8e8e8', background: 'white' }}
        >
            {/* Main footer content */}
            <div className="shopee-container py-10">
                <div
                    className="grid gap-8"
                    style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}
                >
                    {footerColumns.map((col) => (
                        <div key={col.title}>
                            <h4
                                className="mb-4 font-semibold uppercase"
                                style={{
                                    fontSize: '13px',
                                    color: '#333',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                {col.title}
                            </h4>

                            {col.links && (
                                <ul className="space-y-2">
                                    {col.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="transition-colors hover:text-[#ee4d2d]"
                                                style={{
                                                    fontSize: '12px',
                                                    color: '#757575',
                                                }}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {col.isPayment && col.items && (
                                <div className="flex flex-wrap gap-2">
                                    {col.items.map((item) => (
                                        <span
                                            key={item.alt}
                                            className="flex items-center justify-center rounded border font-bold shadow-sm"
                                            style={{
                                                height: '28px',
                                                minWidth: '48px',
                                                padding: '0 6px',
                                                fontSize: '11px',
                                                color: item.color,
                                                borderColor: '#e8e8e8',
                                                background: 'white',
                                            }}
                                            title={item.alt}
                                        >
                                            {item.text}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {col.isSocial && (
                                <div className="flex flex-col gap-3">
                                    {socialLinks.map((social) => (
                                        <a
                                            href={social.href}
                                            key={social.label}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 transition-colors hover:text-[#ee4d2d]"
                                            style={{
                                                fontSize: '13px',
                                                color: '#555',
                                            }}
                                        >
                                            <span
                                                className="flex items-center justify-center rounded-full"
                                                style={{
                                                    width: '32px',
                                                    height: '32px',
                                                    background: '#f5f5f5',
                                                }}
                                            >
                                                <FontAwesomeIcon
                                                    icon={social.icon}
                                                    style={{
                                                        width: '16px',
                                                        height: '16px',
                                                        color: social.color,
                                                    }}
                                                />
                                            </span>
                                            {social.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom bar */}
            <div
                style={{
                    borderTop: '1px solid #f5f5f5',
                    background: '#fafafa',
                }}
            >
                <div className="shopee-container py-6 text-center">
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {policies.map((policy, idx) => (
                            <React.Fragment key={policy.title}>
                                <Link
                                    href="#"
                                    className="transition-colors hover:text-[#ee4d2d]"
                                    style={{
                                        fontSize: '12px',
                                        color: '#757575',
                                    }}
                                >
                                    {policy.title}
                                </Link>
                                {idx < policies.length - 1 && (
                                    <span
                                        style={{
                                            fontSize: '12px',
                                            color: '#ccc',
                                        }}
                                    >
                                        •
                                    </span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    <p
                        style={{
                            fontSize: '12px',
                            color: '#9e9e9e',
                            marginBottom: '6px',
                        }}
                    >
                        © 2025 Shopee. Tất cả các quyền được bảo lưu.
                    </p>

                    <p
                        style={{
                            fontSize: '12px',
                            color: '#bdbdbd',
                            lineHeight: '1.6',
                        }}
                    >
                        Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường
                        Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà
                        Nội, Việt Nam.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                        <img
                            src="https://www.pinterest.com/pin/886927720383866042/"
                            alt="Bộ Công Thương"
                            style={{ height: '32px', opacity: 0.7 }}
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display =
                                    'none';
                            }}
                        />
                        <span style={{ fontSize: '11px', color: '#bdbdbd' }}>
                            Quốc gia / Khu vực: Việt Nam
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
