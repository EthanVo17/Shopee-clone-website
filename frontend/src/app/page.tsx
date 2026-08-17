import React from 'react';
import type { Metadata } from 'next';

import BannerSlider from '../components/homelayouts/bannerslider/BannerSlider';
import CategoryGrid from '../components/category/CategoryGrid';
import FlashSaleSection from '../components/homelayouts/flashsale/FlashSaleSection';
import ProductGrid from '../components/homelayouts/productgrid/ProductGrid';
import PromoBanners from '../components/homelayouts/promobanners/PromoBanners';
import SeeMoreBtn from '../components/SeeMoreBtn/SeeMoreBtn';

export const metadata: Metadata = {
    title: 'Shopee Việt Nam | Mua và Bán Trên Ứng Dụng Di Động Hoặc Website',
    description:
        'Mua sắm trực tuyến tại Shopee Việt Nam với hàng triệu sản phẩm đa dạng, giảm giá mỗi ngày, giao hàng nhanh chóng toàn quốc.',
    keywords: [
        'shopee',
        'mua sắm online',
        'thương mại điện tử',
        'giảm giá',
        'flash sale',
    ],
    openGraph: {
        title: 'Shopee Việt Nam | Mua và Bán Trên Ứng Dụng Di Động Hoặc Website',
        description:
            'Mua sắm trực tuyến với hàng triệu sản phẩm đa dạng, giá tốt nhất',
        type: 'website',
        locale: 'vi_VN',
    },
};

function Home() {
    return (
        <div className="shopee-container  mt-4 py-5">
            {/* ─── Hero Section: Banner + Side Banners ─── */}
            <section
                id="hero-section"
                className=" flex items-center my-5 bg-white h-[384px]"
            >
                <BannerSlider />
            </section>

            {/* ─── Category Grid ─── */}
            <section
                id="category-section"
                className="my-5 shopee-container-flex shopee-space-container"
            >
                <CategoryGrid />
            </section>

            {/* ─── Flash Sale ─── */}
            <section
                id="flash-sale-section"
                className="my-5 shopee-container-flex shopee-space-container"
            >
                <FlashSaleSection />
            </section>

            {/* ─── Promotional Banners Row ─── */}
            <section
                id="promo-banners-section"
                className="my-5 shopee-container-flex shopee-space-container"
            >
                <PromoBanners />
            </section>

            {/* ─── Gợi ý hôm nay ─── */}
            <section id="suggestion-section">
                {/* Section Header */}
                <div
                    className="flex items-center justify-center mb-3 shopee-container-flex shopee-space-container"
                    style={{ padding: '12px 0 8px' }}
                >
                    <div className="flex items-center gap-4 w-full">
                        <div
                            style={{
                                flex: 1,
                                height: '1px',
                                background: '#e8e8e8',
                            }}
                        />
                        <h2
                            className="font-semibold uppercase tracking-widest flex-shrink-0"
                            style={{
                                fontSize: '14px',
                                color: '#333',
                                letterSpacing: '0.1em',
                            }}
                        >
                            GỢI Ý HÔM NAY
                        </h2>
                        <div
                            style={{
                                flex: 1,
                                height: '1px',
                                background: '#e8e8e8',
                            }}
                        />
                    </div>
                </div>

                <React.Suspense fallback={<ProductListSkeleton />}>
                    <div className="shopee-space-container">
                        <ProductGrid />
                    </div>
                </React.Suspense>

                {/* Load more button */}
                <div className="shopee-space-container">
                    <SeeMoreBtn />
                </div>
            </section>
        </div>
    );
}

function ProductListSkeleton() {
    return (
        <div
            className="grid"
            style={{ gridTemplateColumns: 'repeat(6, 1fr)', gap: '8px' }}
        >
            {Array.from({ length: 12 }).map((_, index) => (
                <div
                    key={index}
                    className="animate-pulse rounded-sm bg-white"
                    style={{ boxShadow: '0 1px 4px 0 rgba(0,0,0,0.07)' }}
                >
                    <div style={{ aspectRatio: '1', background: '#f5f5f5' }} />
                    <div className="p-2 space-y-2">
                        <div
                            style={{
                                height: '12px',
                                background: '#f5f5f5',
                                borderRadius: '2px',
                            }}
                        />
                        <div
                            style={{
                                height: '12px',
                                width: '75%',
                                background: '#f5f5f5',
                                borderRadius: '2px',
                            }}
                        />
                        <div
                            style={{
                                height: '16px',
                                width: '50%',
                                background: '#f5f5f5',
                                borderRadius: '2px',
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;
