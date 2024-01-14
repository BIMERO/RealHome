import React from "react";
import "./App.css";
import { Layout } from "./Layout/Layout";
import Hero from "./Pages/Hero";
import Search from "./Pages/Search";
import About from "./Pages/About";
import Offer from "./Pages/Offer";
import Services from "./Pages/Services";
import Testimonials from "./Pages/Testimonials";
import Features from "./Pages/Features";

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <Search />
        <Services />
        <About />
        <Offer />
        <Features />
        <Testimonials />
      </Layout>
    </div>
  );
}

export default App;
