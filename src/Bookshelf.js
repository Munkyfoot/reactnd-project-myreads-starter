import React from 'react'
import BooksGrid from './BooksGrid.js'
import PropTypes from 'prop-types'

const Bookshelf = (props) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelf.name}</h2>
        <div className="bookshelf-books">
            <BooksGrid books={props.books} updateBook={props.updateBook} />
        </div>
    </div>
)

Bookshelf.propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
}

export default Bookshelf
