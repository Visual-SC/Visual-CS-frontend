import React from "react";
import { useDarkBg } from "../../utils/useDarkBg";

const DarkBg: React.FC = () => {
  const { bgVisible, cartVisible, productFloatingVisible, closeBg } = useDarkBg();

  if (!bgVisible && !cartVisible && !productFloatingVisible) return null;

  return (
    <div className="bg-black/30 text-white p-4 rounded fixed top-0 left-0 w-screen h-screen z-10" onClick={closeBg}>

    </div>
  );
};

export default DarkBg;