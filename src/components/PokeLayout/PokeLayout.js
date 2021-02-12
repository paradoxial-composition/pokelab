import React from 'react';
import './PokeLayout.scss';
import PokeCard from '../PokeCard';
import Loading from '../Loading/Loading';
import {Row, Col, Layout, Modal} from 'antd';

const {Header, Content, Footer} = Layout;

let PokeLayout = ({pokeData, loading, timer}) => {
	
	let Pokecards = []
	pokeData.map( (item, index) => {
		Pokecards.push(
			<Col key={index} className="gutter-row" xs={24} md={12} lg={8}>
				<PokeCard  pokeCardPayload={item} loading={loading}/>
			</Col>
		)
	})
	return (
		<React.Fragment>
			<Header className="poke-header">
				<img className="poke-banner" src='https://camo.githubusercontent.com/90f24316b24433bf0a2778d95ca93ad264093645a71d2eb9f569cdbc34fbfc6d/68747470733a2f2f6372797374616c2d63646e322e6372797374616c636f6d6d657263652e636f6d2f70686f746f732f363333303536352f73706c61736842616e6e65725f706f6b656d6f6e2e6a7067'
					alt="Pokelab"
					height="200px"
				/>
			</Header>
			<Content className="poke-content">
				
				<Row justify="space-around" align="middle" gutter={[4,48]} >
					{Pokecards}
				</Row>
				
				{loading &&
				<Loading time={timer} loading={loading}/>
				}
			</Content>
			<Footer className="poke-footer">
				<img 
					className="poke-footer-img"
					src="https://static.zerochan.net/Starter.Pok%C3%A9mon.full.226607.jpg" 
					alt="Copyright nintendo ©2021"
				/>
			</Footer >
		</React.Fragment>
	);
}

export default PokeLayout;