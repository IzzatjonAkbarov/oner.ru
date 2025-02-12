import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <div>
      <header className="bg-white shadow-xs sticky top-0 z-50">
        <Header />
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-[#2f2b4a]">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
