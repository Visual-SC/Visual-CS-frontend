import React from "react";
import { Outlet } from "react-router-dom";
import CategoriesAside from "../../components/CategoriesAside/CategoriesAside";

const Home: React.FC = () => {
  return (
    <main className="p-6 bg-white text-black">
     <section className="grid grid-cols-[351px_72%]">
       <CategoriesAside />
       <div className="col-start-2 col-end-3">Grid de productos</div>
     </section>
      <Outlet />
    </main>
  );
};

export default Home;