import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import CategoriesSlider from "../components/CategoriesSlider";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductGrid />
      <CategoriesSlider />
      <Footer />
    </div>
  );
};

export default Home;