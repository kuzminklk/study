

import { Routes, Route } from 'react-router-dom'

import Header from './components/structure/Header'
import Nav from './components/structure/Nav'
import Footer from './components/structure/Footer'
import Home from './components/route/Home'
import CreatePost from './components/route/CreatePost'
import FullPostEditDelete from './components/route/FullPostEditDelete'
import About from './components/route/About'
import Missing from './components/route/Missing'

import { DataProvider } from './context/DataContext'


function App() {


	// View

	return (	
		<>
			<Header />
			<StoreProvider>
			<DataProvider>
				<Nav/>
				<main>
					<Routes>
						<Route path='/' element={<Home/>} />
						<Route path='/post' element={<CreatePost/>} />
						<Route path='/post/:id' element={<FullPostEditDelete/>} />
						<Route path='/about' element={<About/>} />
						<Route path='*' element={<Missing/>} />
					</Routes>
				</main>
			</DataProvider>
			</StoreProvider>
			<Footer />
		</>
	)
}

export default App