import React from 'react'
import Book from './Book.js'
import PropTypes from 'prop-types'

const BooksGrid = (props) => (
    <ol className="books-grid">
        {props.books.map((book) => (
            <li key={book.id}>
                <Book shelves={props.shelves} book={book} updateBook={props.updateBook} />
            </li>
        ))}
    </ol>
)

BooksGrid.propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
}

export default BooksGrid