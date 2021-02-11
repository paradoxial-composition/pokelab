import React from 'react';
import './PokeCard.scss';
import { Card, Tag } from 'antd';

const { Meta } = Card;
const types = {
	fire: '#f50',
	dragon: '#531dab'
}
let PokeCard = ({pokeInfo}) => {
	const pokeImg = 'https://pokeres.bastionbot.org/images/pokemon/' + pokeInfo.pokeId + '.png'

	let tags = []
	pokeInfo.pokeTypes.map((item, index) => {
		tags.push(<Tag key={index} color={types[item]}>{item}</Tag>)
	})

	return (
		<Card
			hoverable
			style={{ width: 240 }}
			cover={<img alt="example" src={pokeImg} />}
		>
			<span>#{pokeInfo.pokeId}</span>
			<Meta title={pokeInfo.pokeName}/>
			{tags}
	  	</Card>
		);
}

export default PokeCard;