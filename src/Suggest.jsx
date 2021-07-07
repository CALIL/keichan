import React, { Component } from 'react';

import Book from './SuggestBook.jsx';

import ISBN from 'isbnjs';
import api from './api';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.api = null;
        this.prevQuery = '';
        this.state = {
            loading: false,
            running: false,
            books: [],
            message: '',
            hint: '',
            updateCount: 0,
        };
    }

    kill() {
        if (this.api) {
            this.api.kill();
            this.setState({
                updateCount: 0,
                running: false,
            });
        }
    }

    componentDidMount() {
        if (this.props.query === this.prevQuery) this.state.showResult = true
        if (this.props.query != '' && this.props.query != this.prevQuery) {
            this.kill();
            this.prevQuery = this.props.query;
            this.api = new api({ free: this.props.query, region: this.props.region }, (data) => {
                let newBooks = [];
                data.books.slice(0, 300).map((book) => {
                    if (book.isbn && book.isbn.length>=10) {
                        const isbn = ISBN.parse(book.isbn);
                        if (isbn) {
                            book.isbn = isbn.asIsbn13();  
                        } else {
                            book.isbn = book.isbn.replace(/-/g, '');
                        }
                        newBooks.push(book);
                    } else {
                        book.isbn = undefined
                        newBooks.push(book)
                    }
                });
                // 20件を超える場合は、完了にする
                let running = data.running;
                if (newBooks.length>20) {
                    running = false;
                    this.kill()
                }
                this.setState({
                    books: newBooks,
                    loading: running && newBooks.length<10,
                    running: running,
                    notFound: running===false && newBooks.length===0,
                    updateCount: this.state.updateCount +  1,
                    showResult: true
                });
            });
        }
    }
    componentDidUpdate() {
        this.componentDidMount();
    }
    componentWillUnmount() {
        this.kill();
    }

    render() {
        let count = 0;
        return (
            <div className={'suggest'}>
                {this.state.books.length > 0 ? (
                    <div className="results">
                        {this.state.books.map((book) => {
                            count += 1;
                            return (
                                <Book book={book} key={book.id}
                                    count={count} updateCount={this.state.updateCount} completed={!this.state.running}
                                    open={(book) => {
                                        this.props.open(book);
                                    }}
                                />
                            );
                        })}
                    </div>
                ) : (this.state.running ? (
                        <div className="message">
                            検索中...
                        </div>
                ) : null)}
                {this.state.notFound ? (
                    <div className="message">
                        見つかりませんでした
                    </div>
                ) : null}
            </div>
        );
    }
}