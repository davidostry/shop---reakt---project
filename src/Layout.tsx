import { Link, Outlet } from "react-router";
import ThemeToggle from "./components/ThemeToggle";

export default function Layout() {
  return (
    <>
      <header className="header">
        <h1>Mini Shop</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
          <ThemeToggle />
        </nav>
      </header>

      <Outlet />
    </>
  );
}