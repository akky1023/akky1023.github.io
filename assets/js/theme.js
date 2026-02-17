// toggle theme light/dark

const buttonThemeToggle = document.getElementById("buttonThemeToggle");

buttonThemeToggle.addEventListener(
    "click", () => {
        const isDark = document.documentElement.getAttribute("data-theme") === "dark";
        const newTheme = isDark ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    }
);