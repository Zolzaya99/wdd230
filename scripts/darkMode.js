const darkModeButtn = document.querySelector("#darkMode");
const main = document.querySelector("main");

darkModeButtn.addEventListener("click", () => {
	if (darkModeButtn.textContent.includes("🛌")) {
		main.style.background = "#2e2d2d";
		main.style.color = "#e3e8ec";
        document.querySelectorAll("a").forEach(link => link.style.color = "#e3e8ec");
        document.querySelectorAll("h2").forEach(link => link.style.color = "#e3e8ec");
		darkModeButtn.textContent = "✖️";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
        document.querySelectorAll("a").forEach(link => link.style.color = "#333");
        document.querySelectorAll("h2").forEach(link => link.style.color = "#333");
		darkModeButtn.textContent = "🛌";
	}
});
