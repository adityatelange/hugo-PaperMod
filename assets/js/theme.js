// for now this is assuming default theme is set to dark
// will probably refactor in the future for much better handling
function loadPreferredTheme() {
    if (localStorage.getItem("pref-theme") === "light") {
        document.body.classList.remove('dark')
    }
}

loadPreferredTheme();