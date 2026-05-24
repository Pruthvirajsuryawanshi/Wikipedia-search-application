# Wikipedia Search Application 🔎📚

A dynamic **Wikipedia Search Application** built using **HTML, CSS, and JavaScript** that enables users to search Wikipedia articles and view results instantly. The application fetches data from an API and displays article titles, links, and descriptions dynamically without refreshing the page.

This project demonstrates practical implementation of:

- DOM Manipulation
- Fetch API
- Asynchronous JavaScript
- Event Handling
- Dynamic Rendering
- API Integration
- Loading Indicators (Spinner)

---

## 🚀 Features

✔ Search Wikipedia articles instantly  
✔ Fetch real-time results using API requests  
✔ Press **Enter** to trigger search  
✔ Dynamic rendering of results using JavaScript  
✔ Loading spinner while fetching data  
✔ Opens article links in a new tab  
✔ Clean and interactive UI  
✔ No page reload required  

---

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- DOM Manipulation
- Event Listeners
- REST API

---

## 📸 How It Works

1. User enters a keyword into the search box.
2. Presses **Enter**.
3. Application sends an API request.
4. Matching Wikipedia results are fetched.
5. Results are displayed dynamically with:
   - Title
   - URL
   - Description

---

## ⚙ Core Functionalities

### 1. Search Trigger

Search starts when the Enter key is pressed:

```js
searchInputEl.addEventListener("keydown", searchWikipedia);
```

---

### 2. API Fetch Request

Data is fetched asynchronously:

```js
fetch(url, options)
  .then(response => response.json())
  .then(data => {
      displayResults(data.search_results);
  });
```

---

### 3. Dynamic DOM Rendering

Results are created using:

```js
document.createElement();
```

Elements rendered dynamically:

- Title
- URL
- Description
- Result container

---

### 4. Loading Spinner

Spinner appears while fetching data:

```js
spinnerEl.classList.remove("d-none");
```

Hidden after loading:

```js
spinnerEl.classList.add("d-none");
```

---

## 📂 Project Structure

```bash
Wikipedia-Search-Application/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 📌 Main Functions

### `searchWikipedia()`

Responsible for:

- Detecting Enter key
- Triggering API call
- Showing spinner
- Clearing previous results

---

### `displayResults()`

Responsible for:

- Hiding spinner
- Iterating through fetched results
- Displaying results dynamically

---

### `createAndAppendSearchResult()`

Responsible for creating:

- Article title
- URL
- Description
- Result container

and appending them to the webpage.

---

## 🧠 Concepts Practiced

This project helps strengthen understanding of:

- JavaScript Fundamentals
- DOM Manipulation
- APIs
- Promises
- Fetch API
- Event Handling
- Dynamic UI Updates
- Asynchronous Programming

---

## 🔥 Future Improvements

Possible enhancements:

- Add Search Button support
- Dark Mode
- Pagination
- Better UI/UX
- Error Handling
- Search Suggestions
- Recent Searches
- Voice Search
- Debouncing API calls

---

## ⚠ Known Limitations

Current limitations:

- Search works only with Enter key
- No API error handling
- Empty input validation not implemented

---

## 📖 Learning Outcome

Building this project improved understanding of how modern web applications work through:

**User Input → API Request → Response Handling → Dynamic Rendering → Better User Experience**

---

## 🤝 Contribution

Contributions and improvements are welcome.

Steps:

1. Fork repository  
2. Create branch  
3. Make changes  
4. Commit updates  
5. Open Pull Request  

---

## ⭐ Support

If you found this project useful, consider giving the repository a **Star ⭐**

---

## 👨‍💻 Author

Built to practice **JavaScript, API integration, Fetch API, and DOM manipulation** while creating an interactive Wikipedia search experience.
