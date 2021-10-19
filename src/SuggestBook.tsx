import React, { Component } from 'react'

const SuggestBook = ({ book, open }) => (
    <div className="book" onClick={() => open(book)}>
        <img src={`https://calil.jp/cover/${book.isbn}`} />
        <div>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </div>
    </div>
)
export default SuggestBook