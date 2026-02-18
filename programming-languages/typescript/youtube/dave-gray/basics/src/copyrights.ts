

type CatchHTMLElement = HTMLElement | null

const yearElement: CatchHTMLElement = document.getElementById("year")
const currentYear: number = new Date().getFullYear()

if (yearElement) {
	yearElement.setAttribute("datetime", String(currentYear))
	yearElement.textContent = String(currentYear)
}