import React from "react";
//import type { HomeProps } from "./types";
import { HomeData } from "./data";
import { Outlet } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <main className="p-6 bg-white text-black">
      <h1 className="text-3xl font-bold text-center">Home</h1>
      <Outlet />
    </main>
  );
};

export default Home;