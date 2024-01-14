import React from "react";

const About = () => {
  return (
    <section
      className="contain px-4 py-28 grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
      id="about"
    >
      <div>
        <h2 className="text-xl xl::text-4xl font-medium mb-16">About us</h2>
        <p className="text-base xl::text-lg font-medium mb-11 leading-10 text-brand_neutral-200">
          At realhome, we&apos;re dedicated to redefining the real estate
          experience by prioritizing your aspirations. With over 10 years of
          industry expertise, our mission is to guide you in finding not just a
          property, but a place that resonates with your lifestyle and dreams.
          What sets us apart is our commitment to personalized service, expert
          guidance, and transparent communication throughout your real estate
          journey.
        </p>
        <button className="bg-white text-brand_primary-150 border-2 border-brand_primary-150 rounded-full text-sm py-2 px-5 xl:text-base lg:py-4 lg:px-10">
          <h6>Read more</h6>
        </button>
      </div>
      <img
        src="/images/about.png"
        alt="about-png"
        width={100}
        height={100}
        className="w-full"
      />
    </section>
  );
};

export default About;
