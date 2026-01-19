

import { Link } from 'react-router-dom'


export default function Post({ post }) {
	return (
		<article>
			<Link to={`/post/${post.id}`}>
				<h2>{post.title}</h2>
				<h3>{post.datetime}</h3>
			</Link>
			<p>
				{(post.body).length <= 25
					? post.body
					: `${(post.body).slice(0, 25)}...`
				}
			</p>
		</article>
	)
}