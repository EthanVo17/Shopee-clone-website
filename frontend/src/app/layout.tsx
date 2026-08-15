import '../libs/fontawesome';
import type { Metadata } from 'next';
import './globals.css';

import Header from '../components/homelayouts/header/Header';
import Footer from '../components/homelayouts/footer/Footer';

export const metadata: Metadata = {
    title: 'Shopee Việt Nam | Mua và Bán Trên Ứng Dụng Di Động Hoặc Website',
    description:
        'Shopee Việt Nam - Mua sắm trực tuyến với hàng triệu sản phẩm đa dạng, giá tốt nhất, giao hàng nhanh chóng. Đặt hàng ngay hôm nay!',
    keywords: ['shopee', 'mua sắm online', 'thương mại điện tử', 'giảm giá'],
    openGraph: {
        title: 'Shopee Việt Nam',
        description: 'Mua sắm trực tuyến với hàng triệu sản phẩm',
        type: 'website',
        locale: 'vi_VN',
    },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html lang="vi" className="h-full">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="flex min-h-full flex flex-col w-full">
                <Header />
                <main className="flex-1 w-full">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
