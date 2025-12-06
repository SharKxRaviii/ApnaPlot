import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "./ui/toaster";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50/50">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
      <ScrollRestoration />
    </div>
  );
};

export default Layout;