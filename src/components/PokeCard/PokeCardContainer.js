import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokeCard from './PokeCard';

let PokeCardContainer = (props) => {
	// fetch request lvl 2
	// let [cardInfo, setCardInfo] = useState({})
	// let [cardLoading, setCardLoading] = useState(true)
	// console.log(props.pokeCardPayload.url)
	// useEffect( () => {
	// 	axios.get(props.pokeCardPayload.url)
	// 	  .then(res => {
	// 		  console.log(res)
	// 		  setCardInfo(res.data)
	// 	  })
	// 	  .finally(() => { 
	// 		console.log(cardInfo)
	// 		setCardLoading(false)
	// 	  })
	//   }, [])

	 

	let pokeInfo = {
		id: '4',
		name: 'Charmander',
		pokeTypes: [
			{
				type: {
					name: 'fire'
				}
			},
			{
				type: {
					name: 'dragon'
				}
			}
		],
		abilities: [
			{
				ability: {
					name:"blaze",
					is_hidden:false,
				}
			}
		],
		weight:85,
		height: 6,
		sprites: {
			front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
			other: {
				["official-artwork"] : {
					front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
				}
			}
		}
	}
	let methods = {
		...props,
		pokeInfo,
		cardLoading
	}
	return (
		<PokeCard {...methods} />
	)
}

export default PokeCardContainer;