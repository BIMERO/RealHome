import React from "react";
import Brandbutton from "../Component/Brandbutton";

const Hero = () => {
  return (
    <section
      className="h-fit min-h-fit py-[100px] pb-64 bg-heroBg bg-no-repeat bg-right bg-brand_primary-100"
      id="home"
    >
      <div className="contain h-full px-4">
        <div className="flex flex-col items-start justify-center h-full lg:w-1/2">
          <div className="hero-text">
            <h1 className="text-xl lg:text-4xl mb-4">
              Embark on Your Journey Towards{" "}
              <span className="text-brand_primary-150">
                Extraordinary Living.
              </span>
            </h1>
            <p className="mb-16 text-base lg:text-2xl">
              Transforming Your Vision into Reality as we help you find your
              perfect home.
            </p>
          </div>
          <div className="flex items-center gap-6 cta-button">
            <Brandbutton
              name="explore properties"
              className="py-2 px-4 text-sm lg:py-4"
            />
            <button className="bg-white text-brand_primary-150 border-2 border-brand_primary-150 rounded-full text-sm py-2 px-5 lg:text-base lg:py-4 lg:px-10">
              <h6>Contact Us</h6>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
