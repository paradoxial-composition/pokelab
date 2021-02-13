import React, { useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {getPokemons} from '../../redux/actions/pokemons';

import './filter.scss'
import {Affix, Select} from 'antd';

const { Option } = Select;

const Filter = () => {
    const [top, setTop] = useState(10);
    const types = useSelector(state => state.pokemons.types)
    const pokeCardData = useSelector(state => state.pokemons.pokemonCardInfo)
    const dispatch = useDispatch()
    
	let handleChange = (value) => {
        dispatch(getPokemons({filterUrl: value}))
        console.log(pokeCardData)
	}
    return (
        <Affix className="filter-container" offsetTop={top}>
            <Select placeholder="Filter by type." bordered={false} className="filter-select" onChange={handleChange}>
                {types.map( (type, index) => (
                    <Option key={index}  value={type.url}>{type.name}</Option>
                ))}
            </Select>
        </Affix>
    );
}

export default Filter;
    