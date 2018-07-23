import React from 'react'
import { Input } from 'antd';
const Search = Input.Search;


export const Buscador=()=>{
    return(
        <Search
        style={{marginTop:"4em"}}
        placeholder="Que modulo estas buscando"
        onSearch={value => console.log(value)}
        enterButton
      />
    )
}