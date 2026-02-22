

import { Header } from "./components/Header.tsx"
import { Counter } from "./components/Counter.tsx"

import { CounterContextProvider } from './context/CounterContext.tsx'
import { REDUCER_INITIAL_STATE } from "./context/CounterContext.tsx"


import type { ReactElement } from "react"


function App(): ReactElement {
 return (
	<>
	<Header title={ "Hello, React" } />
	<CounterContextProvider count={REDUCER_INITIAL_STATE.count}>
		<Counter />
	</CounterContextProvider>
 </>
 )
}

export default App
