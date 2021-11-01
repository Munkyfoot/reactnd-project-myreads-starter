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

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books: books
      }))
      console.log(this.state.books);
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Manager shelves={this.state.shelves} books={this.state.books} />
        )}
        />

        <Route exact path='/search' render={() => (
          <Search />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
