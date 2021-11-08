import React, { Component } from 'react'
import placeholder from './icons/placeholder.svg'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        updateBook: PropTypes.func.isRequired
    }

    // Pass book object and shelf id to App's updateBook method, called by select's onChange
    handleChange = (value) => {
        this.props.updateBook(this.props.book, value)
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${"imageLinks" in this.props.book ? this.props.book.imageLinks.thumbnail : placeholder})` }}></div>
                    <div className="book-shelf-changer">
                        <select
                            value={"shelf" in this.props.book ? this.props.book.shelf : "none"}
                            onChange={(e) => this.handleChange(e.target.value)}
                        >
                            <option value="move" disabled>Move to...</option>
                            {this.props.shelves.map((shelf) => (
                                <option value={shelf.id}>{shelf.name}</option>
                            ))}
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                {"authors" in this.props.book && (
                    <div className="book-authors">{this.props.book.authors.join(", ")}</div>
                )}
            </div>
        )
    }
}

export default Book