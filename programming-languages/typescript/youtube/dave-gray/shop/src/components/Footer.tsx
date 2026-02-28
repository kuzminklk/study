

export function Footer() {

	const year: number = new Date().getFullYear()

	return (
		<footer>
			<p>
				ⓒ {year} Kuzmin Daniil
			</p>
		</footer>
	)
}