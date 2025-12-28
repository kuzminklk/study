
export default function Footer({length}) {

const today = new Date();

	return(
		<footer>
			<p>Made by kuzminklk &copy; {today.getFullYear()}</p>
			<p>{length} {length === 1 ? 'item' : 'items'}</p>
		</footer>
	)
}