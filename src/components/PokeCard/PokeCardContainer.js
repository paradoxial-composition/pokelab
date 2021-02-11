import React from 'react';
import PokeCard from './PokeCard';

let PokeCardContainer = (props) => {
	let pokeInfo = {
		pokeId: '4',
		pokeName: 'Charmander',
		pokeTypes: ['fire', 'dragon'],
	}

	let methods = {
		...props,
		pokeInfo
	}
	return (
		<PokeCard {...methods} />
	)
}

export default PokeCardContainer;