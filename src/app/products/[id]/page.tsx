import {notFound} from 'next/navigation';
import {PageProps} from '../../../../.next/types/app/products/[id]/page';

import {getAllProducts, getProduct} from "../../services/products";
import {Product} from "@/app/types/product";
import {Metadata} from "next";

export async function generateStaticParams() {
  const products: Product[] = await getAllProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const product = await getProduct(params.id);
  if (!product) {
    return {
      title: 'Product not found',
      description: 'This product is not available in the catalog',
    };
  }
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductPage(props: PageProps) {
  const params = await props.params;
  const product: Product | undefined = params?.id ? await getProduct(params.id) : undefined;

  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 object-cover h-auto"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-blue-700 mb-4">
            ${product.price}
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Buy Now
          </button>
        </div>
      </div>
    </main>
  );
}
