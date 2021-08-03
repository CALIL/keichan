import React, { useState, useEffect } from 'react'

const Chat = (props) => {
    return (
        <div id="chat">
            <h1>Chat</h1>
            <div className="screen">
                <div className="conversation">
                    <div className="messages messages--received">
                        <div className="message">This codepen is an exemple of</div>
                        <div className="message">how to create the Facebook thumb up</div>
                    </div>
                    <div className="messages messages--sent">
                        <div className="message">Try to type</div>
                        <div className="message">or click the thumb up!</div>
                        <div className="message">;)</div>
                    </div>
                    <div className="messages messages--received">
                        <div className="message">Enjoy!</div>
                    </div>
                </div>
                <div className="text-bar">
                    <form className="text-bar__field" id="form-message">
                        <input type="text" placeholder="Type or thumb up ;)" />
                    </form>
                    <div className="text-bar__thumb">
                        <div className="thumb"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat