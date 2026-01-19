

import { NavLink } from 'react-router-dom'

import { useContext} from 'react'
import DataContext from '../../context/DataContext'


export default function Nav() {

	const { filter, setFilter} = useContext(DataContext);

	return (

		<nav>
			<form onSubmit={(event) => event.preventDefault()}>
				<label htmlFor='search'>Search posts</label>
				<input type='text' id='search' value={filter} onChange={(event) => setFilter(event.target.value)}></input>
			</form>
			<ul>
				<li><NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
				<li><NavLink to='/post' className={({ isActive }) => isActive ? 'active' : ''}>Post</NavLink></li>
				<li><NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
			</ul>
		</nav>
	)
}