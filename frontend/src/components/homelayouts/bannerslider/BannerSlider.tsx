'use client';

import React from 'react';

import SubSlider from './SubSlider';
import MainSlider from './MainSlider';

const BannerSlider: React.FC = () => {
    return (
        <div
            id="hero-banner"
            className="flex gap-2 bg-white w-full shopee-container-flex h-[384px] justify-center"
            style={{ height: '260px' }}
        >
            {/* Main Slider */}
            <MainSlider />

            {/* Right Banners */}
            <SubSlider />
        </div>
    );
};

export default BannerSlider;
