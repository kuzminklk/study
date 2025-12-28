

import Feed from "./Feed"

import { useContext} from 'react'
import DataContext from './context/DataContext'


export default function Home() {

	const { posts, isLoading, fetchError } = useContext(DataContext);

	return (
		isLoading ? ( <p> Loading... </p> ) :
		fetchError ? ( <p> Data fetch error. </p>) :
		posts.length ? (
			<Feed posts={ posts }/>
		) : (
			<p>No posts</p>
		)
	)
}