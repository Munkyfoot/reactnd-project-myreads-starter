import React from 'react'
import BooksGrid from './BooksGrid.js'

const SearchResults = (props) => (
    <div className="search-books-results">
        <BooksGrid books={props.books} updateBook={props.updateBook} />
    </div>
)

export default SearchResults

