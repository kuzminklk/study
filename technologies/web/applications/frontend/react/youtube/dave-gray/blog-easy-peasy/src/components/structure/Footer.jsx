
import { useStoreState } from 'easy-peasy'

export default function Footer() {

	const postsCount = useStoreState((state) => state.postsCount)
	
	return (
		<footer>
			<h1>Footer {`Posts: ${postsCount}`}</h1>
		</footer>
	)
}