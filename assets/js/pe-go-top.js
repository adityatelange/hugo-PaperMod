// Floating action button - Go to Top

let menu = document.getElementById('menu')
if (menu) {
    menu.scrollLeft = Number(localStorage.getItem("menu-scroll-position"));
    menu.onscroll = function () {
        localStorage.setItem("menu-scroll-position", menu.scrollLeft.toString());
    }
}

const goTopButton = document.getElementById("top-link");
window.onscroll = function () {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        goTopButton.style.visibility = "visible";
        goTopButton.style.opacity = "1";
    } else {
        goTopButton.style.visibility = "hidden";
        goTopButton.style.opacity = "0";
    }
};

document.addEventListener('scroll', function (e) {
    const readProgress = document.getElementById("pe-read-progress");
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    const progress = ((scrollTop / (scrollHeight - clientHeight)).toFixed(2) * 100).toFixed(0);
    readProgress.innerText = progress;

    if (progress === "100") {
        document.body.classList.add("pe-bottom-jump");
        setTimeout(function () {
            document.body.classList.remove("pe-bottom-jump");
        }, 500);
    }
    if (scrollTop === 0) {
        document.body.classList.add("pe-top-jump");
        setTimeout(function () {
            document.body.classList.remove("pe-top-jump");
        }, 500);
    }
})