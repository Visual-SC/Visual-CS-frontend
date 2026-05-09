import React from "react";
import { Outlet } from "react-router-dom";
import CategoriesAside from "../../components/CategoriesAside/CategoriesAside";
import ProductsByCategoryGrid from "../../components/ProductsByCategoryGrid/ProductsByCategoryGrid";
import CategoriesTabletAside from "../../components/CategoriesTabletAside/CategoriesTabletAside";

const Home: React.FC = () => {
  return (
    <main className="p-4 bg-white text-black z-0 ">
      <section className="grid max-tablet-large:flex max-tablet-large:flex-col grid-cols-[28%_72%]">
        <CategoriesTabletAside />
        <CategoriesAside />
        <ProductsByCategoryGrid />
      </section>
      <Outlet />
    </main>
  );
};

export default Home;