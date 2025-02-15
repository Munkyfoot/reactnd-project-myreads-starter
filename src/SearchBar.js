import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchBar extends Component {
    static propTypes = {
        query: PropTypes.string.isRequired,
        setQuery: PropTypes.func.isRequired
    }

    // Pass value from search input to Search's setQuery method, called by input's onChange
    handleChange = (value) => {
        this.props.setQuery(value)
    }

    render() {
        return (
            <div className="search-books-bar">
                <Link
                    to="/"
                    className="close-search"
                >Close</Link>
                <div className="search-books-input-wrapper">
                    {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                    <input
                        autoFocus
                        type="text"
                        placeholder="Search by title or author"
                        value={this.props.query}
                        onChange={(e) => this.handleChange(e.target.value)}
                    />

                </div>
            </div>
        )
    }
}

export default SearchBar