

import { createContext, useState, useEffect, useMemo } from "react"

import useAxiosFetch from '../../hooks/useAxiosFetch'


const DataContext = createContext({});

export function DataProvider({ children }) {

	const [posts, setPosts] = useState([])

	const [filter, setFilter] = useState('');

	const { data: postsData, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

	useEffect(() => {
		if (postsData) setPosts(postsData);
	}, [postsData])

	return (
		<DataContext.Provider value={{
			posts, setPosts, filter, setFilter, fetchError, isLoading
		}}>
			{ children }
		</DataContext.Provider>
	)
}

export default DataContext