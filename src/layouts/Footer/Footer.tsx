import React from "react";
import type { FooterProps } from "./types";
import { FooterData } from "./data";

const Footer: React.FC<FooterProps> = ({ copyright, links }) => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <p className="text-sm">{copyright}</p>
      <ul className="flex space-x-4">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-blue-400 hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <ul className="mt-4">
        {FooterData.map((item, index) => (
          <li key={index}>
            <a href={item.href} className="text-blue-400 hover:underline">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;