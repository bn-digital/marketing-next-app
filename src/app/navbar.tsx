import Link from 'next/link';
import {routes} from "@/app/routes";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={routes.home}>
          <span className="font-bold text-xl cursor-pointer">MyApp</span>
        </Link>
        <div className="space-x-4">
          <Link
            href={routes.products}
            className="text-gray-700 hover:text-gray-900"
          >
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
