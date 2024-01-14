import React from "react";

interface BrandbuttonProps {
  name: string;
  className?: string;
}

const Brandbutton: React.FC<BrandbuttonProps> = ({ name, className }) => {
  return (
    <button
      className={`bg-brand_primary-150 text-white py-2 px-10 rounded-full border-b-[6px] border-black capitalize lg:text-base ${className}`}
    >
      <h6>{name}</h6>
    </button>
  );
};

export default Brandbutton;
