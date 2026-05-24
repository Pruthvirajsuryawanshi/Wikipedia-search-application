let searchInputEl = document.getElementById("searchInput");

let searchResultsEl = document.getElementById("searchResults");

let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
    let { link, title, description } = result;

    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");

    let titleEl = document.createElement("a");
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.textContent = title;
    titleEl.classList.add("result-title");
    resultItemEl.appendChild(titleEl);

    let titleBreakEl = document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);

    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    resultItemEl.appendChild(urlEl);

    let linkBreakEl = document.createElement("br");
    resultItemEl.appendChild(linkBreakEl);

    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    resultItemEl.appendChild(descriptionEl);

    searchResultsEl.appendChild(resultItemEl);
}

function displayResults(searchResults) {
    spinnerEl.classList.add("d-none");

    if (!searchResults || searchResults.length === 0) {
        let noResultsEl = document.createElement("p");
        noResultsEl.classList.add("no-results-msg");
        noResultsEl.textContent = "No results found. Try another keyword.";
        searchResultsEl.appendChild(noResultsEl);
        return;
    }

    for (let result of searchResults) {
        createAndAppendSearchResult(result);
    }
}

function searchWikipedia(event) {
    if (event.key === "Enter") {
        let searchInput = searchInputEl.value.trim();

        if (searchInput === "") {
            searchResultsEl.textContent = "";
            let warningEl = document.createElement("p");
            warningEl.classList.add("no-results-msg");
            warningEl.textContent = "Please enter a keyword to search.";
            searchResultsEl.appendChild(warningEl);
            return;
        }

        spinnerEl.classList.remove("d-none");
        searchResultsEl.textContent = "";

        let url = "https://apis.ccbp.in/wiki-search?search=" + encodeURIComponent(searchInput);
        let options = {
            method: "GET"
        };

        fetch(url, options)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                return response.json();
            })
            .then(function (jsonData) {
                let { search_results } = jsonData;
                displayResults(search_results);
            })
            .catch(function (error) {
                spinnerEl.classList.add("d-none");
                searchResultsEl.textContent = "";
                let errorEl = document.createElement("p");
                errorEl.classList.add("error-msg");
                errorEl.textContent = "An error occurred while fetching results. Please try again.";
                searchResultsEl.appendChild(errorEl);
                console.error("Wikipedia search failed:", error);
            });
    }
}

searchInputEl.addEventListener("keydown", searchWikipedia);