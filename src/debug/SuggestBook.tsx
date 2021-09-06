import React from 'react'
import { Card, Elevation, Tag, Icon } from "@blueprintjs/core";

const SuggestBook = (props: any) => {
    const book = props.book
    return (
        <Card key={book.isbn} className="card" interactive={true} elevation={Elevation.TWO}>
            <div className="card-header">
                {book.cover ? (
                    <img src={book.cover} alt={book.title} />
                ) : null}
                <div>
                    <h3>{[book.title, book.volume].join(' ')}</h3>
                    <p className="author">{book.author}</p>
                    {/* <p>{book.pubdate}</p>
                    <p>{book.publisher}</p> */}
                    {book.tags.map((tag) => (
                        <Tag>{tag}</Tag>
                    ))}
                    <p>{book.isbn}</p>
                </div>
            </div>
            <Icon icon="add" size={25} color={'#ffffff'} />
        </Card>
    )
}

export default SuggestBook