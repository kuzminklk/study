

import { useMemo } from 'react'

import Feed from './subcomponents/Feed';

import { useStoreState } from 'easy-peasy'


export default function Home( { isLoading, fetchError } ) {

	const filter = useStoreState((state) => state.filter); 
	const posts = useStoreState((state) => state.posts); 

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