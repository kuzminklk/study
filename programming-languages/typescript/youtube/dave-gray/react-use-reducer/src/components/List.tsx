

import type { ReactNode } from "react"


interface ListProps<Type> {
	items: Type[],
	render(item: Type): ReactNode
}


export function List<Type>({ items, render }: ListProps<Type>) {
	return (
		<ul>
			{ items.map((item, index) => (
				<li key={ index }>
					{ render(item) }
				</li>
			)) }
		</ul>
	)
}