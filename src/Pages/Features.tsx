import React from "react";
import feature from "../Data/feature.json";
import { GoArrowRight } from "react-icons/go";
import { FaStar } from "react-icons/fa";

const Features = () => {
  return (
    <section className="contain px-4 py-16">
      <div className="flex justify-between flex-col md:flex-row mb-12">
        <h2 className="text-xl lg:text-4xl">Featured Properties</h2>
        <h6 className="flex items-center text-brand_neutral-200">
          See all <GoArrowRight />
        </h6>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {feature.map((item) => {
          return (
            <div key={item.id} className="relative">
              <img
                src={item.cover}
                alt="feature"
                width={100}
                height={100}
                className="w-[400px] h-[600px] rounded-[20px]"
              />
              <aside className="flex items-center justify-between absolute bg-white rounded-[10px] py-2 px-5 m-2 right-0 left-0 bottom-2">
                <div>
                  <p className="text-xl font-bold mb-1"> {item.name} </p>
                  <p> {item.location} </p>
                </div>
                <p className="flex items-center gap-3">
                  <FaStar className="text-brand_primary-150" />
                  <FaStar className="text-brand_primary-150" />
                  <FaStar className="text-brand_primary-150" />
                </p>
              </aside>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
