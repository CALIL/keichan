import React, { useState, useEffect } from 'react'

// RCE CSS
import 'react-chat-elements/dist/main.css';
// MessageBox component
import { SideBar, MessageList, MessageBox, ChatItem, SystemMessage, Avatar } from 'react-chat-elements';


const Chat = (props) => {
    return (
        <div id="chat">
            <h1>Chat</h1>
            <MessageBox />
            <ChatItem
                avatar={'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'}
                alt={'Reactjs'}
                title={'Facebook'}
                subtitle={'What are you doing?'}
                date={new Date()}
                unread={0} />

            <MessageBox
                position={'left'}
                type={'photo'}
                text={'react.svg'}
                data={{
                    uri: 'https://facebook.github.io/react/img/logo.svg',
                    status: {
                        click: false,
                        loading: 0,
                    }
                }} />

            <MessageBox
                reply={{
                    photoURL: 'https://facebook.github.io/react/img/logo.svg',
                    title: 'elit magna',
                    titleColor: '#8717ae',
                    message: 'Aliqua amet incididunt id nostrud',
                }}
                onReplyMessageClick={() => console.log('reply clicked!')}
                position={'left'}
                type={'text'}
                text={'Tempor duis do voluptate enim duis velit veniam aute ullamco dolore duis irure.'} />
            <SystemMessage
                text={'End of conversation'} />
            <MessageList
                className='message-list'
                lockable={true}
                toBottomHeight={'100%'}
                dataSource={[
                    {
                        position: 'right',
                        type: 'text',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                        date: new Date(),
                    },
                    {
                        position: 'left',
                        type: 'text',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                        date: new Date(),
                    },
                    {
                        position: 'right',
                        type: 'text',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                        date: new Date(),
                    },
                ]} />
            <SideBar
                top={
                    <div>'TOP' area</div>
                }
                center={
                    <div>'CENTER' area</div>
                }
                bottom={
                    <div>'BOTTOM' area</div>
                } />
                <Avatar
    src={'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'}
    alt={'logo'}
    size="large"
    type="circle flexible"/>
        </div>


    )
}

export default Chat