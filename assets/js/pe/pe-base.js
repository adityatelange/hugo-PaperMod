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

// 目录
let activatedTitle;
let articleTitles = [];
window.addEventListener('DOMContentLoaded', function (event) {
    checkTocPosition();

    articleTitles = document.querySelectorAll('h1[id],h2[id],h3[id],h4[id],h5[id],h6[id]');
    // Make the first header active
    activatedTitle = articleTitles[0];
    const id = encodeURI(activatedTitle.getAttribute('id')).toLowerCase();
    document.querySelector(`.inner ul li a[href="#${id}"]`).parentElement.classList.add('active', 'open');
}, false);

window.addEventListener('resize', function (event) {
    checkTocPosition();
}, false);

window.addEventListener('scroll', () => {
    activatedTitle = Array.from(articleTitles).find((element) => {
        if ((getOffsetTop(element) - window.scrollY) > 0 &&
            (getOffsetTop(element) - window.scrollY) < window.innerHeight / 2) {
            return element;
        }
    }) || activatedTitle;

    articleTitles.forEach(element => {
        const id = encodeURI(element.getAttribute('id')).toLowerCase();
        const activeLi = document.querySelector(`.inner ul li a[href="#${id}"]`).parentElement;
        if (element === activatedTitle) {
            activeLi.classList.add('active', 'open');
            getAllLIParents(activeLi).forEach(li => li.classList.add('open'));
        } else {
            activeLi.classList.remove('active', 'open');
        }
    })
}, false);

const main = parseInt(getComputedStyle(document.body).getPropertyValue('--article-width'), 10);
const toc = parseInt(getComputedStyle(document.body).getPropertyValue('--toc-width'), 10);
const gap = parseInt(getComputedStyle(document.body).getPropertyValue('--gap'), 10);

function checkTocPosition() {
    const width = document.body.scrollWidth;

    if (width - main - (toc * 2) - (gap * 4) > 0) {
        document.getElementById("toc-container").classList.add("wide");
    } else {
        document.getElementById("toc-container").classList.remove("wide");
    }
}

function getOffsetTop(element) {
    if (!element.getClientRects().length) {
        return 0;
    }
    let rect = element.getBoundingClientRect();
    let win = element.ownerDocument.defaultView;
    return rect.top + win.pageYOffset;
}

function getAllLIParents(element) {
    let liParents = [];
    let currentParent = element.parentNode;
    while (currentParent !== null) {
        if (currentParent.tagName === 'LI') {
            liParents.push(currentParent);
        }
        currentParent = currentParent.parentNode;
    }
    return liParents;
}