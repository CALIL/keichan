import React, { Component, useRef, useState } from 'react'

import Speech from './Speech'
import Suggest from './Suggest'

const SearchForm = ({REGION, selectBook}) => {
    const queryInput = useRef(null)
    const [query, setQuery] = useState('')
    const [showSuggest, setShowSuggest] = useState(false)
    const searchSuggest = () => {
        setShowSuggest(true)
    }
    return <>
        <form action="" onSubmit={(e) => {
            e.preventDefault()
            searchSuggest()
        }}>
            <div className="bp3-input-group modifier">
                <span className="bp3-icon bp3-icon-search"></span>
                <input ref={queryInput} className="bp3-input" type="search" value={query} placeholder="キーワード or ISBNで探す" dir="auto"
                onChange={() => {
                    setQuery(queryInput.current.value)
                    searchSuggest()
                }} />
            </div>
            <Speech onEnd={(str) => {
                setQuery(str)
                searchSuggest()
            }} />
        </form>
        <div className={showSuggest ? 'show_suggest' : 'hide_suggest'}>
            <Suggest region={REGION} open={selectBook} query={query} queryInput={queryInput.current} />
        </div>

    </>
}
export default SearchForm