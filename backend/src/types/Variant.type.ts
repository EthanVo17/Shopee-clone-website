interface Variant {
  sku: string; //Mã lưu kho duy nhất (Stock Keeping Unit)
  price: number;
  stock: number;
  attributes: {
    key: string;
    value: string;
  }[];
}

export type { Variant };
