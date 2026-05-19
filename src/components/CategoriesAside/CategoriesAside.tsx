import React from "react";
import type { CategoriesAsideProps } from "./types";
import { CategoriesAsideData } from "./data";
import { Link } from "react-router-dom";
import { useCategoryAside } from "./useCategoryAside";
import { useGetEvent } from "./useGetEvent";

const CategoriesAside: React.FC<CategoriesAsideProps> = () => {
  //funciones de animación ☕
  const { container, handleClickGSAP } = useCategoryAside();

  const handleClick = (index: number) => {
    handleClickGSAP(index);
  }

  //funciones de llamado para el evento ☕
  const { event } = useGetEvent();
  console.log(event)

  return (
    <aside className="max-tablet-large:hidden flex flex-col gap-2 col-start-1 col-end-2">
      <ul className="flex flex-col" ref={container}>
        {CategoriesAsideData.map((item, index) => (            
              <Link 
                key={index}
                to={`/category/${item.link}/1`} 
                className="relative item block text-sm text-black space-y-8 w-max mt-10 first:mt-0"
                onClick={()=>handleClick(index)}
              >
                <span className="fontA absolute top-0 left-0 right-0 bottom-0">
                  {item.textA}
                </span>
                <span className="fontB absolute top-0 left-0 right-0 bottom-0 opacity-0">
                  {item.textB}
                </span>
              </Link>
          ))}
      </ul>
      <section>
      <figure className="w-68 h-68 rounded-xl mt-12 flex items-end p-2 relative">
          <img src="/event-image.png" alt={event.title} className="w-full h-full object-cover rounded-xl text-white"/>
          <footer className="w-[90%] bg-black/40 absolute bottom-3 left-3 p-2 rounded-b-xl text-white flex flex-col">
            <h3 className="font-haviland text-3xl text-white">{event.title}</h3>
            <p className="text-p-16">
              {new Date(event.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
            <p className="text-p-16">{event.schedule}</p> 
          </footer>
      </figure>
      </section>
    </aside>
  );
};

export default CategoriesAside;

