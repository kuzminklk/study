

import { useCart } from "../context/CartContext.jsx"
import { useProducts } from "../context/ProductsContext.jsx"

import { Product } from "./Product.tsx"


export function ProductsList() {
	
	const { dispatch, cart } = useCart()
	const { products } = useProducts()

	return (
		<main>
			{
				products.map(product => {
					return (
						<Product 
							key={product.sku}
							product={product}
							dispatch={dispatch}
						/>
					)
				})
			}
		</main>
	)
}