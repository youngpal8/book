import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* The Outlet component renders the matched child route */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;