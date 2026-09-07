import { Link } from "react-router";
import type { Product } from "../types/product";
import { useProductsStore } from "../store/favoritesStore";
import "./ProductCard.css";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const addFavorite = useProductsStore(
    (state) => state.addFavorite
  );

  const removeFavorite = useProductsStore(
    (state) => state.removeFavorite
  );

  const favorites = useProductsStore(
    (state) => state.favorites
  );

  const favorite = favorites.some(
    (item) => item.id === product.id
  );

  function handleFavorite() {
    if (favorite) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  }

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
      />

      <h2>{product.title}</h2>

      <p>${product.price}</p>

      <p>{product.category}</p>

      <button className="buttonCard" onClick={handleFavorite}>
        {favorite
          ? "Remove from favorites"
          : "Add to favorites"}
      </button>

      <Link to={`/products/${product.id}`}>
        <button className="buttonCard">View details</button>
      </Link>
    </div>
  );
}