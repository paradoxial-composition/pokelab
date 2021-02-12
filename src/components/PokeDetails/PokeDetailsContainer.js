import React from 'react';
import PokeDetails from './PokeDetails';

let PokeDetailsContainer = (props) => {

	// fetch rquest lvl 3
	let desc = "Obviously prefers\nhot places. When\nit rains, steam\fis said to spout\nfrom the tip of\nits tail."
	let methods = {
		...props
	}
	return (
		<PokeDetails {...methods} />
	)
}

export default PokeDetailsContainer;