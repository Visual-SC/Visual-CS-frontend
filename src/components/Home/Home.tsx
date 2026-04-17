import type { Props } from './types';

const Home = ({ title }: Props) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-xl font-bold">{title}</h1>
    </div>
  );
};

export default Home;