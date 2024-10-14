import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Navbar from "../components/Navbar";
import { Fade } from "react-awesome-reveal";

const MainLayout = ({ children, theme }) => (
  <div
    className={`${
      theme === "light"
        ? "bg-gray-50 text-gray-500"
        : "bg-gray-800 text-gray-200"
    } relative min-h-screen flex flex-col`}
  >
    <Fade>
      <Header />
    </Fade>

    <Fade>
      <Navbar />
    </Fade>

    <div className="flex-grow">{children}</div>
    <BackToTop />
    <Fade>
      <Footer />
    </Fade>
  </div>
);

export default MainLayout;
