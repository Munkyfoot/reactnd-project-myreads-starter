import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class Search extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateBook: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired
    }

    state = {
        // An array used to store books retrieved from BooksAPI search
        queryBooks: [],
        // A string used to perform a search query from BooksAPI
        query: ""
    }

    // Set the query string in state and calls updateSearch after state is updated 
    setQuery = (query) => {
        this.setState(() => ({
            query: query
        }), () => {
            this.updateSearch()
        })
    }

    // Take array of books from BooksAPI search response and replace book objects with book object of same ID if present in App.state.books
    setQueryBooks = (queryBooks) => {
        this.setState(() => ({
            queryBooks: queryBooks.map((queryBook) => {
                const existingBooks = this.props.books.filter((book) => book.id === queryBook.id)
                return existingBooks.length === 0 ? queryBook : existingBooks[0]
            })
        }))
    }

    // Empty queryBooks array in local state
    clearQueryBooks = () => {
        this.setQueryBooks([])
    }

    // Retrieve array of books from BooksAPI search method using query string in local state and pass results to setQueryBooks
    // Call clearQueryBooks if response contains an error
    updateSearch = () => {
        this.state.query.length > 0 ?
            BooksAPI.search(this.state.query).then((queryBooks) => {
                "error" in queryBooks ? this.clearQueryBooks() : this.setQueryBooks(queryBooks)
            }
            )
            : this.clearQueryBooks()

        // Push this query to router history to allow expected functionality of browser UI
        this.props.history.push({
            pathname: this.props.location.pathname,
            search: this.state.query.length > 0 ? new URLSearchParams({ q: this.state.query }).toString() : ""
        })
    }

    // When component loads, check for search query in url and update local state if present
    componentDidMount() {
        let searchParams = new URLSearchParams(this.props.location.search)

        if (searchParams.has("q")) {
            this.setQuery(searchParams.get("q"))
        }
    }

    // On change of state in component or parent, call updateSearch if App.state.books array has changed
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.books !== this.props.books) {
            this.updateSearch()
        }
    }

    render() {
        return (
            <div className="search-books">
                <SearchBar query={this.state.query} setQuery={this.setQuery} />
                <SearchResults shelves={this.props.shelves} books={this.state.queryBooks} updateBook={this.props.updateBook} />
            </div>
        )
    }
}

export default Search