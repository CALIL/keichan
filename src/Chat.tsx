import React, { useState, useEffect } from 'react'


import { Button, Intent, Spinner } from "@blueprintjs/core";
 

// using JSX:
// const mySpinner = <Spinner intent={Intent.PRIMARY} />;
 
// use React.createElement if you're not using JSX.
// const myButton = React.createElement(Button, { intent: Intent.SUCCESS }, "button content");

const Chat = (props) => {
    return (
        <div id="chat">
            <div className="excel">
                <Button>Click me!</Button>

            </div>
            <div className="screen">
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
            </div>
        </div>
    )
}

export default Chat