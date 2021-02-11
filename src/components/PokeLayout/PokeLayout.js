import React from 'react';
import './PokeLayout.scss';
import PokeCard from '../PokeCard';
import {Row, Col, Layout} from 'antd';

const {Content} = Layout;

let PokeLayout = () => {
	let pokeInfo = {
		pokeId: '4',
		pokeName: 'Charmander',
		pokeTypes: ['fire', 'dragon'],
	}
	let cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	
	let Pokecards = []
	cards.map( (item, index) => {
		Pokecards.push(
			<Col key={index} className="gutter-row" xs={24} md={12} lg={8}>
				<PokeCard  pokeInfo={pokeInfo}/>
			</Col>
		)
	})
	return (
		<Content style={{ width: '60%', margin: 'auto' }}>
			<Row justify="space-around" align="middle" gutter={[4,48]} >
				{Pokecards}
			</Row>
		</Content>
	);
}

export default PokeLayout;