

import { Header } from "./components/Header.tsx"
import { Section } from "./components/Section.tsx"
import { Counter } from "./components/Counter.tsx"
import { List } from "./components/List.tsx"


import type { ReactElement } from "react"


function App(): ReactElement {
 return (
	<>
	<Header title={ "Hello, React" } />
	<Counter />
 </>
 )
}

export default App
