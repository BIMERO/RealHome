import React from "react";

interface BrandInputProps {
  className?: string;
  placeholder: string;
  name: string;
  type: string;
}

const BrandInput: React.FC<BrandInputProps> = ({
  className,
  placeholder,
  name,
  type,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`border-b-2 outline-0 focus:border-brand_neutral-100 ${className}`}
    />
  );
};

export default BrandInput;
