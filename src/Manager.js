import React from 'react'
import Bookshelf from './Bookshelf.js'
import { Link } from 'react-router-dom'

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

export default Manager