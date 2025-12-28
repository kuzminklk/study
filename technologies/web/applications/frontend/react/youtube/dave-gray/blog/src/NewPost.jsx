

import { useContext} from 'react'
import DataContext from './context/DataContext'


export default function NewPost(  ) {

	const { newPost, setNewPost, handleSubmit } = useContext(DataContext);

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