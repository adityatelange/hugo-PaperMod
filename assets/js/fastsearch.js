import * as params from '@params';

let resList = document.getElementById('searchResults');
let sInput = document.getElementById('searchInput');
let first, last, current_elem = null
let resultsAvailable = false;

const currentScriptSrc = document.currentScript.src
let data, options

/** @type {Worker} */
let fuseWorker

// load our search index
window.onload = function () {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                data = JSON.parse(xhr.responseText);
                if (data) {
                    // fuse.js options; check fuse.js website for details
                    options = {
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
                    if (params.fuseOpts) {
                        options = {
                            isCaseSensitive: params.fuseOpts.iscasesensitive ?? false,
                            includeScore: params.fuseOpts.includescore ?? false,
                            includeMatches: params.fuseOpts.includematches ?? false,
                            minMatchCharLength: params.fuseOpts.minmatchcharlength ?? 1,
                            shouldSort: params.fuseOpts.shouldsort ?? true,
                            findAllMatches: params.fuseOpts.findallmatches ?? false,
                            keys: params.fuseOpts.keys ?? ['title', 'permalink', 'summary', 'content'],
                            location: params.fuseOpts.location ?? 0,
                            threshold: params.fuseOpts.threshold ?? 0.4,
                            distance: params.fuseOpts.distance ?? 100,
                            ignoreLocation: params.fuseOpts.ignorelocation ?? true
                        }
                    }
                    // fuse = new Fuse(data, options); // build the index from the json file

                    fetch(currentScriptSrc)
                        .then(resp => resp.text())
                        .then(currentScriptCode => {
                            const m = currentScriptCode.match(/Fuse=t\(\);/)
                            const fuseScript = currentScriptCode.slice(0, m.index) + 'Fuse=t();'

                            const workerScript = `
                                ${fuseScript};

                                let data = ${JSON.stringify(data)};
                                let options = ${JSON.stringify(options)};
                                let fuse = new Fuse(data, options);

                                onmessage = (e) => {
                                    const results = fuse.search(e.data)

                                    postMessage(results)
                                }
                            `
                            const workerScriptBlob = new Blob([workerScript], { type: 'script/js' })
                            const workerScriptUrl = URL.createObjectURL(workerScriptBlob)

                            fuseWorker = new Worker(workerScriptUrl)

                            fuseWorker.addEventListener('message', (ev) => {
                                const results = ev.data

                                if (results.length !== 0) {
                                    // build our html if result exists
                                    let resultSet = ''; // our results bucket

                                    for (let item in results) {
                                        resultSet += `<li class="post-entry"><header class="entry-header">${results[item].item.title}&nbsp;»</header>` +
                                            `<a href="${results[item].item.permalink}" aria-label="${results[item].item.title}"></a></li>`
                                    }

                                    resList.innerHTML = resultSet;
                                    resultsAvailable = true;
                                    first = resList.firstChild;
                                    last = resList.lastChild;
                                } else {
                                    resultsAvailable = false;
                                    resList.innerHTML = '';
                                }
                            })
                        })

                }
            } else {
                console.log(xhr.responseText);
            }
        }
    };
    xhr.open('GET', "../index.json");
    xhr.send();
}

function activeToggle(ae) {
    document.querySelectorAll('.focus').forEach(function (element) {
        // rm focus class
        element.classList.remove("focus")
    });
    if (ae) {
        ae.focus()
        document.activeElement = current_elem = ae;
        ae.parentElement.classList.add("focus")
    } else {
        document.activeElement.parentElement.classList.add("focus")
    }
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
    if (fuseWorker) {
        // const results = fuse.search(this.value.trim()); // the actual query being run using fuse.js

        fuseWorker.postMessage(this.value.trim())
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
        let elements = document.getElementsByClassName('focus');
        while (elements.length > 0) {
            elements[0].classList.remove('focus');
        }
    } else if (current_elem) ae = current_elem;

    if (key === "Escape") {
        reset()
    } else if (!resultsAvailable || !inbox) {
        return
    } else if (key === "ArrowDown") {
        e.preventDefault();
        if (ae == sInput) {
            // if the currently focused element is the search input, focus the <a> of first <li>
            activeToggle(resList.firstChild.lastChild);
        } else if (ae.parentElement != last) {
            // if the currently focused element's parent is last, do nothing
            // otherwise select the next search result
            activeToggle(ae.parentElement.nextSibling.lastChild);
        }
    } else if (key === "ArrowUp") {
        e.preventDefault();
        if (ae.parentElement == first) {
            // if the currently focused element is first item, go to input box
            activeToggle(sInput);
        } else if (ae != sInput) {
            // if the currently focused element is input box, do nothing
            // otherwise select the previous search result
            activeToggle(ae.parentElement.previousSibling.lastChild);
        }
    } else if (key === "ArrowRight") {
        ae.click(); // click on active link
    }
}
