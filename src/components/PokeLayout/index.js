import React, { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {Layout} from 'antd';
import {getPokemons} from '../../redux/actions/pokemons';

import RouterView from '../../router/RouterView';

import './PokeLayout.scss';

const { Header, Content, Footer } = Layout;

const PokeLayout = () => {
	const dispatch = useDispatch()
	const pokeCardData = useSelector(state => state.pokemons.pokemonCardInfo)

	
	useEffect( () => {
		dispatch(getPokemons({offset: 0}))
	}, [])

	window.onscroll = () => {
		let scrollPosition = window.innerHeight + window.scrollY
		let scrollHeight = document.documentElement.scrollHeight
		if(scrollPosition == scrollHeight) {
			dispatch(getPokemons({offset: pokeCardData.length}))
		}
	}

	return (
		<React.Fragment>
			<Header className="poke-header">
				<img className="poke-banner" src='https://camo.githubusercontent.com/90f24316b24433bf0a2778d95ca93ad264093645a71d2eb9f569cdbc34fbfc6d/68747470733a2f2f6372797374616c2d63646e322e6372797374616c636f6d6d657263652e636f6d2f70686f746f732f363333303536352f73706c61736842616e6e65725f706f6b656d6f6e2e6a7067'
					alt="Pokelab"
					style={{maxWidth: "767px", width: '100%'}}
				/>
			</Header>
			<Content className="poke-content">
				<RouterView />
			</Content>
			<Footer className="poke-footer">
				<img 
					className="poke-footer-img"
					src="https://static.zerochan.net/Starter.Pok%C3%A9mon.full.226607.jpg" 
					alt="Copyright nintendo ©2021"
					style={{maxWidth: "767px", width: '100%'}}
				/>
			</Footer >
		</React.Fragment>
	);
}

export default PokeLayout;