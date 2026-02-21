

import type { ReactElement } from "react"


type HeaderProps = { title: string }


export function Header({ title }: HeaderProps): ReactElement {
	return (
		<header>
			<h1>{ title }</h1>
		</header>
	)
}