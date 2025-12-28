

import { useEffect } from 'react'

import { useParams, Link } from 'react-router-dom'

import { useContext} from 'react'
import DataContext from './context/DataContext'


export default function PostPage() {

	const { posts, handleDelete, handleUpdate, setEditedPost, editedPost } = useContext(DataContext);

	const { id } = useParams();
	const post = posts.find(post => (post.id).toString() === id);

	useEffect(() => {
		if (post) {
			setEditedPost(post);
		}
	}, [])

	return (
		post ? (
			<>
				<article>
					<h2>{post.title}</h2>
					<h3>{post.datetime}</h3>
					<p>{post.body}</p>
				</article >
				<button onClick={() => { handleDelete(post.id) }}> Delete post </button>
				<h3>Edit:</h3>
				<form onSubmit={handleUpdate}>
					<input type='text' required value={editedPost.title || ''} onChange={(event) => { setEditedPost({ ...editedPost, title: event.target.value }) }}></input>
					<textarea type='text' required value={editedPost.body || ''} onChange={(event) => { setEditedPost({ ...editedPost, body: event.target.value }) }}></textarea>
					<button type='submit'>Sumbit update</button>
				</form>
			</>
		) : (
			<>
				<h2> Post not found </h2>
				<p><Link to='/'>Visit our homepage</Link></p>
			</>
		)
	)
}
