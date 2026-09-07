import { Link, Outlet } from "react-router";
import ThemeToggle from "./components/ThemeToggle";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <>

      <Header />
      <Outlet />
      <Footer />
    </>
  );
}