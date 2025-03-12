import { useState } from "react";
import { Menu, X, Search, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-3 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          <Menu size={24} className="text-gray-700" />
        </button>

        {/* Logo */}
        <div className="text-xl font-bold flex items-center space-x-2">
          <span className="text-gray-900">STORE</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-gray-900">All</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Categories</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Selected</a>
        </nav>

        {/* Search Bar */}
        <div className="relative w-1/3 hidden md:block">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
        </div>

        {/* Cart Icon */}
        <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100">
          <ShoppingCart size={20} className="text-gray-700" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-6 flex flex-col"
        >
          <button onClick={() => setIsOpen(false)} className="mb-4 self-end">
            <X size={24} className="text-gray-700" />
          </button>
          <nav className="flex flex-col space-y-4">
                    {/* Logo */}
        <div className="text-xl font-bold flex items-center space-x-2">
          <span className="text-gray-900">STORE</span>
        </div>
            <a href="#" className="text-gray-700 hover:text-gray-900">All</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">All</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">All</a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
