import React, { useEffect, useState } from "react";
import Brandbutton from "../Component/Brandbutton";
import { IoMenu, IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`sticky top-0 left-0 w-full transition-all duration-300 z-10 ${
        isScrolled ? "bg-white shadow-lg" : "bg-brand_primary-100"
      }`}
    >
      <nav className="flex items-center justify-between py-9 px-4 relative contain">
        <img
          src="/images/logo.svg"
          alt="logo"
          width={200}
          height={100}
          className="w-2/4 lg:w-1/5"
        />
        <ul className="hidden lg:flex items-center gap-10 font-semibold">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#properties">Properties</a>
          </li>
          <li>
            <a href="about">About us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <Brandbutton name="Login" />
          </li>
        </ul>
        <button className="lg:hidden" onClick={toggleSidebar}>
          {isOpen ? (
            <IoCloseOutline className="text-3xl" />
          ) : (
            <IoMenu className="text-3xl" />
          )}
        </button>
      </nav>
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-2/3 bg-brand_primary-100 ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-center py-20 px-8 gap-6 font-bold">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#properties">Properties</a>
          </li>
          <li>
            <a href="about">About us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <Brandbutton name="Login" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
