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
        queryBooks: [],
        query: ""
    }

    setQuery = (query) => {
        this.setState(() => ({
            query: query
        }), () => {
            this.updateSearch()
        })
    }

    setQueryBooks = (queryBooks) => {
        this.setState(() => ({
            queryBooks: queryBooks.map((queryBook) => {
                const existingBooks = this.props.books.filter((book) => book.id === queryBook.id)
                return existingBooks.length === 0 ? queryBook : existingBooks[0]
            })
        }))
    }

    clearQueryBooks = () => {
        this.setQueryBooks([])
    }

    updateSearch = () => {
        this.state.query.length > 0 ?
            BooksAPI.search(this.state.query).then((queryBooks) => {
                "error" in queryBooks ? this.clearQueryBooks() : this.setQueryBooks(queryBooks)
            }
            )
            : this.clearQueryBooks()

        this.props.history.push({
            pathname: this.props.location.pathname,
            search: this.state.query.length > 0 ? new URLSearchParams({ q: this.state.query }).toString() : ""
        })
    }

    componentDidMount() {
        let searchParams = new URLSearchParams(this.props.location.search)

        if (searchParams.has("q")) {
            this.setQuery(searchParams.get("q"))
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.books !== this.props.books) {
            this.updateSearch()
        }
    }

    render() {
        return (
            <div className="search-books">
                <SearchBar query={this.state.query} setQuery={this.setQuery} />
                <SearchResults books={this.state.queryBooks} updateBook={this.props.updateBook} />
            </div>
        )
    }
}

export default Search