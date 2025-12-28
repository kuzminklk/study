

import { FaPlus } from 'react-icons/fa'

import {useState, useRef} from 'react'


export default function AddItemField( {handleSubmit} ) {

	// Model
	const [inputField, setInputField] = useState('')
	const inputRef = useRef();

	// View
	return (
		<form onSubmit={(event) => { event.preventDefault(); handleSubmit(inputField); setInputField('')} }>
			<label htmlFor='AddItemField'>Add item</label>
			<input value={inputField} id='AddItemField' autoFocus ref={inputRef} type='text' placeholder='Add Item' onChange={(event) => {setInputField(event.target.value)}}></input>
			<button type='submit' aria-label='Add item' onClick={ () => {inputRef.current.focus()}}>
				<FaPlus />
			</button>
		</form>
	)
}