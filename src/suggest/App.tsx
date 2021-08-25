import React, { useState, useEffect } from 'react'

import { Button, Intent, Spinner, Card, Elevation, Tag, Icon, InputGroup } from "@blueprintjs/core";

import data from './search.json'

console.log(data.result)

const books = data.result.reverse().filter((book) => !book.isbn.includes('9784088820118'))

const App = (props) => {
    return (
        <div id="suggests">
            <header>
                <h1>カーリルtoolbox: keichan</h1>
            </header>
            <main>
                <div className="left">
                    <div className="barcode active">
                        <Tag large className="tag">100014</Tag>
                    </div>
                    <div className="barcode">
                        <Tag large className="tag">100013</Tag>
                        <p>SPY×FAMILY 1</p>
                    </div>
                    <div className="barcode">
                        <Tag large className="tag">100012</Tag>
                        <p>1Q84 Book2</p>
                    </div>
                </div>
                <div className="main">
                    {/* <form action="">
                        <input type="text" className="bp3-input" value="9784088820118" />
                    </form> */}
                    <Card className="card active" interactive={true} elevation={Elevation.TWO}>
                        <div>
                            <Tag className="tag" large>100014</Tag>
                            <Tag className="tag">管理バーコード</Tag>
                        </div>
                        <Icon icon="delete" size={25} color={'#ffffff'} />
                    </Card>
                    {/* <Card className="card indent" interactive={true} elevation={Elevation.TWO}>
                        <div>
                            <Tag className="tag">9784088820118</Tag>
                            <Tag className="tag">ISBN</Tag>
                            <h3>SPY×FAMILY 1</h3>
                            <img className="thumbnail" src="https://cover.openbd.jp/9784088820118.jpg" alt="" />
                        </div>
                        <Icon icon="delete" size={25} color={'#ffffff'} />
                    </Card> */}
                    <div className="addMore">
                        <InputGroup small placeholder="タイトル著者名を自分で入力" />
                        <InputGroup small placeholder="メモを追加" />
                    </div>
                    <div className="nextBook">
                        <h2>もしかして次の本は<span>(SPY×FAMILY 1より推定)</span></h2>
                        {books.map((book) => {
                            return (
                                <Card className="card">
                                    <div className="card-header">
                                        <h3>{book.title}</h3>
                                        <p className="author">{book.author}</p>
                                    </div>
                                    <Icon icon="add" size={25} color={'#ffffff'} />
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App