import type { BgScreenProps } from './types';
const BgScreen: React.FC<BgScreenProps> = ({ asideHeader }) => {
  return (
    <div className={`hidden tablet:block z-20 sticky bg-black/40 horizontal-tablet:hidden w-full h-screen ${asideHeader ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      
    </div>
  )
}

export default BgScreen
