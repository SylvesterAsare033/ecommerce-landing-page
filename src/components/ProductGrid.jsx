import React from "react";

const products = [
  { id: 1, name: "Elegant Chair", price: "$199", image: "https://cdn.shopify.com/s/files/1/0070/7032/articles/ecommerce_20platforms_3c2ab809-41ff-4185-9fef-52df34de95e4.png" },
  { id: 2, name: "Modern Lamp", price: "$89", image: "https://cdn.shopify.com/s/files/1/0070/7032/articles/ecommerce_20platforms_3c2ab809-41ff-4185-9fef-52df34de95e4.png" },
  { id: 3, name: "Minimal Desk", price: "$149", image: "https://cdn.shopify.com/s/files/1/0070/7032/articles/ecommerce_20platforms_3c2ab809-41ff-4185-9fef-52df34de95e4.png" },
];

const ProductGrid = () => {
  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Featured Products</h2>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-3 gap-8">
        {/* Featured Product */}
        <div className="col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <img
              src={products[0].image}
              alt={products[0].name}
              className="w-full h-96 object-cover mb-6 rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{products[0].name}</h3>
            <p className="text-gray-600 mb-4">{products[0].price}</p>
            <div className="flex space-x-4">
              <button className="flex items-center justify-center bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                Add to Cart
              </button>
              <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-50 transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                Wishlist
              </button>
              <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-50 transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Quick View
              </button>
            </div>
          </div>
        </div>

        {/* Other Products */}
        <div className="grid gap-8">
          {products.slice(1).map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.price}</p>
              <div className="flex space-x-4">
                <button className="flex items-center justify-center bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </button>
                <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-50 transition duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-50 transition duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden grid grid-cols-1 gap-6">
        {/* Featured Product */}
        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <img
            src={products[0].image}
            alt={products[0].name}
            className="w-full h-48 object-cover mb-4 rounded-lg"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{products[0].name}</h3>
          <p className="text-gray-600 mb-4">{products[0].price}</p>
          <div className="flex space-x-4 justify-center">
            <button className="flex items-center justify-center bg-gray-900 text-white p-2 rounded-lg hover:bg-gray-800 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </button>
            <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-800 p-2 rounded-lg hover:bg-gray-50 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-800 p-2 rounded-lg hover:bg-gray-50 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Other Products */}
        <div className="grid grid-cols-2 gap-4">
          {products.slice(1).map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.price}</p>
              <div className="flex space-x-4 justify-center">
                <button className="flex items-center justify-center bg-gray-900 text-white p-2 rounded-lg hover:bg-gray-800 transition duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </button>
                <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-800 p-2 rounded-lg hover:bg-gray-50 transition duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-800 p-2 rounded-lg hover:bg-gray-50 transition duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;