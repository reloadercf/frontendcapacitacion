import React from 'react'
import { Select,Input } from 'antd';

const Option = Select.Option;
const Search = Input.Search;


export const Filters = ({id,handleSearch, handleCategory, search, categories}) => (
    <div className="filters-container">
        <div>
        Categoria: <Select  defaultValue={''} style={{ width: 120 }}  onChange={handleCategory} >
            <Option  value=''>Todo</Option>
            {categories.map((c, key)=>(
              <Option key={key} value={c.nombrecategoria}>{c.nombrecategoria}</Option>
          ))}
        </Select> </div>
        
            <Search
            placeholder="Buscar: Tutorial, video, curso o complemento..."
            value={search}
            onChange={handleSearch}
            style={{ width: "70%"}}  
        />  
    </div>
)