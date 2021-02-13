import React from 'react';
import './PokeDetails.scss';
import { Row, Col, Image, Card, Tag } from 'antd';

const desc = "Obviously prefers\nhot places. When\nit rains, steam\fis said to spout\nfrom the tip of\nits tail."

let PokeDetails = ({pokeInfo}) => {
	
	return (
			<React.Fragment>
				<Row gutter={[4,8]}>
					<Col xs={24} md={6}>
						<Image style={{ margin: 'auto' }} src={pokeInfo.sprites.other['official-artwork'].front_default}/>
					</Col>
					<Col xs={24} md={18}>
						<Row justify="space-around" align="middle">
							<Col span={24} >
								{'#'+ pokeInfo.id + ' ' + pokeInfo.name}
							</Col>
							<Col span={24} >
								<p>{desc}</p>
							</Col>
							<Col span={24} >
								<Tag color='orange'>{pokeInfo.types[0].type.name}</Tag>
								<Tag color='orange'>{pokeInfo.types[1].type.name}</Tag>
							</Col>
						</Row>
					</Col>
					<Col span={24}>
						<Card style={{ width: 300, margin: 'auto' }}>
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
									Ability: {pokeInfo.abilities[0].ability.name}
								</Col>
								<Col span={12} >
									Weight: {pokeInfo.weight + ' g'}
								</Col>
								<Col span={12} >
									Height: {pokeInfo.height + ' dm'}
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>
			</React.Fragment>
		);
}

export default PokeDetails;