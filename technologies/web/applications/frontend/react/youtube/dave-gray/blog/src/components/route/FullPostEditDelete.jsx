

import { useEffect, useContext, useState } from 'react'

import { useParams, Link, useNavigate } from 'react-router-dom'

import api from '../../api/posts'
import DataContext from '../../context/DataContext'


export default function PostPage() {

	const { posts, setPosts } = useContext(DataContext);

	const navigate = useNavigate();

	const [editedPost, setEditedPost] = useState({
		id: '',
		title: '',
		datetime: '2025',
		body: ''
	});

	const { id } = useParams();
	const post = posts.find(post => (post.id).toString() === id);

	useEffect(() => {
		if (post) {
			setEditedPost(post);
		}
	}, [])

	async function handleDelete(id) {
		try {
			await api.delete(`/posts/${id}`);
			const filteredPosts = posts.filter(post => post.id !== id);
			setPosts(filteredPosts);
			navigate('/');
		} catch (error) {
			console.error(error);
		}
	}

	async function handleUpdate(event) {
		event.preventDefault();
		try {
			const response = await api.put(`/posts/${editedPost.id}`, editedPost);
			setPosts(posts.map( (post) => (post.id === editedPost.id ? response.data : post)))
		} catch (error) {
			console.log(error)
		}
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
