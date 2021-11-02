import React, { Component } from 'react'
import Book from './Book.js'

class BooksGrid extends Component {
    render() {
        return (
            <ol className="books-grid">
                {this.props.books.map((book) => (
                    <li key={book.id}>
                        <Book book={book} updateBook={this.props.updateBook} />
                    </li>
                ))}
            </ol>
        )
    }
}

export default BooksGrid