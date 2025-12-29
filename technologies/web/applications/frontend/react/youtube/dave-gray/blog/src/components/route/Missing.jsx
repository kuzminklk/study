

import { Link } from 'react-router-dom'


export default function Missing() {
	return (
		<>
			<h2>Page not found</h2>
			<p><Link to='/'>Visit our homepage</Link></p>
		</>
	)
}