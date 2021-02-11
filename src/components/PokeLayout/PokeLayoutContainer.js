import React from 'react';
import PokeLayout from './PokeLayout';

let PokeLayoutContainer = (props) => {
	let methods = {
		...props
	}
	return (
		<PokeLayout {...methods} />
	)
}

export default PokeLayoutContainer;