

import { useEffect } from 'react'

import { useParams, Link, useNavigate } from 'react-router-dom'
import { useStoreActions, useStoreState } from 'easy-peasy'


export default function EditDeleteFullPost() {

	const posts = useStoreState((state) => state.posts); 

	const editedPost = useStoreState((state) => state.editedPost); 
	const setEditedPost = useStoreActions((actions) => actions.setEditedPost);

	const getPostById = useStoreState((state) => state.getPostById);

	const deletePost = useStoreActions((actions) => actions.deletePost);
	const editPost = useStoreActions((actions) => actions.editPost);

	const navigate = useNavigate();

	const { id } = useParams();
	const post = getPostById(id);

	useEffect(() => {
		if (post) {
			setEditedPost(post);
		}
	}, [post, setEditedPost])

	function handleDelete( id ) {
		deletePost(id);
		navigate('/')
	}

	function handleEdit(event) {
		event.preventDefault()
		editPost();
	}

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
				<form onSubmit={handleEdit}>
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
