import React from "react";
//import type { HomeProps } from "./types";
import { HomeData } from "./data";
import { Outlet } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <main className="p-6 bg-white text-black">
      <h1 className="text-3xl font-bold text-center">Hola Mundo</h1>
      <section className="mt-4">
        {HomeData.map((item) => (
          <div key={item.id} className="p-4 bg-white shadow-md rounded-md mb-4">
            <p>{item.description}</p>
          </div>
        ))}
      </section>
      <Outlet />
    </main>
  );
};

export default Home;