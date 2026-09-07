import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import type { Product } from "../types/product";
import "../components/ProductCard.css"

export default function ProductDetailsPage() {
  const { id } = useParams();

  const [product, setProduct] =
    useState<Product | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{product.title}</h1>

      <img
        src={product.image}
        alt={product.title}
        width="300"
      />

      <h2>${product.price}</h2>

      <p>{product.description}</p>

      <p>Category: {product.category}</p>

      <Link to="/">
        <button className="buttonCard">Back to products</button>
      </Link>
    </div>
  );
}