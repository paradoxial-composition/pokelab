import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokeLayout from './PokeLayout';

let PokeLayoutContainer = (props) => {
	//fetch request level 1 (10 pokemon objects that have name and url for 2nd level fetch)
	
	let methods = {
		...props
	}
	return (
		<PokeLayout {...methods} />
	)
}

export default PokeLayoutContainer;