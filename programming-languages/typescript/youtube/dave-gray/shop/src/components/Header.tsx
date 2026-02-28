

import { useCart } from "../context/CartContext.jsx"


type PropsType = {
	cartView: boolean,
	setCartView: React.Dispatch<React.SetStateAction<boolean>>
}

export function Header({ cartView, setCartView }: PropsType) {

	const { totalItems, totalPrice } = useCart()

	return (
		<header>
			<h1>Inanna Inc.</h1>
			<section>
				<p>Total items: {totalItems}</p>
				<p>Total price: {totalPrice}</p>
			</section>
			<nav>
				<button onClick={() => setCartView(!cartView)}>
					{ cartView ? "View Cart" : "View Products" }
				</button>
			</nav>
		</header>
	)
}