var fuse; // holds our search engine

// execute search as each character is typed
document.getElementById("searchInput").onkeyup = function (e) {
    // run a search query (for "term") every time a letter is typed
    // in the search box
    let results = fuse.search(this.value); // the actual query being run using fuse.js
    let searchitems = ''; // our results bucket

    if (results.length === 0) { // no results based on what was typed into the input box
        searchitems = '';
    } else { // build our html
        for (let item in results) { // only show first 5 results
            searchitems = searchitems +
                `<li class="post-entry">
                <header class="entry-header">${results[item].item.title}&nbsp;»</header>
                <a href="${results[item].item.permalink}"></a>
                </li>`;
        }
    }

    document.getElementById("searchResults").innerHTML = searchitems;
}


// fetch some json
function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
}

// load our search index, only executed once
function loadSearch() {
    fetchJSONFile('{{ "index.json" | relURL }}', function (data) {

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
        fuse = new Fuse(data, options); // build the index from the json file
    });
}
