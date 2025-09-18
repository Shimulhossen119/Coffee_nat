
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import AppStor from "./components/AppStor/AppStor";
import Testimonial from "./components/Testionial/Testimonial";
import Footer from "./components/Footer/Footer";
import AllProduct from "./components/AllProduct/AllProduct";
import Navbar from "./components/Navbar/Navbar"

const App = () => {
  useEffect(() => {
  AOS.init({
    offset: 100,
    duration: 700,
    easing: "ease-in",
    delay: 100,
  });
});
  return (
    <div>
    <Navbar/>
    <Home />
      <Services />
      <Banner />
      <AllProduct/>
      <AppStor />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
