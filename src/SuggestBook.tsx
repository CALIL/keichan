import React, {useEffect, useRef} from 'react'
import { Card, Elevation, Tag, Icon } from "@blueprintjs/core";

import JsBarcode from 'jsbarcode'

const SuggestBook = (props: any) => {
    const book = props.book

    const svgElement = useRef(null)

    useEffect(() => {
        JsBarcode(svgElement.current, book.isbn, {
            format: 'codabar',
            width: 1.25,
            height: 26,
            margin: 10,
            fontSize: 12,
        })
    }, [])

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
                        <Tag key={tag}>{tag}</Tag>
                    ))}
                    {/* <p>{book.isbn}</p> */}
                </div>
            </div>
            <svg ref={svgElement} xmlns="http://www.w3.org/2000/svg" version="1.1"/>
            {/* <Icon icon="add" size={25} color={'#ffffff'} /> */}
        </Card>
    )
}

export default SuggestBook