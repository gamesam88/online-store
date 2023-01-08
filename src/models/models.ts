export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export interface IcartItem {
  title: string;
  image: string;
  rating: number;
  price: number;
  stock: number;
  description: string;
  discountPercentage: number;
  id: number;
}
