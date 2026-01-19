

import { useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { format } from 'date-fns'

import api from '../../api/posts'

import { useStoreActions, useStoreState } from 'easy-peasy'


export default function NewPost() {

	const newPost = useStoreState((state) => state.newPost); 
	const setNewPost = useStoreActions((actions) => actions.setNewPost);

	const savePost = useStoreActions((actions) => actions.savePost);

	const navigate = useNavigate();

	async function handleSubmit(event) {
		event.preventDefault();
		const createdPost = await savePost();
		navigate(`/post/${createdPost.id}`);
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