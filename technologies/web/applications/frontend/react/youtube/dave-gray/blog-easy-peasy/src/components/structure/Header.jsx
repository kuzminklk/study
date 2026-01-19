

import useWindowSize from "../../../hooks/useWindowSize";


export default function Header() {

	const title = `React JS Blog, Width: ${useWindowSize().width}`;

	return (
		<header>
			<h1>{title}</h1>
		</header>
	)
}