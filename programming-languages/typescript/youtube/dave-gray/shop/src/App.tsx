

import { useState } from "react"
import { Cart } from "./components/Cart.jsx"
import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { ProductsList } from "./components/ProductsList.jsx"


export default function App() {
		const [cartView, setCartView] = useState<boolean>(false)

		const pageContent = cartView ? <Cart /> : <ProductsList />
		return (
			<>
				<Header cartView={cartView} setCartView={setCartView}/>
				{ pageContent }
				{/* <Foooter cartView={cartView} /> */}
			</>
		)
}

