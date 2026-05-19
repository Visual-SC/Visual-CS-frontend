import React from "react";
import { Outlet } from "react-router-dom";
import CategoriesAside from "../../components/CategoriesAside/CategoriesAside";
import ProductsByCategoryGrid from "../../components/ProductsByCategoryGrid/ProductsByCategoryGrid";
import CategoriesTabletAside from "../../components/CategoriesTabletAside/CategoriesTabletAside";

const Home: React.FC = () => {
  return (
    <main className="p-2 bg-white text-black z-0 ">
      <section className="grid max-tablet-large:flex max-tablet-large:flex-col grid-cols-[254px_1fr_254px] gap-4">
        <CategoriesTabletAside />
        <CategoriesAside />
        <ProductsByCategoryGrid />
        <article className="flex flex-col">
          <h1 className="text-center font-antonio text-h3-24 drop-shadow-[0_2px_2px_rgba(0,0,0,0.51)] text-glacier-blue">SUGERIDO DE LA SEMANA</h1>
        </article>
      </section>
      <Outlet />
    </main>
  );
};

export default Home;