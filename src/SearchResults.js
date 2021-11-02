import React, { Component } from 'react'
import BooksGrid from './BooksGrid.js'

class SearchResults extends Component {
    render() {
        return (
            <div className="search-books-results">
                <BooksGrid books={this.props.books} updateBook={this.props.updateBook} />
            </div>
        )
    }
}

export default SearchResults

