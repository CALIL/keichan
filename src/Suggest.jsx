import { useEffect, useRef, useState } from 'react';

import ISBN from 'isbn-utils';
import api from './api';
import {getOpenBD} from './getBooks';
import SuggestBook from './SuggestBook';

const Suggest = ({ query, region, queryInput, open }) => {
    const suggestRef = useRef(null);
    const apiRef = useRef(null);
    const prevQueryRef = useRef('');

    const [books, setBooks] = useState([]);
    const [running, setRunning] = useState(false);
    const [notFound, setNotFound] = useState(false);

    const kill = () => {
        if (apiRef.current) {
            apiRef.current.kill();
            setRunning(false);
        }
    };

    // queryInputの位置に合わせて表示幅を調整する（毎レンダー後に実行）
    useEffect(() => {
        const suggestDiv = suggestRef.current;
        if (suggestDiv && queryInput) {
            const rect = queryInput.getBoundingClientRect();
            suggestDiv.style.width = `${rect.right - rect.left}px`;
        }
    });

    // queryが変わったときだけ検索をやり直す（毎レンダー後にprevQueryRefと比較）
    useEffect(() => {
        if (query === '' || query === prevQueryRef.current) return;
        kill();
        prevQueryRef.current = query;
        apiRef.current = new api({ free: query, region }, async (data) => {
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
            let isRunning = data.running;
            if (newBooks.length>20) {
                isRunning = false;
                kill()
            }
            const isbns = []
            newBooks.forEach((book) => {
                isbns.push(book.isbn)
            })
            const openBDBooks = await getOpenBD(isbns)
            console.log(newBooks)
            const resultBooks = newBooks.map((newBook) => {
                const openBDBook = openBDBooks.find((openBDBook) => openBDBook.isbn === newBook.isbn)
                if (openBDBook) {
                    return openBDBook
                } else {
                    return newBook
                }
            })
            setBooks(resultBooks);
            setRunning(isRunning);
            setNotFound(isRunning === false && newBooks.length === 0);
        });
    });

    useEffect(() => {
        return () => kill();
    }, []);

    return (
        <div className="suggest" ref={suggestRef}>
            {books.length > 0 ? (
                <div className="results">
                    {books.map((book, index) => {
                        return (
                            <SuggestBook book={book} key={index}
                                open={(book) => {
                                    open(book);
                                }}
                            />
                        );
                    })}
                </div>
            ) : (running ? (
                    <div className="message">
                        検索中...
                    </div>
            ) : null)}
            {notFound ? (
                <div className="message">
                    見つかりませんでした
                </div>
            ) : null}
        </div>
    );
};

export default Suggest;
