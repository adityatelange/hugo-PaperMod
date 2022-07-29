function loadPreferredTheme() {
    const preferredTheme = localStorage.getItem("pref-theme");
    const isDarkTheme = document.body.classList.contains("dark");

    if (preferredTheme === "light" && isDarkTheme) {
        document.body.classList.remove('dark')
    } else if (preferredTheme === "dark" && !isDarkTheme) {
        document.body.classList.add('dark')
    }
}

loadPreferredTheme();