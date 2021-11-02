import React, { Component } from 'react'
import placeholder from './icons/placeholder.svg'

class Book extends Component {
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${"imageLinks" in this.props.book ? this.props.book.imageLinks.smallThumbnail : placeholder})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={"shelf" in this.props.book ? this.props.book.shelf : "none"}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
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