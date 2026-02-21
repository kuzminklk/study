

import type { ReactNode } from "react"


// Props type example
type CounterProps = {
	setCount: React.Dispatch<React.SetStateAction<number>>,
	children: ReactNode
}


export function Counter({ setCount, children }: CounterProps) {

	return (
		<>
			<h1>{ children }</h1>
			<button onClick={() => setCount(previous => previous + 1)}>Increment</button>
			<button onClick={() => setCount(previous => previous - 1)}>Decrement</button>
		</>
	)
}