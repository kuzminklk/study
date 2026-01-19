

import { useState, useEffect } from 'react'
import axios from 'axios'


export default function useAxiosFetch(dataUrl) {
	const [data, setData] = useState([]);
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		let isMounted = true;
		const source = axios.CancelToken.source();

		async function fetchData(url) {
			setIsLoading(true);
			try {
				const response = await axios.get(url, {
					cancelToken: source.token
				})
				if (isMounted) {
					setData(response.data)
				}
			} catch (error) {
				if (isMounted) {
					setFetchError(error);
				}
			} finally {
				setIsLoading(false);
			}
		}

		fetchData(dataUrl);

		function cleanUp() {
			isMounted = false;
			source.cancel();
		}

		return cleanUp;
	}, [dataUrl]);

	return {data, fetchError, isLoading}
} 