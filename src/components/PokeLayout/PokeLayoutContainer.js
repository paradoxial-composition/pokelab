import React from 'react';
import PokeLayout from './PokeLayout';

let PokeLayoutContainer = (props) => {
	//fetch request level 1
	let methods = {
		...props
	}
	return (
		<PokeLayout {...methods} />
	)
}

export default PokeLayoutContainer;