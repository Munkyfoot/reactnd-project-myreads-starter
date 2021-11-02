import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
    state = {
        books: [],
        query: ""
    }

    setBooks = (queryBooks) => {
        const books = queryBooks.map((queryBook) => {
            const existingBooks = this.props.books.filter((book) => book.id === queryBook.id)
            return existingBooks.length === 0 ? queryBook : existingBooks[0]
        })

        this.setState(() => ({
            books: books
        }))
    }

    clearBooks = () => {
        this.setBooks([])
    }

    setQuery = (query) => {
        this.setState(() => ({
            query: query
        }), () => {
            this.updateSearch()
        })
    }

    updateSearch = () => {
        this.state.query.length > 0 ?
            BooksAPI.search(this.state.query).then((books) => {
                console.log(books)
                "error" in books ? this.clearBooks() : this.setBooks(books)
            }
            )
            : this.clearBooks()

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

    render() {
        return (
            <div className="search-books">
                <SearchBar query={this.state.query} setQuery={this.setQuery} />
                <SearchResults books={this.state.books} />
            </div>
        )
    }
}

export default Search