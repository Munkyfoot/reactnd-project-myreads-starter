import React from 'react'
import Bookshelf from './Bookshelf.js'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Manager = (props) => (
    <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div>
                {props.shelves.map((shelf) => (
                    <Bookshelf key={shelf.id} shelf={shelf} books={props.books.filter((book) => (book.shelf === shelf.id))} updateBook={props.updateBook} />
                ))}
            </div>
        </div>
        <div className="open-search">
            <Link
                to="/search"
            ><button>Add a book</button></Link>
        </div>
    </div>
)

Manager.propTypes = {
    shelves: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
}

export default Manager