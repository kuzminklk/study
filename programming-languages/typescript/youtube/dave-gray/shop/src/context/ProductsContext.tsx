



/* 
Purpose of this part of program:
 - Fetch data (products) and set in state
 - Create context for it
 - Create provider for context
*/




import { createContext, useState, useEffect, useContext, type ReactElement } from "react"



// ————————— Products Context And Provider For —————————

// ——— Types ———

export type ProductType = {
	sku: string,
	name: string,
	price: number
}

export type UseProductsContextType = { products: ProductType[] }

export type ChildrenType = { children?: ReactElement | ReactElement[] }


// ——— Constants ———

const CONTEXT_INITIAL_STATE: 	UseProductsContextType = { products: []}

// From shop/data/products.json. Don't fetch for study purposes
const PRODUCT_INITIAL_STATE: ProductType[] = []


// ——— Context ———

export const ProductsContext = createContext<UseProductsContextType>(CONTEXT_INITIAL_STATE)


// ——— Context Provider ———

export function ProductsContextProvider({ children }: ChildrenType): ReactElement {
	const [products, setProducts] = useState<ProductType[]>(PRODUCT_INITIAL_STATE)

	/* Fetch the data
	Dave Gray's implementation via chaining */
	useEffect(() => {
		async function fetchProducts(): Promise<ProductType[]> {
			const data = await fetch("http://localhost:3500/products")
			.then(response => response.json())
			.catch(error => console.error(error))

			return data
		}

		fetchProducts().then(products => setProducts(products))
	}, [])

	// GitHub Copilot (Claude Haiky 3.5) version via awaits
	/* 	useEffect(() => {
		async function fetchProducts(): Promise<void> {
			try {
				const response = await fetch("http://localhost:3500/products")
				if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
				
				const data: ProductType[] = await response.json()
				setProducts(data)
			} catch (error) {
				console.error("Failed to fetch products:", error)
			}
		}

		fetchProducts()
	}, []) */

	return (
		<ProductsContext.Provider value={{ products }}>
			{ children }
		</ProductsContext.Provider>
	)
}


// ——— Custom Hook For Quick Context Setup ———

export function useProducts(): UseProductsContextType {
	return useContext(ProductsContext)
}