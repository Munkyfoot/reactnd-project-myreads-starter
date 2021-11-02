import React from 'react'
import Book from './Book.js'

const BooksGrid = (props) => (
    <ol className="books-grid">
        {props.books.map((book) => (
            <li key={book.id}>
                <Book book={book} updateBook={props.updateBook} />
            </li>
        ))}
    </ol>
)

export default BooksGrid