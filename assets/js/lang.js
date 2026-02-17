// toggle lang ja/en

const buttonLangToggle = document.getElementById("buttonLangToggle");

buttonLangToggle.addEventListener(
    "click", () => {
        const isJa = document.documentElement.getAttribute("data-lang") === "ja";
        const newLang = isJa ? "en" : "ja";
        document.documentElement.setAttribute("data-lang", newLang);
        localStorage.setItem("lang", newLang);

        var currentPath = location.pathname;
        if(newLang === "ja") {
            var newPath = currentPath.replace(/^\/en\//, "/ja/");
        } else {
            var newPath = currentPath.replace(/^\/ja\//, "/en/");
        };
        location = newPath;
    }
);