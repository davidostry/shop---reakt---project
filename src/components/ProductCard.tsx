import { Link } from "react-router"
import type { Product } from "../types/product"
import useProduct from "../store/favoritesStore"

type ProductProps = {
    product: Product
}

export default function ProductCard({product} : ProductProps) {
    
    const {addFavorite, removeFavorite }= useProduct


    return (
        <div>
            <img
            src= {product.image}
            alt= {product.title}
            />
            <h2>{product.title}</h2>
        </div>
    );
}
