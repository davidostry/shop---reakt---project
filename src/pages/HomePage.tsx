import { useState, useEffect, useRef } from 'react'
import { data } from 'react-router'
import type { Product } from '../types/product'
import ProductCard from '../components/ProductCard'

type ProductProps = {
    url: string
}

export default function HomePage({ url }: ProductProps) {

    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")


    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("failed to fetch products")
                }
                return res.json()
            })
            .then((data) => {
                setProducts(data)
            })
            .catch((e) => {
                console.error(e);
            })
            .finally(() => {
                setLoading(false)
            });
    }, [url])

    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
    )

    if (loading) {
        return <h2>loading...</h2>
    }

    return (
        <div className='homePage'>
            <h1>products</h1>

            <input
                type='text'
                placeholder='search products...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='searchInput'
            />
            <div className='productsGrid'>
                {filteredProducts.map((p)=>(
                    <ProductCard
                    key={p.id}
                    product = {p}
                ))}
            </div>
        </div>
    )
}
