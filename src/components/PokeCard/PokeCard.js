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
	const pokeImg = 'https://pokeres.bastionbot.org/images/pokemon/' + pokeInfo.id + '.png'

	let lpad = (value, padding) => {
		var zeroes = new Array(padding+1).join("0");
		return (zeroes + value).slice(-padding);
	}

	let tags = []
	pokeInfo.pokeTypes.map((item, index) => {
		tags.push(<Tag key={index} color={typeColors[item.type.name]}>{item.type.name}</Tag>)
	})
	return (
		<React.Fragment>
			<Card
				hoverable
				style={{ width: 240, margin: 'auto' }}
				cover={<img src={pokeImg} alt={pokeInfo.pokeName}/>}
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