import React from "react";
import footer from "../Data/footer.json";
import socials from "../Data/socials.json";

const Footer = () => {
  return (
    <footer className="contain px-4 py-16">
      <div className="flex justify-between gap-5 flex-col lg:flex-row">
        <div>
          <img
            src="/images/logo.svg"
            alt="logo"
            width={200}
            height={100}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-24">
          {footer.map((item) => {
            return (
              <div key={item.id}>
                <h6 className="text-brand_primary-300 mb-8"> {item.header} </h6>
                <ul className="leading-10">
                  <li className="font-medium"> {item.link1} </li>
                  <li className="font-medium"> {item.link2} </li>
                  <li className="font-medium"> {item.link3} </li>
                  <li className="font-medium"> {item.link4} </li>
                </ul>
              </div>
            );
          })}
        </div>
        <div>
          <h6 className="text-brand_primary-300 mb-8">Social</h6>
          {socials.map((item) => {
            return (
              <div key={item.id} className="flex items-center gap-2 mb-3">
                <img
                  src={item.cover}
                  alt="logo"
                  width={200}
                  height={100}
                  className="w-9 h-9"
                />
                <p> {item.name} </p>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
