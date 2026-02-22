import { Link } from "react-router-dom"
import type { AsideHeaderProps } from "./types"

const AsideHeader: React.FC<AsideHeaderProps> = ({ asideHeader,toggleAsideHeader }) => {
  return (
    <aside className={`${asideHeader ? 'left-0':'-left-full'} fixed top-0 w-full h-full transition-all duration-500 ease-in-out bg-white horizontal-tablet:hidden 
    z-20 tablet:w-1/2`}>
      <figure className="ml-9 w-28 mt-9">
        <img  className="w-full" src="/public/rodson-logo.png" alt="Rodson Logo"/>
      </figure>
      <ul className="flex flex-col">
        <li className="ml-9 mt-4 text-xl text-mont-p-16 font-semibold">
          <Link className="text-mont-p-16" to="/" onClick={toggleAsideHeader}>MENÚ</Link>
        </li>
        <li className="ml-9 mt-4 text-xl text-mont-p-16 font-semibold">
          <Link className="text-mont-p-16 font-semibold" to="/acerca-de" onClick={toggleAsideHeader}>ACERCA DE</Link>
        </li>
      </ul>
    </aside>
  )
}

export default AsideHeader
