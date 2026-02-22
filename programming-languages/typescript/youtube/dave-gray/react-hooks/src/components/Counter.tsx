

import { useCounter } from '../context/CounterContext.jsx'


export function Counter() {

	const { count, increment, decrement } = useCounter()

	return (
		<>
			<h1>Counter is { count } </h1>
			<button onClick={ increment }>Increment</button>
			<button onClick={ decrement }>Decrement</button>
		</>
	)
}