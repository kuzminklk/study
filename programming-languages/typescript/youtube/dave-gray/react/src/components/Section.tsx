

import type { ReactNode } from "react"


type SectionProps = {
	title?: string
	children: ReactNode
}


export function Section({ title = "Section", children }: SectionProps) {
	return (
		<section>
			<h2>{ title }</h2>
			<p> { children } </p>
		</section>
	)
}