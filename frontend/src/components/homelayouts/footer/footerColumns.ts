import {
    faFacebook,
    faInstagram,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const footerColumns = [
    {
        title: 'Chăm sóc khách hàng',
        links: [
            { label: 'Trung tâm trợ giúp', href: '#' },
            { label: 'Shopee Blog', href: '#' },
            { label: 'Shopee Mall', href: '#' },
            { label: 'Hướng dẫn mua hàng', href: '#' },
            { label: 'Hướng dẫn bán hàng', href: '#' },
            { label: 'Thanh toán', href: '#' },
            { label: 'Shopee Xu & Voucher', href: '#' },
            { label: 'Vận chuyển', href: '#' },
            { label: 'Trả hàng và hoàn tiền', href: '#' },
            { label: 'Chăm sóc khách hàng', href: '#' },
            { label: 'Chính sách bảo hành', href: '#' },
        ],
    },
    {
        title: 'Về Shopee',
        links: [
            { label: 'Giới thiệu về Shopee Việt Nam', href: '#' },
            { label: 'Tuyển dụng', href: '#' },
            { label: 'Điều khoản Shopee', href: '#' },
            { label: 'Chính sách bảo mật', href: '#' },
            { label: 'Chính hãng', href: '#' },
            { label: 'Kênh người bán', href: '#' },
            { label: 'Flash Sale', href: '#' },
            { label: 'Chương trình tiếp thị liên kết', href: '#' },
            { label: 'Liên hệ với truyền thông', href: '#' },
        ],
    },
    {
        title: 'Thanh toán',
        items: [
            { alt: 'Visa', color: '#1a1f71', text: 'VISA' },
            { alt: 'Mastercard', color: '#eb001b', text: 'MC' },
            { alt: 'JCB', color: '#003087', text: 'JCB' },
            { alt: 'COD', color: '#ee4d2d', text: 'COD' },
            { alt: 'Momo', color: '#ae2070', text: 'MoMo' },
            { alt: 'ZaloPay', color: '#006ee9', text: 'ZaloPay' },
        ],
        isPayment: true,
    },
    {
        title: 'Đơn vị vận chuyển',
        items: [
            { alt: 'SPX Express', color: '#ee4d2d', text: 'SPX' },
            { alt: 'GHN', color: '#f62217', text: 'GHN' },
            { alt: 'GHTK', color: '#008000', text: 'GHTK' },
            { alt: 'J&T', color: '#cc0000', text: 'J&T' },
            { alt: 'Ninja Van', color: '#cc0000', text: 'Ninja' },
        ],
        isPayment: true,
    },
    {
        title: 'Theo dõi chúng tôi trên',
        isSocial: true,
    },
];

const socialLinks = [
    {
        icon: faFacebook,
        label: 'Facebook',
        href: 'https://www.facebook.com/shopeecareers.vn',
        color: '#1877f2',
    },
    {
        icon: faInstagram,
        label: 'Instagram',
        href: 'https://www.instagram.com/Shopee_VN',
        color: '#e1306c',
    },
    {
        icon: faLinkedin,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/shopee/',
        color: '#0077b5',
    },
];

const policies = [
    { title: 'Chính sách bảo mật' },
    { title: 'Quy chế hoạt động' },
    { title: 'Chính sách vận chuyển' },
    { title: 'Chính sách trả hàng & hoàn tiền' },
];

export { footerColumns, socialLinks, policies };
