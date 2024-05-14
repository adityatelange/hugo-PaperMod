// Floating action button - Theme Toggle

document.getElementById("theme-toggle-float").addEventListener("click", () => {
    if (document.body.className.includes("dark")) {
        document.body.classList.remove('dark');
        localStorage.setItem("pref-theme", 'light');
    } else {
        document.body.classList.add('dark');
        localStorage.setItem("pref-theme", 'dark');
    }
})