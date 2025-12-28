

import { createContext, useState, useEffect } from "react"

import { format } from 'date-fns'

import { useNavigate } from 'react-router-dom'

import api from '../api/posts.js'

import useWindowSize from '../../hooks/useWindowSize.js'
import useAxiosFetch from '../../hooks/useAxiosFetch.js'


const DataContext = createContext({});

export function DataProvider({ children }) {


	// Model

	const [posts, setPosts] = useState([])

	const [filter, setFilter] = useState('');

	const [filteredPosts, setFilteredPosts] = useState([]);

	const [newPost, setNewPost] = useState({
		id: '',
		title: '',
		datetime: '2025',
		body: ''
	});

	const [editedPost, setEditedPost] = useState({
		id: '',
		title: '',
		datetime: '2025',
		body: ''
	});

	// Controllers

	/* useEffect(() => {
		async function fetchPosts() {
			try {
				const response = await api.get('/posts');
				setPosts(response.data);
			} catch(error) {
				if (error.response) {
					console.error(error.response.data);
					console.error(error.response.status);
					console.error(error.response.headers);
				} else {
					console.error(error);
				}
			}
		}
		fetchPosts();
	}, []) */

	const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

	useEffect(() => {
		setPosts(data);
	}, [data])

	useEffect(() => {
		setFilteredPosts(posts.filter( post => (post.title.toLowerCase()).includes(filter.toLowerCase()) || (post.body.toLowerCase()).includes(filter.toLowerCase())))
	}, [posts, filter])

	const navigate = useNavigate();

	const { width } = useWindowSize();

	const title = `React JS Blog, Width: ${width}`;

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
			navigate(`post/${newPostLocal.id}`);
		} catch (error) {
			console.log(error)
		}
	}

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
		<DataContext.Provider value={{
			width, title, posts, setPosts, filter, setFilter, filteredPosts, setFilteredPosts, newPost, setNewPost, editedPost, setEditedPost, handleDelete, handleUpdate, handleSubmit, data, fetchError, isLoading
		}}>
			{ children }
		</DataContext.Provider>
	)
}

export default DataContext