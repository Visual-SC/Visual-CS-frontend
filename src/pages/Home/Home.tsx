import React from "react";
import { Outlet } from "react-router-dom";
import CategoriesAside from "../../components/CategoriesAside/CategoriesAside";
import ProductsByCategoryGrid from "../../components/ProductsByCategoryGrid/ProductsByCategoryGrid";

const Home: React.FC = () => {
  return (
    <main className="p-4 bg-white text-black z-0">
     <section className="grid grid-cols-[351px_72%]">
       <CategoriesAside />
       <ProductsByCategoryGrid/>
     </section>
      <Outlet />
    </main>
  );
};

export default Home;