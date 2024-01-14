import React from "react";
import offers from "../Data/offers.json";
import { GoArrowRight } from "react-icons/go";

const Offer = () => {
  return (
    <section className="contain px-4">
      <h2 className="text-xl lg:text-4xl font-medium mb-12">
        Services we offer you
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {offers.map((item) => {
          return (
            <div
              key={item.id}
              className="group border border-brand_neutral-250 p-7 rounded-2xl hover:bg-brand_primary-200"
            >
              <figure className="bg-brand_primary-250 rounded-[10px] mb-10 py-5 px-6 w-1/3 md:w-1/4 group-hover:bg-white">
                <img
                  src="/images/eye.svg"
                  alt="svg"
                  width={100}
                  height={100}
                  className="w-full"
                />
              </figure>

              <h3 className="text-xl"> {item.offer} </h3>
              <p className="text-brand_neutral-200 my-7"> {item.para} </p>
              <p className="flex items-center gap-4 text-brand_neutral-200">
                Learn more <GoArrowRight />{" "}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Offer;
