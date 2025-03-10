import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Navbar from "../components/Navbar";

const MainLayout = ({ children, theme }) => (
  <div
    className={`${
      theme === "light"
        ? "bg-gray-50 text-gray-500"
        : "bg-gray-800 text-gray-200"
    } relative min-h-screen flex flex-col`}
  >
    <Header />
    <Navbar />
    <div className="flex-grow">{children}</div>
    <BackToTop />
    <Footer />
  </div>
);

export default MainLayout;
