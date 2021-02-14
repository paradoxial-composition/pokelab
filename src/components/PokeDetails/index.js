import React from 'react';
import './PokeDetails.scss';
import { Row, Col, Image, Card, Tag, Button } from 'antd';
import helpers from '../../assets/helpers';

const colorTypes = require('../../assets/types.json');

let PokeDetails = ({pokeInfo, history}) => {

	return (
		<React.Fragment>
			<Row>
				<Col xs={24}>
					<Button onClick={() => {history.push(`/${pokeInfo.name}`)}} className="poke-more-details-button" type="primary">
						More Info
					</Button>
				</Col>
			</Row>
			<Row gutter={[4,8]} className="poke-details-wrapper">
				<Col xs={24}>
					<Image style={{ margin: 'auto' }} src={pokeInfo.sprites.other['official-artwork'].front_default}/>
				</Col>
				<Col xs={24}>
					<Row justify="space-around" align="middle">
						<Col >
							<span>{'#'+ helpers.lpad(pokeInfo.id, 3) + ' ' + pokeInfo.name}</span>
							
						</Col>
						<Col >
						{pokeInfo.types.map( (item, index) => (
							<Tag className="poke-tag" key={index} color={colorTypes[item.type.name].tag}>{item.type.name}</Tag>
						))}
						</Col>
					</Row>
				</Col>
				<Col span={24}>
					<Card className="poke-card-details" 
						bodyStyle={{background: 'url('+ colorTypes[pokeInfo.types[0].type.name].background +')', backgroundSize: 'cover', borderRadius: '25px'}}>
						<Row justify="space-around" align="middle" gutter={[8,8]}>
							<Col span={12} >
								{/* pokeInfo.sprites.other.other["official-artwork"].front_default */}
								{/* 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + 4 + '.png' */}
								<img 
									src={pokeInfo.sprites.front_default}
									alt='charmandar'
								/>
							</Col>
							<Col span={12} >
								<span>Ability: {pokeInfo.abilities[0].ability.name}</span>
							</Col>
							<Col span={12} >
								<span>Weight: {pokeInfo.weight + ' g'}</span>
							</Col>
							<Col span={12} >
								<span>Height: {pokeInfo.height + ' dm'}</span>
							</Col>
						</Row>
					</Card>
				</Col>
			</Row>
		</React.Fragment>
	);
}

export default PokeDetails;