import React from 'react'
import BooksGrid from './BooksGrid.js'

const Bookshelf = (props) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelf.name}</h2>
        <div className="bookshelf-books">
            <BooksGrid books={props.books} updateBook={props.updateBook} />
        </div>
    </div>
)

export default Bookshelf
