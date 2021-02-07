var fuse; // holds our search engine
var resList = document.getElementById('searchResults');
var sInput = document.getElementById('searchInput');
var first, last = null
var resultsAvailable = false;

// load our search index, only executed onload
function loadSearch() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                if (data) {
                    // fuse.js options; check fuse.js website for details
                    var options = {
                        distance: 100,
                        threshold: 0.4,
                        ignoreLocation: true,
                        keys: [
                            'title',
                            'permalink',
                            'summary',
                            'content'
                        ]
                    };
                    {{ if . }}options = {{ jsonify . }}{{ end }} // load custom options from .Site.Params.fuseOpts
                    fuse = new Fuse(data, options); // build the index from the json file
                }
            } else {
                console.log(xhr.responseText);
            }
        }
    };
    xhr.open('GET', "../index.json");
    xhr.send();
}


function itemGen(name, link) {
    return `<li class="post-entry"><header class="entry-header">${name}&nbsp;»</header><a href="${link}" aria-label="${name}"></a></li>`
}

function activeToggle() {
    document.activeElement.parentElement.classList.toggle("focus")
}

function reset() {
    resultsAvailable = false;
    resList.innerHTML = sInput.value = ''; // clear inputbox and searchResults
    sInput.focus(); // shift focus to input box
}

// execute search as each character is typed
sInput.onkeyup = function (e) {
    // run a search query (for "term") every time a letter is typed
    // in the search box
    const results = fuse.search(this.value.trim()); // the actual query being run using fuse.js

    if (results.length !== 0) {
        // build our html if result exists
        let resultSet = ''; // our results bucket

        for (let item in results) {
            resultSet = resultSet + itemGen(results[item].item.title, results[item].item.permalink)
        }

        resList.innerHTML = resultSet;
        resultsAvailable = true;
        first = resList.firstChild;
        last = resList.lastChild;
    } else {
        resultsAvailable = false;
        resList.innerHTML = '';
    }
}

sInput.addEventListener('search', function (e) {
    // clicked on x
    if (!this.value) reset()
})

// kb bindings
document.onkeydown = function (e) {
    let key = e.key;
    let ae = document.activeElement;
    let inbox = document.getElementById("searchbox").contains(ae)

    if (ae === sInput) {
        var elements = document.getElementsByClassName('focus');
        while (elements.length > 0) {
            elements[0].classList.remove('focus');
        }
    }

    if (key === "ArrowDown" && resultsAvailable && inbox) {
        e.preventDefault();
        if (ae == sInput) {
            // if the currently focused element is the search input, focus the <a> of first <li>
            activeToggle(); // rm focus class
            resList.firstChild.lastChild.focus();
            activeToggle(); // add focus class
        } else if (ae.parentElement == last) {
            // if the currently focused element's parent is last, do nothing
        } else {
            // otherwise select the next search result
            activeToggle(); // rm focus class
            ae.parentElement.nextSibling.lastChild.focus();
            activeToggle(); // add focus class
        }
    } else if (key === "ArrowUp" && resultsAvailable && inbox) {
        e.preventDefault();
        if (ae == sInput) {
            // if the currently focused element is input box, do nothing
        } else if (ae.parentElement == first) {
            // if the currently focused element is first item, go to input box
            activeToggle(); // rm focus class
            sInput.focus();
        } else {
            // otherwise select the previous search result
            activeToggle(); // rm focus class
            ae.parentElement.previousSibling.lastChild.focus();
            activeToggle(); // add focus class
        }
    } else if (key === "ArrowRight" && resultsAvailable && inbox) {
        ae.click(); // click on active link
    } else if (key === "Escape") {
        reset()
    }
}
