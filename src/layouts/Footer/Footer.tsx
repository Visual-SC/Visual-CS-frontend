import React from "react";
import { Link } from "react-router-dom";


const Footer: React.FC = () => {
  return (
    <footer className="bg-light-blue">
      <ol className="flex justify-center text-p-18 items-center gap-8 py-4 list-none font-semibold">
        <li>
          <Link to="https://www.instagram.com/rodsoncoffee/" target="_blank"  className="inline-flex items-center focus-visible:underline outline-none">
            <img src="/uil_instagram.svg" alt="instagram-de-rodsoncoffee" className="h-6 w-6 mb-1" />
            <span className="ml-2">@rodsoncoffee</span>
          </Link>
        </li>
        <li>
          <Link to="https://wa.me/3016954232" target="_blank" className="inline-flex items-center focus-visible:underline outline-none">
            <img src="/ic_baseline-whatsapp.svg" alt="WhatsApp de rodsoncoffee" className="h-6 w-6 mb-1" />
            <span className="ml-2">3016954232</span>
          </Link>
        </li>
        <li>
          <Link to="https://maps.app.goo.gl/yYhd3MR2j3M4rQJc9" target="_blank" className="inline-flex  items-center focus-visible:underline outline-none">
            <img src="/uil_location-point.svg" alt="Ubicacion de rodson coffee" className="h-6 w-6 mb-1" />
            <span className="ml-2">Carrera 20 53 -35</span>
          </Link>
        </li>
      </ol>
      <section className="grid grid-cols-2 grid-rows-2 gap-6 justify-center items-center py-4 w-fit mx-auto text-p-18 font-semibold">
        <p>Lunes a Sábado</p>
        <p>09:00 a.m. - 07:00 p.m.</p>
        <p>Domingo</p>
        <p>10:00 a.m. - 06:00 p.m.</p>
      </section>
      <h3 className="text-dark-green font-haviland text-center mt-9 text-5xl">Gracias por tu amor al buen café </h3>
      <section>
        <p className="text-center mt-5">Hecho por <Link className="text-dark-green font-semibold" to="https://www.linkedin.com/in/jfranco-webdev/" target="_blank">Juan David Franco</Link> y <Link className="text-dark-green font-semibold" to="https://www.linkedin.com/in/heilenparra/">Heilen Parra Tirado</Link></p>
      </section>
    </footer>
  );
};

export default Footer;