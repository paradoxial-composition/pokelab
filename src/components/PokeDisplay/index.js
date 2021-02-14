import React from 'react';
import './pokeDisplay.scss'
import {Row, Col} from 'antd';
import { useSelector } from 'react-redux';
import PokeCard from '../PokeCard';
import Loading from '../Loading';
import Filter from '../Filter';

const PokeDisplay = ({history}) => {
    const pokeCardData = useSelector(state => state.pokemons.pokemonCardInfo)
    const loading = useSelector(state => state.pokemons.loading)
	const error = useSelector(state => state.pokemons.error)
    return (
        <React.Fragment>
            <Filter />
            <Row justify="space-around" align="middle" gutter={[4,48]} >
                {pokeCardData.map( (item, index) => (
                <Col key={index} className="gutter-row" xs={24} md={12} lg={8}>
                    <PokeCard history={history} pokeInfo={item} loading={loading}/>
                </Col>
                ))}
            </Row>
            {loading &&
                <Loading loading={loading} error={error}/>
               }
        </React.Fragment>
    );
}

export default PokeDisplay;
    