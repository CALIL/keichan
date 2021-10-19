import React, { Component } from 'react';

export default class SuggestBook extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <div className="book" onClick={() => this.props.open(this.props.book)}>
                <img src={`https://calil.jp/cover/${this.props.book.isbn}`} />
                <div>
                    <div className="title">{this.props.book.title}</div>
                    <div className="author">{this.props.book.author}</div>
                </div>
            </div>
        );
    }
}
