import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {getPokemons} from '../../redux/actions/pokemons';

import './filter.scss'
import {Affix, Select} from 'antd';

const { Option } = Select;

const Filter = () => {
    const types = useSelector(state => state.pokemons.types)
    const dispatch = useDispatch()
    
    // const handleClear = () => dispatch(getPokemons({offset: 0})) 
    const  handleChange = (value) => {
        if(value === 'clear') {
            dispatch(getPokemons({offset: 0, withClear: true})) 
        } else {
            dispatch(getPokemons({filterUrl: value})) 
        }
    }
    
    return (
        <Affix className="filter-container" offsetTop={10}>
            <Select 
                placeholder="Filter by type." 
                bordered={false} 
                className="filter-select"
                onChange={handleChange}
                
            >
                <Option value={'clear'}>{'--'}</Option>
                {types.map( (type, index) => (
                    <Option key={index}  value={type.url}>{type.name}</Option>
                ))}
            </Select>
        </Affix>
    );
}

export default Filter;
    