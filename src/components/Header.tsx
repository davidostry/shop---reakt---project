import { Link } from "react-router";
import { useFavoritesStore } from "../store/favoritesStore";

export default function Header() {
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <header className="bg-purple-600 text-white px-6 py-4">
      <nav className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Mini Shop
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className="hover:underline">
            Products
          </Link>

          <Link to="/favorites" className="hover:underline">
            Favorites ({favorites.length})
          </Link>
        </div>
      </nav>
    </header>
  );
}