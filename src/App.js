import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Manager from './Manager.js'
import Search from './Search'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
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
    books: []
  }

  setBooks = (books) => {
    this.setState(() => ({
      books: books
    }))
  }

  updateBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setBooks(books)
    })
  }

  componentDidMount() {
    this.updateBooks()
  }

  updateBook = (book, shelf) => {
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
          <Search books={this.state.books} history={history} location={location} updateBook={this.updateBook} />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
