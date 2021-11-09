# MyReads Project

This is a React app which allows a user to organize books from the included BooksAPI into different shelves. The user may search for books they have yet to categorize and assign them to the different shelves. They may also remove books from shelves.

## TL;DR

To get started:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with the app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── Book.js # Used to render the UI for a book object.
    ├── BooksGrid.js # Used to display an array of book objects.
    ├── Bookshelf.js # Used to display a bookshelf and its related books.
    ├── Manager.js # Used to display to main window of the app.
    ├── Search.js # Used to display the search window of the app.
    ├── SearchBar.js # Used to display search input UI.
    ├── SearchResults.js # Used to display books retrieved from search.
    ├── icons # Icon images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   ├── arrow-drop-down.svg
    |   └── placeholder.svg
    ├── index.css # Global styles.
    └── index.js # Used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

Udacity has provided a backend server for use in this app. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository contains custom code as well as code provided by Udacity. It is based off of the MyReads starter template repository which can be found [here](https://github.com/udacity/reactnd-project-myreads-starter).

Book placeholder icon ('/src/icons/placeholder.svg') provided by Bootstrap. The original file can be found [here](https://icons.getbootstrap.com/icons/book/).
