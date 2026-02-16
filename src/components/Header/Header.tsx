import { Link } from "react-router-dom";
import { headerData } from "./data";

export default function Header() {
  return (
    <header className="h-20 text-mont-h4-20 font-semibold items-center text-black">
      <ul className="flex items-center">
        { headerData.map((link,index)=>{
            if(index===0 && 'img' in link){
              return <li className="h-full list-none inline-flex w-[142px]" key={index}>
                <Link to={link.link} className="h-full no-underline">
                  <img className="w-full h-full" src={link.img} alt="rodson-logo"  />
                </Link>
              </li>
            }
            if('text' in link) {
              return <li className="h-full list-none inline-flex items-center ml-4" key={index}>
                <Link to={link.link} className="no-underline">{link.text}</Link>
              </li>
            }
        })}        
      </ul>
    </header>
  )
}