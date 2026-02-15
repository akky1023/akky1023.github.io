// embed header

fetch("header.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#header").innerHTML = data);

  
// toggle theme light/dark

const buttonThemeToggle = document.getElementById("buttonThemeToggle");
const currentTheme =  localStorage.getItem("theme");

if (currentTheme === "dark") {
    document.documentElement.setAttribute("darktheme", "dark")
}

buttonThemeToggle.addEventListener("click", () => {
        let theme = "light";

        if (document.documentElement.getAttribute("data-theme") !== "dark") {
            theme = "dark"
        }

        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }
);