

import { useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { format } from 'date-fns'

import DataContext from '../../context/DataContext'
import api from '../../api/posts'


export default function NewPost() {

	const { posts, setPosts } = useContext(DataContext);

	const navigate = useNavigate();

	const [newPost, setNewPost] = useState({
		id: '',
		title: '',
		datetime: '2025',
		body: ''
		});

	async function handleSubmit(event) {
		event.preventDefault();

		const newPostLocal = {
			...newPost, 
			id: String(posts.length),
			datetime: format(new Date(), 'yyyy')
		}

		try {
			const response = await api.post('/posts', newPostLocal);
			setPosts([...posts, response.data])

			setNewPost({id: '', title: '', datetime: '', body: '' })
			navigate(`/post/${newPostLocal.id}`);
		} catch (error) {
			console.log(error)
		}
	}

	return (
			<form onSubmit={handleSubmit}> 
				<label htmlFor='newPostTitle'>Title:</label>
				<input type='text' id='newPostTitle' required value={newPost.title} onChange={(event) => {setNewPost({...newPost, title: event.target.value})}}></input>
				<label htmlFor='newPostBody'>Body:</label>
				<textarea id='newPostBody' required value={newPost.body} onChange={(event) => {setNewPost({...newPost, body: event.target.value})}}></textarea>
				<button type='submit'>Submit</button>
			</form>
	)
}