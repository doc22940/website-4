import React from "react";

import Header from "./header";

import "../assets/theme-desktop-app.scss";
import Footer from "./footer";
import JoinSlack from "./JoinSlack";

const Layout = ({ location, title, children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <JoinSlack />
      <Footer />
    </>
  );
};

export default Layout;
