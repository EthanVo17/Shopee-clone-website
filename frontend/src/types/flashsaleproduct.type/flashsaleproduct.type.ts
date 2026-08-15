interface FlashProduct {
    id: number;
    name: string;
    emoji: string;
    bg: string;
    originalPrice: number;
    salePrice: number;
    discountPct: number;
    soldPct: number;
    location: string;
}

export type { FlashProduct };
