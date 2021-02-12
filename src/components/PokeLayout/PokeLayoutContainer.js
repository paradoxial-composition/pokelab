import React, { useState, useEffect} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {getPokemons} from '../../redux/actions/pokemons';
import PokeLayout from './PokeLayout';
import {Progress} from 'antd';

let PokeLayoutContainer = (props) => {
	//fetch request level 1 (10 pokemon objects that have name and url for 2nd level fetch)
	const dispatch = useDispatch()
	const pokeData = useSelector(state => state.pokemons.pokemons)
	const loading = useSelector(state => state.pokemons.loading)
	const error = useSelector(state => state.pokemons.error)
	const timer = 2000;
	
	useEffect( () => {
		dispatch(getPokemons())
	  }, [])

	let methods = {
		...props,
		pokeData,
		loading,
		error,
		timer
	}

	return (
		<PokeLayout {...methods} />
	)
}

export default PokeLayoutContainer;