

import { type ReactElement } from "react"

import { type ProductType } from "../context/ProductsContext.tsx"
import { type ReducerActionType, REDUCER_ACTION_ENUM } from "../context/CartContext.tsx"


type PropsType = {
	product: ProductType,
	dispatch: React.Dispatch<ReducerActionType>
}


export function Product({ product, dispatch }: PropsType): ReactElement {

	const imageSource: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href

	return (
		<section>
			<h3>{product.name}</h3>
			<img src={imageSource} alt="Photo of the product: the watch"></img>
			<p>
				{
					new Intl.NumberFormat("en-US", { "style":"currency", "currency":"USD"}).format(product.price)
				}
			</p>
			<button onClick={() => {
				dispatch({ type: REDUCER_ACTION_ENUM.ADD, payload: {...product, quantity: 1}})
			}}>
				Add to cart
			</button>
			<form>
				<label htmlFor={`${product.sku}-quantity-form`}>Quantity</label>
				<input type="number" id={`${product.sku}-quantity-form`} onChange={
					(event) => {
						dispatch({ type: REDUCER_ACTION_ENUM.QUANTITY, payload: {...product, quantity: Number(event.target.value)}})
					}
				}></input>
			</form>

		</section>
	)
}