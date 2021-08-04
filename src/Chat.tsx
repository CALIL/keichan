import React, { useState, useEffect } from 'react'

import { Button, Intent, Spinner, Card, Elevation, Tag, Icon } from "@blueprintjs/core";

const Chat = (props) => {
    return (
        <div id="chat">
            <header>
                <h1>カーリルtoolbox: keichan</h1>
            </header>
            <main>
                <div className="left">
                    <div className="barcode active">
                        <Tag large className="tag">100012</Tag>
                        <p>1Q84 Book1</p>
                    </div>
                    <div className="barcode">
                        <Tag large className="tag">100013</Tag>
                        <p>1Q84 Book2</p>
                    </div>
                </div>
                <div className="main">
                    <Card className="card active" interactive={true} elevation={Elevation.TWO}>
                        <div>
                            <Tag className="tag" large>100012</Tag>
                            <Tag className="tag">管理バーコード</Tag>
                        </div>
                        <Icon icon="delete" size={25} color={'#ffffff'} />
                    </Card>
                    <Card className="card indent" interactive={true} elevation={Elevation.TWO}>
                        <div>
                            <Tag className="tag">9784103534228</Tag>
                            <Tag className="tag">ISBN</Tag>
                            <h3>1Q84 Book 1 村上春樹</h3>
                        </div>
                        <Icon icon="delete" size={25} color={'#ffffff'} />
                    </Card>
                    <Card className="card indent" interactive={true} elevation={Elevation.TWO}>
                        <div>
                            <Tag className="tag">1005</Tag>
                            <Tag className="tag">棚番号</Tag>
                        </div>
                        <Icon icon="delete" size={25} color={'#ffffff'} />
                    </Card>
                </div>
                <div className="right">
                </div>
                {/* <div className="screen">
                <div className="conversation">
                    <div className="messages messages--received">
                        <div className="message">おはようございます</div>
                        <div className="message">バーコードリーダーが接続されました</div>
                    </div>
                    <div className="messages messages--sent">
                        <div className="message">読み込み</div>
                        <div className="message">9784103534228</div>
                    </div>
                    <div className="messages messages--received">
                        <div className="message">ISBNを読み込みました</div>
                        <div className="message">本が見つかりました!</div>
                        <div className="message book">
                            <img className="thumbnail" src="https://cover.openbd.jp/9784103534228.jpg" alt="" />
                            <div>
                                <span className="title">1Q84 BOOK 1</span>
                                <span className="author">村上 春樹  (著)</span>
                                <span className="publisher">新潮社</span>
                                <span className="pubdate">2009/5/29</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            </main>
        </div>
    )
}

export default Chat