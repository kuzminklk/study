

import ItemsList from "./ItemsList"
import AddItemField from "./AddItemField"
import SearchField from "./SearchField"


export default function Main({ items, filter, handleCheck, handleDelete, handleSubmit, setFilter }) {
	
	return (
		<main>
			<section>
				<AddItemField handleSubmit={handleSubmit}/>
				<SearchField filter={filter} setFilter={setFilter}/>
			</section>
			<section>
			{items.length ? (
				<>
					<ItemsList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
				</>
			) : (
				<p>Your list is empty!</p>
			)}
			</section>
		</main>
	)
}