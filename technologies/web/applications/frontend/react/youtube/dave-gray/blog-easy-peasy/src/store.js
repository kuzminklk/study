
import { createStore, action, thunk, computed } from 'easy-peasy'

import api from './api/posts'

import { format } from 'date-fns'


function createPostPattern() {
	return {
	id: '',
	title: '',
	datetime: '',
	body: ''
	}
}

function createSetter(property) {
	return action((state, payload) => {
			state[property] = payload;
		})
}

export default createStore({
	
	posts: [],
	setPosts: createSetter('posts'),

	filter: '',
	setFilter: createSetter('filter'),

	newPost: createPostPattern(),
	setNewPost: createSetter('newPost'),

	editedPost: createPostPattern(),
	setEditedPost: createSetter('editedPost'),

	postsCount: computed((state) => state.posts.length),

	getPostById: computed((state) => {
		return (id) => state.posts.find(post => (post.id).toString() === id); 
	}),

	savePost: thunk( async (actions, payload, helpers) => {
		
		const { posts, newPost } = helpers.getState();

		const newPostLocal = {
			...newPost, 
			id: String(posts.length),
			datetime: format(new Date(), 'yyyy')
		}

		try {
			const response = await api.post('/posts', newPostLocal);
			actions.setPosts([...posts, response.data])
			actions.setNewPost({id: '', title: '', datetime: '', body: '' })
			return response.data;
		} catch (error) {
			console.log(error)
		}
	}),


	editPost: thunk( async (actions, payload, helpers) => {
		
		const { posts, editedPost } = helpers.getState();

		try {
			const response = await api.put(`/posts/${editedPost.id}`, editedPost);
			actions.setPosts(posts.map( (post) => (post.id === editedPost.id ? response.data : post)))
		} catch (error) {
			console.log(error)
		}


	}),

	deletePost: thunk( async (actions, id, helpers) => {
		
		const { posts } = helpers.getState();

		try {
			await api.delete(`/posts/${id}`);
			const filteredPosts = posts.filter(post => post.id !== id);
			actions.setPosts(filteredPosts);
		} catch (error) {
			console.error(error);
		} 

	})

})

