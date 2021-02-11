import React, {useState} from 'react';
import './PokeCard.scss';
import { Card, Tag, Image, Modal } from 'antd';

const { Meta } = Card;
const types = {
	fire: '#f50',
	dragon: '#531dab'
}
let PokeCard = ({pokeInfo}) => {
	let [isModalVisible, setIsModalVisible] = useState(false);
	const pokeImg = 'https://pokeres.bastionbot.org/images/pokemon/' + pokeInfo.pokeId + '.png'

	let lpad = (value, padding) => {
		var zeroes = new Array(padding+1).join("0");
		return (zeroes + value).slice(-padding);
	}

	let tags = []
	pokeInfo.pokeTypes.map((item, index) => {
		tags.push(<Tag key={index} color={types[item]}>{item}</Tag>)
	})
	return (
		<React.Fragment>
			<Card
				hoverable
				style={{ width: 240, margin: 'auto' }}
				cover={<Image src={pokeImg}/>}
				onClick={() => {setIsModalVisible(true)}}
			>
				<span>{'#'+ lpad(pokeInfo.pokeId, 3)}</span>
				<Meta title={pokeInfo.pokeName}/>
				{tags}
			</Card>
			<Modal title={'#' + lpad(pokeInfo.pokeId, 3) + ' ' + pokeInfo.pokeName} 
				visible={isModalVisible} 
				footer={null} 
				closable={false} 
				maskClosable={true}
				onCancel={() => {setIsModalVisible(false)}}
			>
				<p>PokeDetails</p>
			</Modal>
		</React.Fragment>
		);
}

export default PokeCard;