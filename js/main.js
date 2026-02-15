// toggle theme light/dark

const buttonThemeToggle = document.getElementById("buttonThemeToggle");
const currentTheme =  localStorage.getItem("theme");

if (currentTheme === "dark") {
    document.documentElement.setAttribute("darktheme", "dark")
}

buttonThemeToggle.addEventListener("click", () => {
        let theme = "light";
        buttonThemeToggle.setAttribute("aria-pressed", false)

        if (document.documentElement.getAttribute("data-theme") !== "dark") {
            theme = "dark"
            buttonThemeToggle.setAttribute("aria-pressed", true)
        }

        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }
);