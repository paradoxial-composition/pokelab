import React from 'react';
import PokeCard from './PokeCard';

let PokeCardContainer = (props) => {

	let methods = {
		...props,
	}
	return (
		<PokeCard {...methods} />
	)
}

export default PokeCardContainer;