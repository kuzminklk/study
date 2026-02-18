const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
if (yearElement) {
    yearElement.setAttribute("datetime", String(currentYear));
    yearElement.textContent = String(currentYear);
}
export {};
//# sourceMappingURL=copyrights.js.map