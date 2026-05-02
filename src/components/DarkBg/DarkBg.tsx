import React from "react";

const DarkBg: React.FC = () => {
  const [bgVisible] = React.useState<boolean>(false);


  if (!bgVisible) return null;

  return (
    <div className="bg-black/25 text-white p-4 rounded fixed top-0 left-0 w-screen h-screen z-10">

    </div>
  );
};

export default DarkBg;