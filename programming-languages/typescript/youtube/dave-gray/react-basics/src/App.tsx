

import { useState } from "react"

import { Header } from "./components/Header.tsx"
import { Section } from "./components/Section.tsx"
import { Counter } from "./components/Counter.tsx"
import { List } from "./components/List.tsx"


import type { ReactElement } from "react"


function App(): ReactElement {

	const [count, setCount] = useState<number>(0)		

 return (
	<>
	<Header title={ "Hello, React" } />
	<Section>Content</Section>
	<Counter setCount={ setCount }>Count is { count }</Counter>
	<List 
	items={ ["Coffee", "Tacos", "Code"] } 
	render={ (item: string) => (<p>{ item }</p>) } 
	/>
 </>
 )
}

export default App
