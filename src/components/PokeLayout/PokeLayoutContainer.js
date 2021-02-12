import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokeLayout from './PokeLayout';
import {Progress} from 'antd';

let PokeLayoutContainer = (props) => {
	//fetch request level 1 (10 pokemon objects that have name and url for 2nd level fetch)
	let [pokeData, setPokeData] = useState([])
	let [loading, setLoading] = useState(true)
	const timer = 2000;

	
	useEffect( () => {
		axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`)
		  .then(res => {
			setPokeData(res.data.results)
		  })
		  .then(() => {
			console.log(pokeData)
			setTimeout( () => {
				setLoading(false)
			}, timer)
		  })
	  }, [])

	let methods = {
		...props,
		pokeData,
		loading,
		timer
	}

	return (
		<PokeLayout {...methods} />
	)
}

export default PokeLayoutContainer;