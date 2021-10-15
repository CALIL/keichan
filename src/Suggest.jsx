import React, { Component } from 'react';

import Book from './SuggestBook.jsx';

import ISBN from 'isbnjs';
import api from './api';
import {getOpenBD} from './getBooks';

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
        // console.log(this.props.queryInput)
        const suggestDiv = this.refs.suggest;
        if (suggestDiv && this.props.queryInput) {
            const queryInput = this.props.queryInput;
            var rect = queryInput.getBoundingClientRect();
            suggestDiv.style.width = `${rect.right - rect.left}px`
        }

        if (this.props.query === this.prevQuery) this.state.showResult = true
        if (this.props.query != '' && this.props.query != this.prevQuery) {
            this.kill();
            this.prevQuery = this.props.query;
            this.api = new api({ free: this.props.query, region: this.props.region }, async (data) => {
                let newBooks = [];
                data.books.slice(0, 30).map((book) => {
                    if (book.isbn && book.isbn.length>=10) {
                        book.isbn = book.isbn.replace(/-/g, '');
                        let isbn = ISBN.parse(book.isbn);
                        if (isbn) {
                            book.isbn = isbn.asIsbn13();
                        } else {
                            isbn = ISBN.parse(book.id);
                            if (isbn) book.isbn = isbn.asIsbn13();
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
                const isbns = []
                newBooks.forEach((book) => {
                    isbns.push(book.isbn)
                })
                const openBDBooks = await getOpenBD(isbns)
                // console.log(openBDBooks)
                console.log(newBooks)
                const books = newBooks.map((newBook) => {
                    const openBDBook = openBDBooks.find((openBDBook) => openBDBook.isbn === newBook.isbn)
                    if (openBDBook) {
                        return openBDBook
                    } else {
                        return newBook
                    }
                })
                this.setState({
                    books: books,
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
            <div className="suggest" ref="suggest">
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
