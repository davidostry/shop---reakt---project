import ProductCard from "../components/ProductCard";
import { useProductsStore } from "../store/favoritesStore";

export default function FavoritesPage() {
  const favorites = useProductsStore(
    (state) => state.favorites
  );

  return (
    <div>
      <h1>Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <div className="products">
          {favorites.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
}