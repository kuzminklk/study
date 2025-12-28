

import { FaTrashAlt } from 'react-icons/fa'


export default function Item({ item, handleCheck, handleDelete }) {
	return (
		<li>
			<input
				type='checkbox'
				checked={item.checked}
				onChange={() => { handleCheck(item.id) }}
			>
			</input>
			<label
				onDoubleClick={() => { handleCheck(item.id) }}
				style={(item.checked) ? { textDecoration: 'line-through' } : null}
			>
				{item.name}
			</label>
			<FaTrashAlt
				role='button'
				tabIndex='0'
				onClick={() => { handleDelete(item.id) }}
				aria-lebel={`Delete item:${item.id}`}
			/>
		</li>
	)
}