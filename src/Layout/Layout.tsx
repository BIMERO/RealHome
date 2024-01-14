import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type AppProps = {
  children: React.ReactNode;
};
export const Layout = ({ children }: AppProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
