//  折叠
let peDetails = document.getElementsByClassName('pe-details')
for (let element of peDetails) {
    const summary = element.getElementsByClassName('pe-details-summary')[0];
    if (summary) {
        summary.addEventListener('click', () => {
            element.classList.toggle('open');
        }, false);
    }
}




// 链接跳转
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        var id = this.getAttribute("href").substr(1);
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.querySelector(`[id='${decodeURIComponent(id)}']`).scrollIntoView({
                behavior: "smooth"
            });
        } else {
            document.querySelector(`[id='${decodeURIComponent(id)}']`).scrollIntoView();
        }
        if (id === "top") {
            history.replaceState(null, null, " ");
        } else {
            history.pushState(null, null, `#${id}`);
        }
    });
});