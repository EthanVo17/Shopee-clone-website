'use client';

import React from 'react';
import Link from 'next/link';

import { categories } from './categories';
import CategoryHeader from './CategoryHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const CategoryGrid: React.FC = () => {
    return (
        <div
            id="category-grid"
            className="bg-white rounded-sm mt-[12px] mb-[12px]"
            style={{ boxShadow: '0 1px 4px 0 rgba(0,0,0,0.09)' }}
        >
            {/* ── Header ── */}
            <CategoryHeader />

            {/* ── Grid ── */}
            <div
                className="grid"
                style={{ gridTemplateColumns: 'repeat(10, 1fr)' }}
            >
                {categories.map((category, idx) => (
                    <Link
                        href={`/?category=${category.slug}`}
                        key={category.id}
                        id={`category-${category.slug}`}
                        className="group flex flex-col items-center gap-2 py-5 px-2 cursor-pointer transition-all duration-200"
                        style={{
                            borderRight:
                                (idx + 1) % 10 !== 0
                                    ? '1px solid #f5f5f5'
                                    : 'none',
                            borderBottom:
                                idx < 10 ? '1px solid #f5f5f5' : 'none',
                        }}
                    >
                        <div
                            className="flex items-center justify-center text-3xl transition-transform duration-200 group-hover:scale-110"
                            style={{ width: '56px', height: '56px' }}
                        >
                            {category.emoji}
                        </div>

                        <span
                            className="text-center leading-tight transition-colors duration-200 group-hover:text-[#ee4d2d]"
                            style={{
                                fontSize: '12px',
                                color: '#333',
                                lineHeight: '1.4',
                            }}
                        >
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryGrid;
