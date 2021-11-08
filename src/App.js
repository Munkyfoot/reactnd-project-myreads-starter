import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Manager from './Manager.js'
import Search from './Search'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    // An array of objects containing shelf display names and related ids for BooksAPI backend
    shelves: [
      {
        name: "Currently Reading",
        id: "currentlyReading"
      },
      {
        name: "Want to Read",
        id: "wantToRead"
      },
      {
        name: "Read",
        id: "read"
      }
    ],
    // An array used to store a local copy of book objects retrieved from BooksAPI 
    books: []
  }

  // Set books array in local state
  setBooks = (books) => {
    this.setState(() => ({
      books: books
    }))
  }

  // Retrieve books from BooksAPI and store to local state using setBooks
  updateBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setBooks(books)
    })
  }

  // Call updateBooks when component has loaded to update local state
  componentDidMount() {
    this.updateBooks()
  }

  // Update the shelf data for a book in both local state and in backend
  updateBook = (book, shelf) => {
    // Update book locally for responsiveness
    const tempBooks = this.state.books.filter((b) => (b.id !== book.id))
    const tempBook = book
    tempBook.shelf = shelf
    tempBooks.push(tempBook)
    this.setBooks(tempBooks)

    // Update book in backend
    BooksAPI.update(book, shelf).then((book) => {
      this.updateBooks()
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Manager shelves={this.state.shelves} books={this.state.books} updateBook={this.updateBook} />
        )}
        />

        <Route exact path='/search' render={({ history, location }) => (
          <Search shelves={this.state.shelves} books={this.state.books} updateBook={this.updateBook} history={history} location={location} />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
