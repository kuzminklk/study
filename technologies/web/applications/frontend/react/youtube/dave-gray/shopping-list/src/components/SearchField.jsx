

export default function SearchField( {filter, setFilter} ) {

	// View
	return (
		<form onSubmit={ (event) => { event.preventDefault() } }>
			<label htmlFor='SearchField'>Search</label>
			<input value={filter} id='SearchField' type='text' role='searchbox' placeholder='Search' onChange={(event) => {setFilter(event.target.value)}}></input>
		</form>
	)
}