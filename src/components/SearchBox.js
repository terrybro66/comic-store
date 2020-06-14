import React from 'react'
import {
    SearchComics
  } from './styledComponents'

const SearchBox = () => {

    return ( 
        <div>
            <SearchComics type='search' placeholder='search comics' />
        </div>
    )
}

export default SearchBox;