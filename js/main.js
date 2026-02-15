// toggle theme light/dark

const buttonThemeToggle = document.getElementById("buttonThemeToggle");
const buttonThemeToggleIcon = document.getElementById("buttonThemeToggleIcon");
const currentTheme =  localStorage.getItem("theme");

if (currentTheme === "dark") {
    document.documentElement.setAttribute("darktheme", "dark")
}

buttonThemeToggle.addEventListener("click", () => {
        let theme = "light";
        buttonThemeToggle.setAttribute("aria-pressed", false);
        buttonThemeToggleIcon.setAttribute("class", "fa-soild fa-moon");

        if (document.documentElement.getAttribute("data-theme") !== "dark") {
            theme = "dark";
            buttonThemeToggle.setAttribute("aria-pressed", true);
            buttonThemeToggleIcon.setAttribute("class", "fa-regular fa-sun");
        }

        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }
);