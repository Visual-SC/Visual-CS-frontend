import { Link } from "react-router-dom";
import { headerData } from "./data";

export default function Header() {
  return (
    <header className="hidden desktop:flex desktop:h-20 w-full">
      <ul className="container w-11/12 mx-auto h-full flex items-center">
      {headerData.map((item, index) => {
        if('img' in item){
          return (
            <li key={index} className={item.className}>
              <Link to={item.link}>
                <img src={item.img} alt="Rodson Logo" className="w-full h-full object-cover"/>
              </Link>
            </li>
          )
        }else{
          return (
            <li key={index} className={item.className}>
              <Link to={item.link} className="block">
                <span className="text-mont-p-16 font-semibold">{item.text}</span>
              </Link>
            </li>
          )
        }})}
      </ul>
    </header>
  )
}