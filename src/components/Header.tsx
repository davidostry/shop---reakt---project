import { Link } from "react-router";
import { useProductsStore } from "../store/favoritesStore";
import ThemeToggle from "./ThemeToggle";
import "./Header.css";

export default function Header() {
  const favorites = useProductsStore((state) => state.favorites);

  return (
    <header className="header">
      <Link to="/" className="logo">
        Mini Shop
      </Link>

      <nav className="nav">
        <Link to="/" className="nav-link">
          Products
        </Link>

        <Link to="/favorites" className="nav-link">
          Favorites
          <span className="favorites-badge">
            {favorites.length}
          </span>
        </Link>

        <ThemeToggle />
      </nav>
    </header>
  );
}