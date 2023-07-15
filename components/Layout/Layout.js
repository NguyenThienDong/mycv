import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Dial from "./Dial";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Dial />
      <Footer />
    </>
  );
};

export default Layout;
