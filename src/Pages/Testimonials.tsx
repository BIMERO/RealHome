import React, { useEffect, useState } from "react";
import testimonies from "../Data/testimonies.json";

interface customers {
  id: number;
  cover: string;
  testimony: string;
  name: string;
  profession: string;
}

const Testimonials = () => {
  const [indexValue, setIndexValue] = useState(0);
  const slides: customers[] = testimonies; // Use the imported JSON data
  let slideInterval: NodeJS.Timeout;

  useEffect(() => {
    console.log("useEffect is running");
    const slideInterval = setInterval(() => {
      showImg();
    }, 3000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  const btnSlide = (index: number) => {
    clearInterval(slideInterval);
    setIndexValue(index);
  };

  const showImg = () => {
    setIndexValue((prevIndex) =>
      prevIndex >= slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className=" relative bg-brand_primary-100">
      <div className="contain py-16 px-4">
        <h2 className="text-xl font-medium mb-11 lg:text-4xl">
          What our clients are saying
        </h2>
        <div>
          {testimonies.map((item, i) => {
            return (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-2 items-center bg-brand_neutral-300 overflow-hidden rounded-[20px] ${
                  item.id === indexValue + 1 ? "visible" : "hidden"
                }`}
                style={{
                  animation: `${
                    item.id === indexValue + 1 ? "slideIn 0.5s ease-in-out" : ""
                  }`,
                  animationDelay: `${i * 0.5}s`, // Adjust the delay for each slide
                }}
              >
                <div
                  className="bg-cover bg-center h-64 md:h-full rounded-[20px]"
                  style={{
                    backgroundImage: `url(${item.cover})`,
                    width: "100%",
                  }}
                ></div>

                <div className="p-4 md:p-11">
                  <p className="text-xl leading-10 mb-7">{item.testimony}</p>
                  <p className="text-base lg:text-xl font-semibold">
                    {item.name}
                  </p>
                  <p className="text-black"> {item.profession} </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center mt-12">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => btnSlide(i)}
              className={`h-3 rounded-full bg-brand_neutral-350 mx-1 inline-block cursor-pointer ${
                i === indexValue
                  ? "bg-brand_primary-150 w-24 transition-all duration-300"
                  : "w-8"
              }`}
              style={{
                left: `${i * 0.5}rem`, // Adjust the multiplier for the desired spacing
              }}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
