

import { useContext } from "react"
import DataContext from "./context/DataContext"


export default function Header() {

	const { title } = useContext(DataContext);

	return (
		<header>
			<h1>{title}</h1>
		</header>
	)
}