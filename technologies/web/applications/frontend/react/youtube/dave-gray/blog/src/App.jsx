

import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'

import { DataProvider } from './context/DataContext'


function App() {


	// View

	return (	
		<DataProvider>
			<Header />
			<Nav/>
			<main>
				<Routes>
					<Route path='/' element={<Home/>} />
					<Route path='/post' element={<NewPost/>} />
					<Route path='/post/:id' element={<PostPage/>} />
					<Route path='/about' element={<About/>} />
					<Route path='*' element={<Missing/>} />
				</Routes>
			</main>
			<Footer />
		</DataProvider>
	)
}

export default App