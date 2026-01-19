

import { useContext, useMemo} from 'react'

import Feed from './subcomponents/Feed';
import DataContext from '../../context/DataContext'


export default function Home() {

	const { posts, filter, isLoading, fetchError } = useContext(DataContext);

	const filteredPosts = useMemo(() => {
		return posts.filter( post =>
			(post.title.toLowerCase()).includes(filter.toLowerCase()) 
			|| (post.body.toLowerCase()).includes(filter.toLowerCase())
		)
	}, [posts, filter])

	return (
		isLoading ? ( <p> Loading... </p> ) :
		fetchError ? ( <p> Data fetch error. </p>) :
		filteredPosts.length ? (
			<Feed posts={ filteredPosts }/>
		) : (
			<p>No posts</p>
		)
	)
}