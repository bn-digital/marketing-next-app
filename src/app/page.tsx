import Link from 'next/link';
import {routes} from "@/app/routes";
import {Metadata} from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home | My Marketing App',
    description: 'Welcome to My Marketing App!',
  };
}

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Marketing App</h1>
      <p className="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam fuga in ipsa quasi, sed sunt unde. Corporis!
      </p>
      <Link
        href={routes.products}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        View Products
      </Link>
    </main>
  );
}
