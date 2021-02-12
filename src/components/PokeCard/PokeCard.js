import React, {useState} from 'react';
import './PokeCard.scss';
import { Card, Tag,  Modal } from 'antd';
import PokeDetails from '../PokeDetails';

const { Meta } = Card;
const typeColors = {
	fire: '#f50',
	dragon: '#531dab'
}
let PokeCard = ({pokeInfo}) => {
	let [isModalVisible, setIsModalVisible] = useState(false);

	let lpad = (value, padding) => {
		var zeroes = new Array(padding+1).join("0");
		return (zeroes + value).slice(-padding);
	}

	let tags = []
	pokeInfo.pokeTypes.map((item, index) => {
		tags.push(<Tag className="poke-tag" key={index} color={typeColors[item.type.name]}>{item.type.name}</Tag>)
	})
	return (
		<React.Fragment>
			<Card
				hoverable
				className="poke-card"
				cover={<img src={pokeInfo.sprites.other['official-artwork'].front_default} alt={pokeInfo.pokeName}/>}
				onClick={() => {setIsModalVisible(true)}}
			>
				<span>{'#'+ lpad(pokeInfo.pokeId, 3)}</span>
				<Meta title={pokeInfo.name}/>
				{tags}
			</Card>
			<Modal
				visible={isModalVisible} 
				footer={null} 
				closable={false} 
				maskClosable={true}
				onCancel={() => {setIsModalVisible(false)}}
			>
				<PokeDetails pokeInfo={pokeInfo}/>
			</Modal>
		</React.Fragment>
		);
}

export default PokeCard;