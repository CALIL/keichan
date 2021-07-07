import React, { Component } from 'react';

export default class Book extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <div className="book" onClick={() => this.props.open(this.props.book)}>
                {this.props.book.isbn && (this.props.count < this.props.updateCount * 10 || this.props.completed) ? (
                    <img src={`https://calil.jp/cover/${this.props.book.isbn}`} />
                ) : null}
                <div>
                    <div className="title">{this.props.book.title}</div>
                    <div className="author">{this.props.book.author}</div>
                </div>
            </div>
        );
    }
}
