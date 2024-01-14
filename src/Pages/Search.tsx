import React from "react";
import BrandInput from "../Component/BrandInput";
import Brandbutton from "../Component/Brandbutton";

const Search = () => {
  return (
    <section
      className="flex items-center justify-center relative translate-y-[-50%]"
      id="search"
    >
      <div className="bg-white p-5 rounded-2xl flex items-center justify-center">
        <div className="border border-brand_neutral-150 rounded-xl p-6 flex flex-col gap-7 lg:flex-row">
          <BrandInput type={"text"} placeholder={"All Cities"} name={"all"} />
          <BrandInput
            type={"text"}
            placeholder={"Apartment"}
            name={"apartment"}
          />
          <BrandInput
            type={"text"}
            placeholder={"Enter a city"}
            name={"city"}
          />
          <Brandbutton name="Search" />
        </div>
      </div>
    </section>
  );
};

export default Search;
