'use client';

import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

interface Product {
    id: number;
    name: string;
    emoji: string;
    bg: string;
    price: number;
    originalPrice: number;
    discountPct: number;
    rating: number;
    sold: number;
    location: string;
}

const mockProducts: Product[] = [
    { id: 101, name: 'Áo Thun Nam Cổ Tròn Cotton Mềm Mại Form Regular', emoji: '👔', bg: '#e8f4fd', price: 129000, originalPrice: 299000, discountPct: 57, rating: 4.8, sold: 3200, location: 'TP. HCM' },
    { id: 102, name: 'Giày Sneaker Nữ Trắng Cổ Thấp Đế Bằng Thời Trang', emoji: '👟', bg: '#fef9e7', price: 259000, originalPrice: 490000, discountPct: 47, rating: 4.7, sold: 1800, location: 'Hà Nội' },
    { id: 103, name: 'Kem Chống Nắng Anessa SPF50+ PA++++ 60ml', emoji: '🧴', bg: '#fff3e0', price: 380000, originalPrice: 600000, discountPct: 37, rating: 4.9, sold: 5400, location: 'TP. HCM' },
    { id: 104, name: 'Tai Nghe True Wireless Samsung Galaxy Buds2', emoji: '🎧', bg: '#f3e5f5', price: 1490000, originalPrice: 3290000, discountPct: 55, rating: 4.6, sold: 920, location: 'Hà Nội' },
    { id: 105, name: 'Nồi Cơm Điện Tử Panasonic 1.8L Cao Cấp', emoji: '🍚', bg: '#e8f5e9', price: 890000, originalPrice: 1590000, discountPct: 44, rating: 4.8, sold: 2100, location: 'Đà Nẵng' },
    { id: 106, name: 'Túi Xách Nữ Da PU Thời Trang Hàn Quốc', emoji: '👜', bg: '#fce4ec', price: 320000, originalPrice: 750000, discountPct: 57, rating: 4.7, sold: 1560, location: 'TP. HCM' },
    { id: 107, name: 'Chuột Không Dây Logitech MX Master 3S', emoji: '🖱️', bg: '#e3f2fd', price: 1890000, originalPrice: 2890000, discountPct: 35, rating: 4.9, sold: 780, location: 'Hà Nội' },
    { id: 108, name: 'Bộ Dưỡng Da Mặt 5 Bước Innisfree Green Tea', emoji: '🌿', bg: '#e8f5e9', price: 690000, originalPrice: 1200000, discountPct: 43, rating: 4.8, sold: 3400, location: 'TP. HCM' },
    { id: 109, name: 'Đồng Hồ Nam Dây Da Sang Trọng Chính Hãng', emoji: '⌚', bg: '#f3e5f5', price: 1290000, originalPrice: 2500000, discountPct: 48, rating: 4.6, sold: 640, location: 'Hà Nội' },
    { id: 110, name: 'Balo Du Lịch Chống Nước 40L Thương Hiệu Cao Cấp', emoji: '🎒', bg: '#fff8e1', price: 450000, originalPrice: 890000, discountPct: 49, rating: 4.7, sold: 2890, location: 'TP. HCM' },
    { id: 111, name: 'Sách Tâm Lý Học Về Tiền - Nhà Xuất Bản Trẻ', emoji: '📚', bg: '#e0f7fa', price: 89000, originalPrice: 150000, discountPct: 41, rating: 4.9, sold: 7200, location: 'Hà Nội' },
    { id: 112, name: 'Đèn LED Để Bàn Học Thông Minh Chống Cận', emoji: '💡', bg: '#fffde7', price: 299000, originalPrice: 590000, discountPct: 49, rating: 4.7, sold: 1340, location: 'TP. HCM' },
    { id: 113, name: 'Váy Đầm Nữ Hoa Nhí Chiffon Dáng A Dịu Dàng', emoji: '👗', bg: '#fce4ec', price: 199000, originalPrice: 450000, discountPct: 56, rating: 4.8, sold: 4100, location: 'Hà Nội' },
    { id: 114, name: 'Máy Pha Cà Phê Espresso Delonghi Dedica', emoji: '☕', bg: '#efebe9', price: 4500000, originalPrice: 6900000, discountPct: 35, rating: 4.8, sold: 380, location: 'TP. HCM' },
    { id: 115, name: 'Loa Bluetooth Portable JBL Charge 5', emoji: '🔊', bg: '#e8eaf6', price: 2990000, originalPrice: 4500000, discountPct: 34, rating: 4.9, sold: 560, location: 'Hà Nội' },
    { id: 116, name: 'Mặt Nạ Dưỡng Ẩm Mediheal N.M.F Aquaring 10 miếng', emoji: '😷', bg: '#e0f7fa', price: 149000, originalPrice: 250000, discountPct: 40, rating: 4.8, sold: 9800, location: 'TP. HCM' },
    { id: 117, name: 'Quần Jeans Nam Skinny Stretch Màu Xanh Đậm', emoji: '👖', bg: '#e3f2fd', price: 349000, originalPrice: 690000, discountPct: 49, rating: 4.6, sold: 2100, location: 'Đà Nẵng' },
    { id: 118, name: 'Robot Hút Bụi Thông Minh Xiaomi S10+', emoji: '🤖', bg: '#f1f8e9', price: 3490000, originalPrice: 6500000, discountPct: 46, rating: 4.7, sold: 450, location: 'TP. HCM' },
    { id: 119, name: 'Bàn Phím Cơ Gaming AKKO 3087 RGB', emoji: '⌨️', bg: '#e8f4fd', price: 990000, originalPrice: 1890000, discountPct: 48, rating: 4.8, sold: 1200, location: 'Hà Nội' },
    { id: 120, name: 'Son Môi Lì MAC Matte Lipstick 3g Nhiều Màu', emoji: '💄', bg: '#fce4ec', price: 680000, originalPrice: 950000, discountPct: 28, rating: 4.9, sold: 6700, location: 'TP. HCM' },
    { id: 121, name: 'Đồ Chơi LEGO Classic Xếp Hình Sáng Tạo 1500 chi tiết', emoji: '🧱', bg: '#fff8e1', price: 790000, originalPrice: 1300000, discountPct: 39, rating: 4.9, sold: 890, location: 'Hà Nội' },
    { id: 122, name: 'Kính Râm Nam Nữ Chống UV400 Thời Trang Hàn', emoji: '🕶️', bg: '#f3e5f5', price: 180000, originalPrice: 390000, discountPct: 54, rating: 4.6, sold: 3200, location: 'TP. HCM' },
    { id: 123, name: 'Máy Tính Bảng Xiaomi Pad 6 128GB WiFi', emoji: '📱', bg: '#e8eaf6', price: 7490000, originalPrice: 10990000, discountPct: 32, rating: 4.7, sold: 340, location: 'Hà Nội' },
    { id: 124, name: 'Bộ Nồi Inox 3 Chiếc Cao Cấp Chính Hãng Sunhouse', emoji: '🍲', bg: '#e8f5e9', price: 450000, originalPrice: 890000, discountPct: 49, rating: 4.7, sold: 1800, location: 'TP. HCM' },
    { id: 125, name: 'Quạt Điều Hòa Hơi Nước Di Động Tiết Kiệm Điện', emoji: '❄️', bg: '#e0f7fa', price: 1290000, originalPrice: 2490000, discountPct: 48, rating: 4.5, sold: 760, location: 'Đà Nẵng' },
    { id: 126, name: 'Serum Vitamin C Klairs Freshly Juiced 35ml', emoji: '🧪', bg: '#fffde7', price: 490000, originalPrice: 780000, discountPct: 37, rating: 4.9, sold: 4500, location: 'TP. HCM' },
    { id: 127, name: 'Giá Đỡ Điện Thoại Xe Máy Từ Tính Chắc Chắn', emoji: '📍', bg: '#efebe9', price: 89000, originalPrice: 190000, discountPct: 53, rating: 4.7, sold: 8900, location: 'Hà Nội' },
    { id: 128, name: 'Vali Kéo Du Lịch 24 inch Nhựa ABS Chắc Chắn', emoji: '🧳', bg: '#e3f2fd', price: 890000, originalPrice: 1890000, discountPct: 53, rating: 4.8, sold: 1200, location: 'TP. HCM' },
    { id: 129, name: 'Protein Whey Tăng Cơ Optimum Nutrition 2kg', emoji: '💪', bg: '#f1f8e9', price: 1290000, originalPrice: 2100000, discountPct: 39, rating: 4.8, sold: 950, location: 'Hà Nội' },
    { id: 130, name: 'Áo Khoác Bomber Nữ Thêu Hoa Mùa Thu Đông', emoji: '🧥', bg: '#fce4ec', price: 390000, originalPrice: 790000, discountPct: 51, rating: 4.7, sold: 2300, location: 'Hà Nội' },
];

function formatPrice(price: number): string {
    return price.toLocaleString('vi-VN') + 'đ';
}

function formatSold(n: number): string {
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    return String(n);
}

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    style={{
                        width: '10px',
                        height: '10px',
                        color: i <= Math.round(rating) ? '#f69a28' : '#e0e0e0',
                    }}
                />
            ))}
        </div>
    );
}

const ProductGrid: React.FC = () => {
    return (
        <div id="product-grid-section">
            <div
                className="grid"
                style={{
                    gridTemplateColumns: 'repeat(6, 1fr)',
                    gap: '8px',
                }}
            >
                {mockProducts.map((product) => (
                    <Link
                        href={`/product/${product.id}`}
                        key={product.id}
                        id={`product-${product.id}`}
                        className="product-card bg-white rounded-sm overflow-hidden flex flex-col cursor-pointer"
                        style={{
                            textDecoration: 'none',
                            boxShadow: '0 1px 4px 0 rgba(0,0,0,0.07)',
                        }}
                    >
                        {/* Product Image */}
                        <div
                            className="relative overflow-hidden"
                            style={{
                                aspectRatio: '1',
                                background: product.bg,
                                flexShrink: 0,
                            }}
                        >
                            <div className="flex items-center justify-center h-full text-5xl group-hover:scale-105 transition-transform duration-200">
                                {product.emoji}
                            </div>

                            {/* Discount Badge */}
                            {product.discountPct > 0 && (
                                <div
                                    className="absolute top-1 right-1 flex items-center justify-center rounded-sm px-1"
                                    style={{
                                        background: '#ee4d2d',
                                        minWidth: '34px',
                                        height: '18px',
                                    }}
                                >
                                    <span style={{ fontSize: '11px', color: 'white', fontWeight: 700 }}>
                                        -{product.discountPct}%
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Product Info */}
                        <div className="p-2 flex flex-col gap-1 flex-1">
                            <p
                                className="line-clamp-2"
                                style={{ fontSize: '13px', color: '#333', lineHeight: '1.4', minHeight: '36px' }}
                            >
                                {product.name}
                            </p>

                            {/* Price */}
                            <div className="flex items-baseline gap-1 flex-wrap mt-0.5">
                                <span style={{ fontSize: '14px', color: '#ee4d2d', fontWeight: 600 }}>
                                    {formatPrice(product.price)}
                                </span>
                                {product.originalPrice > product.price && (
                                    <span
                                        className="line-through"
                                        style={{ fontSize: '11px', color: '#9e9e9e' }}
                                    >
                                        {formatPrice(product.originalPrice)}
                                    </span>
                                )}
                            </div>

                            {/* Rating + Sold + Location */}
                            <div className="flex items-center justify-between mt-auto pt-1">
                                <div className="flex items-center gap-1">
                                    <StarRating rating={product.rating} />
                                    <span style={{ fontSize: '11px', color: '#757575' }}>
                                        {product.rating}
                                    </span>
                                </div>
                                <span style={{ fontSize: '11px', color: '#757575' }}>
                                    Đã bán {formatSold(product.sold)}
                                </span>
                            </div>

                            <div className="flex items-center gap-1">
                                <FontAwesomeIcon
                                    icon={faMapMarkerAlt}
                                    style={{ width: '10px', height: '10px', color: '#9e9e9e' }}
                                />
                                <span style={{ fontSize: '11px', color: '#9e9e9e' }}>
                                    {product.location}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
