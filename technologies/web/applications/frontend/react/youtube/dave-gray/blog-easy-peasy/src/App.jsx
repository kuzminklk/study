

import { useEffect } from "react"

import { Routes, Route } from 'react-router-dom'

import Header from './components/structure/Header'
import Nav from './components/structure/Nav'
import Footer from './components/structure/Footer'
import Home from './components/route/Home'
import CreatePost from './components/route/CreatePost'
import EditDeleteFullPost from './components/route/EditDeleteFullPost'
import About from './components/route/About'
import Missing from './components/route/Missing'

import useAxiosFetch from '../hooks/useAxiosFetch'

import { useStoreActions } from 'easy-peasy'


function App() {

	const setPosts = useStoreActions((actions) => actions.setPosts)

	const { data: postsData, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

	useEffect(() => {
		if (postsData) setPosts(postsData);
	}, [postsData, setPosts])

	return (	
		<>
			<Header />
				<Nav/>
				<main>
					<Routes>
						<Route path='/' element={<Home fetchError={fetchError} isLoading={isLoading}/>} />
						<Route path='/post' element={<CreatePost/>} />
						<Route path='/post/:id' element={<EditDeleteFullPost/>} />
						<Route path='/about' element={<About/>} />
						<Route path='*' element={<Missing/>} />
					</Routes>
				</main>
			<Footer />
		</>
	)
}

export default App