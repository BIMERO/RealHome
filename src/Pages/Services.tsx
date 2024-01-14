import React from "react";
import services from "../Data/services.json";

const Services = () => {
  return (
    <section className="contain px-4" id="services">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
        {services.map((item) => {
          return (
            <div key={item.id}>
              <aside className="flex items-center gap-7 mb-4">
                <figure className="bg-brand_primary-250 rounded-[10px] py-5 px-6">
                  <img
                    src={item.cover}
                    alt="svg"
                    width={100}
                    height={100}
                    className="w-full"
                  />
                </figure>
                <p className="text-xl font-semibold"> {item.name} </p>
              </aside>
              <p> {item.para} </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
