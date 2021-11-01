import React, { Component } from 'react'
import Book from './Book.js'

class BooksGrid extends Component {
    render() {
        return (
            <ol className="books-grid">
                <li>
                    <Book />
                </li>
            </ol>
        )
    }
}

export default BooksGrid