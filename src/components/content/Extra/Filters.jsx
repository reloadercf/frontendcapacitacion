import React from 'react'
import { Select,Input } from 'antd';

const Option = Select.Option;
const Search = Input.Search;


export const Filters = ({id,handleSearch, handleCategory, search, categories}) => (
    <div className="filters-container">
        <Select  defaultValue={''} style={{ width: 120 }}  onChange={handleCategory} >
            <Option  value=''>Todos</Option>
            {categories.map((c, key)=>(
              <Option key={key} value={c.nombrecategoria}>{c.nombrecategoria}</Option>
          ))}
        </Select> 
        <Search
            placeholder="Buscar"
            value={search}
            onChange={handleSearch}
            style={{ width: "70%"}}  
        />      
    </div>
)