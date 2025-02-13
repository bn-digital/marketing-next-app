import Link from 'next/link';
import {getAllProducts} from "../services/products";
import {Product} from "@/app/types/product";
import {Metadata} from "next";
import {routes} from "@/app/routes";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Products - My App',
    description: 'Explore our product catalog',
  };
}

export default async function ProductsPage() {
  const products: Product[] = await getAllProducts();

  if (!products.length) {
    return <div className="text-center m-20">
      <h1 className="text-2xl font-bold">There are no products found</h1>
    </div>
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <div key={product.id} className="border p-4 rounded hover:shadow">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-40 w-full object-cover mb-2"
            />
            <h2 className="font-semibold text-lg">{product.title}</h2>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <p className="text-blue-500 font-bold my-2">${product.price}</p>
            <Link
              href={`${routes.products}/${product.id}`}
              className="inline-block bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
