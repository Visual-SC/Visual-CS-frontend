import React from "react";
import { Outlet } from "react-router-dom";
import CategoriesAside from "../../components/CategoriesAside/CategoriesAside";
import ProductsByCategoryGrid from "../../components/ProductsByCategoryGrid/ProductsByCategoryGrid";

const Home: React.FC = () => {
  return (
    <main className="p-6 bg-white text-black">
     <section className="grid grid-cols-[351px_72%]">
       <CategoriesAside />
       <ProductsByCategoryGrid/>
     </section>
      <Outlet />
    </main>
  );
};

export default Home;