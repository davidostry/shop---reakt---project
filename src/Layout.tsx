import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <header className="header">
        <h2>Mini Shop</h2>

        <nav>
          <Link to="/">Products</Link>

          <Link to="/favorites">
            Favorites
          </Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Mini Shop</p>
      </footer>
    </>
  );
}