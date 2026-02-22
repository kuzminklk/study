


import { createContext, useReducer, useCallback, useContext, type ReactElement } from "react"



// ————————— Counter Reducer —————————

type ReducerActionType = {
	"type": REDUCER_ACTION_TYPE
}

type ReducerStateType = {
	"count": number
}


const enum REDUCER_ACTION_TYPE {
	INCREMENT,
	DECREMENT
}

export const REDUCER_INITIAL_STATE: ReducerStateType = { "count": 0}


function reducer(state: ReducerStateType, action: ReducerActionType) {
	switch (action.type) {
		case REDUCER_ACTION_TYPE.INCREMENT:
			return { ...state, count: state.count + 1 }
		case REDUCER_ACTION_TYPE.DECREMENT:
			return { ...state, count: state.count - 1 }
		default:
			throw new Error()
	}
}



// ————————— Counter Context —————————

type UseCounterContextType = ReturnType<typeof useCounterContext>

type ChildrenType = {
	children?: ReactElement | undefined
}


const counterContextInitialState: UseCounterContextType = {
	state: REDUCER_INITIAL_STATE,
	increment() {},
	decrement() {}
}

export const CounterContext = createContext<UseCounterContextType>(counterContextInitialState)


export function CounterContextProvider({ children, ...REDUCER_INITIAL_STATE}: ChildrenType & ReducerStateType): ReactElement {
	return (	
		<CounterContext.Provider value={useCounterContext(REDUCER_INITIAL_STATE)}>
			{ children }
		</CounterContext.Provider>
	)
}


function useCounterContext(reducerInitialState: ReducerStateType) {

	const [state, dispatch] = useReducer(reducer, reducerInitialState)

	const increment = useCallback(():void => {
		dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT})
	}, [])

	const decrement = useCallback(():void => {
		dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT})
	}, [])

	return { state, increment, decrement }

}



// ————————— Counter Hook —————————

type UseCounterType = {
	count: number,
	increment(): void,
	decrement(): void
}

export function useCounter(): UseCounterType {
	const { state: { count }, increment, decrement } = useContext(CounterContext)
	return { count, increment, decrement}
}