


import { useReducer } from "react"



type ReducerAction = {
	"type": REDUCER_ACTION_TYPE
}

type ReducerState = {
	"count": number
}


const enum REDUCER_ACTION_TYPE {
	INCREMENT,
	DECREMENT
}

const INIT_STATE: ReducerState = { "count": 0}


function reducer(state: ReducerState, action: ReducerAction) {
	switch (action.type) {
		case REDUCER_ACTION_TYPE.INCREMENT:
			return { ...state, count: state.count + 1 }
		case REDUCER_ACTION_TYPE.DECREMENT:
			return { ...state, count: state.count - 1 }
		default:
			throw new Error()
	}
}



export function Counter() {

	const [state, dispatch] = useReducer(reducer, INIT_STATE)

	return (
		<>
			<h1>Counter is { state.count } </h1>
			<button onClick={ () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT}) }>Increment</button>
			<button onClick={ () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT}) }>Decrement</button>
		</>
	)
}