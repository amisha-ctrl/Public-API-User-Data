# User Data Fetcher

This project fetches user data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) and displays it on the page with styled user cards.  
It also includes error handling, a reload button to refetch data, and a custom-styled scrollbar.

## Features
- Fetches user **name**, **email**, and **address** from a public API.
- Displays data in responsive, styled cards.
- **Reload button** to refresh the data.
- Error handling for network failures.
- Custom scrollbar styled to match Bootstrap's `btn-success` color.

## Technologies Used
- **HTML5**
- **CSS3** (with Bootstrap 5 for styling)
- **JavaScript (ES6)** – using `fetch()` API for data retrieval

## How to Use
1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Click **Reload** to fetch data again.
4. Disable your internet connection to test error handling.

## API Endpoint
Data is fetched from:
https://jsonplaceholder.typicode.com/users
