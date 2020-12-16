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
                        isCaseSensitive: false,
                        shouldSort: true,
                        location: 0,
                        distance: 100,
                        threshold: 0.4,
                        minMatchCharLength: 0,
                        keys: [
                            'title',
                            'permalink',
                            'summary',
                            'content'
                        ]
                    };
                    // disable custom opts temporarily
                    // {{ if . }}options = {{ jsonify . }}{{ end }} // load custom options from .Site.Params.fuseOpts
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

// kb bindings
document.onkeydown = function (e) {
    let key = e.key;
    if (key === "ArrowDown" && resultsAvailable) {
        e.preventDefault();
        if (document.activeElement == sInput) {
            resList.firstChild.lastChild.focus();
        } else if (document.activeElement.parentElement == last) {
        } else {
            document.activeElement.parentElement.nextSibling.lastChild.focus();
        }
    } else if (key === "ArrowUp" && resultsAvailable) {
        e.preventDefault();
        if (document.activeElement == sInput) {
        } else if (document.activeElement.parentElement == first) {
            sInput.focus();
        } else {
            document.activeElement.parentElement.previousSibling.lastChild.focus();
        }
    }
    console.log(document.activeElement);
}

// execute search as each character is typed
document.getElementById("searchInput").onkeyup = function (e) {
    // run a search query (for "term") every time a letter is typed
    // in the search box
    const results = fuse.search(this.value); // the actual query being run using fuse.js

    if (results.length !== 0) {
        // build our html if result exists
        let resultSet = ''; // our results bucket

        for (let item in results) {
            resultSet = resultSet + itemGen(results[item].item.title, results[item].item.permalink)
        }

        document.getElementById("searchResults").innerHTML = resultSet;
        resultsAvailable = true;
        first = resList.firstChild;
        last = resList.lastChild;
    } else {
        resultsAvailable = false;
        document.getElementById("searchResults").innerHTML = '';
    }
}

function itemGen(name, link) {
    return `<li class="post-entry"><header class="entry-header">${name}&nbsp;»</header><a href="${link}" aria-label="${name}"></a></li>`
}
