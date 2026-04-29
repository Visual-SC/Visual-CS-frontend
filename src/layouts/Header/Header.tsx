import React from "react";
import type { HeaderProps } from "./types";
import { HeaderData } from "./data";

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      {subtitle && <h2 className="text-lg">{subtitle}</h2>}
      <ul>
        {HeaderData.map((item) => (
          <li key={item.id} className="mt-2">
            {item.content}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;