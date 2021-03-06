import React, {useState} from 'react';
import './PokeCard.scss';
import helpers from '../../assets/helpers';
import { Card, Tag,  Modal } from 'antd';
import PokeDetails from '../PokeDetails';

const { Meta } = Card;
const colorTypes = require('../../assets/types.json');
// const pokeInfo = {
// 	id: '4',
// 	name: 'Charmander',
// 	pokeTypes: [
// 		{
// 			type: {
// 				name: 'fire'
// 			}
// 		},
// 		{
// 			type: {
// 				name: 'dragon'
// 			}
// 		}
// 	],
// 	abilities: [
// 		{
// 			ability: {
// 				name:"blaze",
// 				is_hidden:false,
// 			}
// 		}
// 	],
// 	weight:85,
// 	height: 6,
// 	sprites: {
// 		front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
// 		other: {
// 			["official-artwork"] : {
// 				front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
// 			}
// 		}
// 	}
// }
let PokeCard = ({pokeInfo, loading, history}) => {
	let [isModalVisible, setIsModalVisible] = useState(false);
	
	return (
		<React.Fragment>
			<Card
				hoverable
				loading={loading}
				className="poke-card"
				cover={<img 
					src={(loading) ? 'https://i.pinimg.com/originals/02/c7/05/02c70572482476ba3ec8c4962f883705.png' : pokeInfo.sprites.other['official-artwork'].front_default} 
					alt={pokeInfo.pokeName}/>}
				onClick={() => {setIsModalVisible(true)}}
				bodyStyle={{background: 'url('+ colorTypes[pokeInfo.types[0].type.name].background +')', backgroundSize: 'cover'}}
			>
				{'#'+ helpers.lpad(pokeInfo.id, 3)}
				<Meta title={pokeInfo.name}/>
				
				{pokeInfo.types.map((item, index) => (
						<Tag className="poke-tag" key={index} color={colorTypes[item.type.name].tag}>{item.type.name}</Tag>
					))}
			</Card>
			<Modal
				visible={isModalVisible} 
				footer={null} 
				closable={false} 
				maskClosable={true}
				onCancel={() => {setIsModalVisible(false)}}
				bodyStyle={{borderRadius: '25px'}}
			>
				<PokeDetails history={history} pokeInfo={pokeInfo}/>
			</Modal>
		</React.Fragment>
		);
}

export default PokeCard;