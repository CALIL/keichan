import React, { useRef, useState, useEffect } from 'react'

import Speech from './Speech'
import Suggest from './Suggest'

const SearchForm = ({REGION, selectBook}) => {
    const queryInput = useRef(null)
    const [query, setQuery] = useState('')
    const [showSuggest, setShowSuggest] = useState(false)
    useEffect(() => {
        document.body.addEventListener('click', (e: any) => {
            setShowSuggest(false)
        });
        return () => {
            document.body.removeEventListener('click', (e: any) => {
                setShowSuggest(false)
            });
        }
    }, [])
    return <>
        <form action="" onSubmit={(e) => {
            e.preventDefault()
            setShowSuggest(true)
        }}>
            <div className="bp6-input-group modifier">
                <span className="bp6-icon bp6-icon-search"></span>
                <input ref={queryInput} className="bp6-input" type="search" value={query} placeholder="キーワード or ISBNで探す" dir="auto"
                onChange={() => {
                    setQuery(queryInput.current.value)
                    setShowSuggest(true)
                }} />
            </div>
            <Speech onEnd={(str) => {
                setQuery(str)
                setShowSuggest(true)
            }} />
        </form>
        <div className={showSuggest ? 'show_suggest' : 'hide_suggest'}>
            <Suggest region={REGION} open={selectBook} query={query} queryInput={queryInput.current} />
        </div>
    </>
}
export default SearchForm