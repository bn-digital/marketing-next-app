import {Product} from "@/app/types/product";

export const getAllProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products`);
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export const getProduct = async (id: string): Promise<Product | undefined> => {
  const products = await getAllProducts();
  return products.find((p) => p.id === id);
}
