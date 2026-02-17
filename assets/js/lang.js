// toggle lang ja/en

const buttonLangToggle = document.getElementById("buttonLangToggle");

buttonLangToggle.addEventListener(
    "click", () => {
        // check current language
        const isJa = document.documentElement.getAttribute("data-lang") === "ja";
        const newLang = isJa ? "en" : "ja";
        document.documentElement.setAttribute("data-lang", newLang);
        localStorage.setItem("lang", newLang);

        // target page
        var currentPath = location.pathname;
        var targetPath = newLang === "ja" ? currentPath.replace(/^\/en\//, "/ja/") : currentPath.replace(/^\/ja\//, "/en/");
        /* if(newLang === "ja") {
            var targetPath = currentPath.replace(/^\/en\//, "/ja/");
        } else {
            var targetPath = currentPath.replace(/^\/ja\//, "/en/");
        }; */

        // check is target page available
        fetch(targetPath, {method: "HEAD"})
            .then(function(response){
                if (response.ok) {
                    location = targetPath;
                } else if (newLang === "ja") {
                    alert("日本語版のページが存在しません．後ほど追加予定です．");
                } else {
                    alert("English version page isn't available. I'll add it later!");
                }
            })
            // if fetch failed
            .catch(function(error){
                if (newLang === "ja"){
                    console.error("Fetch failed.", error);
                    alert("ページ情報の取得に失敗しました．再度お試し下さい．")
                } else {
                    console.error("Fetch failed.", error);
                    alert("Fetch failed. Try again.")
                }
            })
    }
);