import React from 'react';

const NavigationTabs = () => {
  const tabs = ["All", "Shirts", "Stickers"];

  return (
    <nav className="bg-gray-50 py-4">
      <div className="container mx-auto flex justify-center space-x-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className="px-6 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition duration-300"
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavigationTabs;