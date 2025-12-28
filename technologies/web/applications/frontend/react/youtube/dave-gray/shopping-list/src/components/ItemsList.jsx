

import Item from "./Item"


export default function ItemsList({ items, handleCheck, handleDelete }) {
	return (
		<ul>
			{ items.map((item) => (
				<Item key={item.id} item={item} handleCheck={handleCheck} handleDelete={handleDelete} />
			))}
		</ul>
	)
}