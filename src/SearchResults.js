import React from 'react'
import BooksGrid from './BooksGrid.js'
import PropTypes from 'prop-types'

const SearchResults = (props) => (
    <div className="search-books-results">
        <BooksGrid books={props.books} updateBook={props.updateBook} />
    </div>
)

SearchResults.propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
}

export default SearchResults

